
import {Link, Navigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../store/autoslice/auto"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header(){
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    const token =useSelector((state)=>state.auto.token)

   function HandleLogout(){
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem(`cart_${token}`)
     Navigate('/login')

   }
   
    return(<div className=" w-full bg-gradient-to-r from-blue-300 to-purple-300">
        <div>
        <nav className="flex items-center justify-between h-8 lg:h-24 w-full mx-auto bg-gradient-to-r from-blue-300 to-purple-300">
        <Link to={"/"}>


        <div className="ml-2 lg:ml-4">

        <h1 className="text-red-900 font-bold  textxl lg:text-5xl hover:text-2xl lg:hover:text-7xl"> 
        shopping website
        </h1>
        <p className="text-bold">using react redux</p>
        </div>
        </Link>

        <ul className=" textxl lg:text-4xl text-black flex flex-cols items-end gap-2 lg:gap-4 mr-auto lg:mr-10"> 
           
        <Link to={"/"}>
            <li key={1} className=" hover:text-2xl lg:hover:text-5xl"> Home </li>
            </Link>
            <Link to={"/category"}>
            <li key={2} className="hover:text-2xl lg:hover:text-5xl"> Category </li>
            </Link>
            <Link to={"/cart"}>
            <li key={3} className="hover:text-2xl lg:hover:text-5xl"> Cart </li>
            </Link>
            <li key={4} className="hover:text-2xl lg:hover:text-5xl">{token ? <button onClick={HandleLogout}>Logout</button> : <Link to={"/login"}> login </Link>} </li>
        </ul>
        </nav>
        </div>
        </div>
    )
}