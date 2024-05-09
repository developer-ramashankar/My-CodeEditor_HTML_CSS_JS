import { Button } from "./ui/button";
import { Code, Copy, Loader, Save, Share2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  compilerSliceStateType,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { useToast } from "@/components/ui/use-toast";

const HelperHeader = () => {
  const { toast } = useToast();
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [shareBtn, setshareBtn] = useState<boolean>(false);

  const navigator = useNavigate();
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const { urlId } = useParams();
  useEffect(() => {
    if (urlId) {
      setshareBtn(true);
    }
    else{
      setshareBtn(false);
    }
  }, [urlId]);
  
  const handleSaveCode = async () => {
    setSaveLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/compiler/save", {
        fullCode: fullCode,
      });

      navigator(`/compiler/${response.data.url}`, { replace: true }); //it is used for replace the url part for new page
    } catch (error) {
      handleError(error);
    }
    setSaveLoading(false);
  };
  const dispatch = useDispatch();
  const defaultLang = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-left ">
      <div className="__btn_container flex gap-1">
        <Button
          className="flex justify-center items-center gap-1"
          variant="success"
          onClick={handleSaveCode}
          disabled={saveLoading}
        >
          {saveLoading ? (
            <>
              <Loader size={16} className="animate-spin" /> Savig...
            </>
          ) : (
            <>
              <Save size={16} /> Save
            </>
          )}
        </Button>
          {shareBtn && (<Dialog>
          <DialogTrigger className="whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 flex justify-center items-center gap-1">
            <Share2 size={16} /> Share
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex gap-1 justify-center">
                <Code />
                Share your Code!
              </DialogTitle>
              <DialogDescription>
                <div className="__url flex gap-2">
                  <Input
                    type="text"
                    disabled
                    className=" text-white"
                    value={window.location.href}
                  />
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      window.navigator.clipboard.writeText(
                        window.location.href
                      );
                      toast({
                        title: "URL Copied",
                      });
                    }}
                  >
                    <Copy size={12} />
                  </Button>
                </div>
                <p className="mt-2 flex justify-center font-semibold">
                  Share this URL with your friends to collaborate.
                </p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>)}
        
      </div>
      <div className="__tab_switcher">
        <Select
          defaultValue={defaultLang}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguage(
                value as compilerSliceStateType["currentLanguage"]
              )
            )
          }
        >
          <SelectTrigger className="w-[180px] bg-gray-800 outline-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="html">HTML</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
              <SelectItem value="javascript">JS</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default HelperHeader;
