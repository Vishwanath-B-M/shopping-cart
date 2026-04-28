import { useState } from "react";
import { Link } from "react-router-dom";


export default function Login(){
    const [login,setlogin]=useState(true)



    return(<>
    
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300">
    
    <div className="h-full w-full flex flex-col  items-center justify-center ">
    <div className=" bg-white-700">
        <div className="flex flex-row object-cover gap-8">
            <button className="w-72 h-25 gap-4 text-black text-4xl bg-white/40  border-4 border-white/40 shadow-lg  hover:backdrop-blur-2xl hover:text-5xl" onClick={()=>setlogin(true)}>login</button>
            <button className="w-72 h-25 gap-4 text-black text-4xl bg-white/40  border-4 border-white/40 shadow-lg  hover:backdrop-blur-2xl hover:text-5xl" onClick={()=>setlogin(false)}>signup</button>
        </div>
        <div>{login?<div className="flex flex-col items-center p-4 object-cover">
                <input type="email" placeholder="email" className="w-120 h-15 border-2 gap-4 p-4 text-3xl mb:w-60 h-5 border-1 gap-2 p-1 text-2xl"/>
                <input type="text" placeholder="password"className="w-120 h-15 border-2 gap-4 p-4 mt-4 text-3xl mb:w-60 h-5 border-1 gap-2 p-1 text-2xl"/>
                <Link to='https://youtu.be/T330K2Ck9DU?list=RDT330K2Ck9DU'rel="preload" className="lg:text-3xl m-4 hover:text-4xl md:text-2xl m-2 hover:text3xl">
                          forget password?
                </Link> 
                <button type="submit" className="w-72 h-25 gap-4 text-black text-4xl bg-white/40  border-4 border-white/40 shadow-lg  hover:backdrop-blur-2xl hover:text-5xl 
                mb:w-35 h-15 gap-2 text-black text-2xl bg-white/40  border-2 border-white/40 shadow-lg  hover:backdrop-blur-2xl hover:text-3xl">login</button>
                <p className="text-3xl mt-9">not a member ? <a onClick={()=>setlogin(false)} className="w-60 h-10 bg-white/40 border-2 p-3 gap-4 text-3xl hover:backdrop-blur hover:text-4xl ">signup now </a></p>
            </div>:""}
           {!login? <div className="flex flex-col items-center p-4">
                <input type="email" placeholder="email"className="lg:w-120 h-15 border-2 gap-4 p-4 text-3xl mb:w-60 h-5 border-1 gap-2 p-1 text-2xl"/>
                <input type="text" placeholder="password"className="w-120 h-15 border-2 gap-4 p-4 mt-4 text-3xl mb:w-60 h-5 border-1 gap-2 p-1 text-2xl"/>
                <input type="text" placeholder="confirm password"className="w-120 h-15 border-2 gap-4 p-4 mt-4 text-3xl mb:w-60 h-5 border-1 gap-2 p-1 text-2xl"/>
                <button type="submit" className="w-72 h-32 gap-4 text-black text-4xl bg-white/40  border-4 border-white/40 shadow-lg  hover:backdrop-blur-2xl hover:text-5xl m-4 
                mb:w-35 h-15 gap-2 text-black text-2xl bg-white/40  border-2 border-white/40 shadow-lg  hover:backdrop-blur-2xl hover:text-3xl">signup</button>
            </div>:""}
        </div>
    </div>
    </div>
    </div>
     </>)
}