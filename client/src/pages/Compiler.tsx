import CodeEditor from "@/components/CodeEditor"
import Header from "@/components/Header"
import HelperHeader from "@/components/HelperHeader"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
 
const Compiler = () => {
  return (
    <>
    <Header/>

    <ResizablePanelGroup
      direction="horizontal"
      className=""
    >
      <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[350px]" defaultSize={50}>
        <HelperHeader/>
        <CodeEditor/>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[350px] "  defaultSize={50}>
        Right SIde
      </ResizablePanel>
    </ResizablePanelGroup>
 

    </>
  )
}

export default Compiler