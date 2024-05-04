import { Button } from "./ui/button";
import { Save, Share2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { compilerSliceStateType, updateCurrentLanguage } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";

const HelperHeader = () => {
  const dispatch = useDispatch()
  const defaultLang = useSelector((state:RootState)=> state.compilerSlice.currentLanguage)

  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-left ">
      <div className="__btn_container flex gap-1">
        <Button
          className="flex justify-center items-center gap-1"
          variant="success"
        >
          <Save size={16} /> Save
        </Button>
        <Button className="flex justify-center items-center gap-1">
          <Share2 size={16} /> Share
        </Button>
      </div>
      <div className="__tab_switcher">
        <Select defaultValue={defaultLang} onValueChange={(value)=> dispatch(updateCurrentLanguage(value as compilerSliceStateType["currentLanguage"]))}>
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
