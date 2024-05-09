import { Link } from "react-router-dom"
import { Button } from "./ui/button"

 

const Home = () => {
  return (
   <>
   <div className="bg-gray-100  h-[calc(100dvh-60px)]">
      <header className="bg-gray-800 text-white py-10  text-center">
        <h1 className="text-4xl font-bold">Welcome to RD Compiler</h1>
        <p className="mt-4">A powerful tool to compile your code</p>
        <Link to="/compiler"><Button className="m-3" variant={"success"}>Compiler Now </Button></Link>
      </header>
      <section className="container text-black mx-auto mt-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc ml-6">
          <li>Support for multiple programming languages</li>
          <li>Fast and efficient compilation</li>
          <li>Easy to use interface</li>
          <li>Real-time error checking</li>
        </ul>
      </section>
      <section className="container  text-black mx-auto mt-8 px-4">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>We are passionate about creating tools that make developers' lives easier. Our compiler is designed to streamline the development process and catch errors early, saving you time and effort.</p>
      </section>
      <footer className="text-center mt-8 pb-4">
        <p className="text-gray-600">&copy; 2024 My Compiler. All rights reserved.</p>
      </footer>
    </div>
   </>
  )
}

export default Home
 
 