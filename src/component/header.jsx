import {Link} from "react-router-dom"

export default function Header(){
    return(<>
        <div>
        <nav className="flex items-center justify-between h-20 w-full mx-auto bg-gradient-to-r from-blue-300 to-purple-300">
        <Link to={"/"}>


        <div className="ml-5">

        <h1 className="text-red-900 font-bold  text-xl sm:text-2xl lg:text-5xl hover:text-7xl"> 
        shopping website
        </h1>
        <p className="text-bold">using react redux</p>
        </div>
        </Link>

        <ul className="text-4xl text-black flex flex-cols items-end gap-4 mr-10"> 
            <Link to={"/"}>
            <li key={1} className="hover:text-5xl"> Home </li>
            </Link>
            <Link to={"/cart"}>
            <li key={2} className="hover:text-5xl"> Cart </li>
            </Link>
            <Link to={'/login'}>
            <li key={3} className="hover:text-5xl">Login </li>
            </Link>
        </ul>
        </nav>
        </div>
        </>
    )
}