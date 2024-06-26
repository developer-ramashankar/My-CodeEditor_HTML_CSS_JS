import { Link } from "react-router-dom"
import { Button } from "./ui/button"

 

const Header = () => {
  return (
    <nav className="w-full h-[60px] text-white bg-gray-900 p-3 flex justify-between items-center">
        <Link to="/"><h2 className=" font-bold select-none">RB Complier</h2></Link> 
       <ul className="flex gap-2">
          <li>
            <Link to="/compiler"><Button variant="secondary">Compiler</Button></Link>
          </li>
       </ul>
    </nav>
  )
}

export default Header