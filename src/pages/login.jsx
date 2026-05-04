import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { loginSuceess } from "../store/autoslice/auto"



export default function Login(){
    const [login,setlogin]=useState(true)
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [message,setmessage]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
        async function FetchLogin(params) {
            const res=await fetch("https://dummyjson.com/auth/login",{
                method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
});
            const data=await res.json()
            
            
        
        if(res.ok){
            console.log(data)
            const token=data.accessToken

            setmessage("login successfully")
            localStorage.setItem("token",token)
            dispatch(loginSuceess(token))

            setmessage("suceesufully login")
            setusername("")
            setpassword("")
            navigate("/")
        }
        else{
            setmessage("login failed")
            username===""||password===""?setmessage(data.message):setmessage("invalid username or password")
            setusername("")
            setpassword("")
        }
    };
        

    return(<>
    
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300">
    
    <div className="h-full w-full flex flex-col  items-center justify-center ">
    <div className=" bg-white-700">
        <div className="flex flex-row object-cover gap-8 mt-4">
            <button className="w-32 h-8 lg:w-64 lg:h-16 gap:2 lg:gap-4 text-black text-2xl lg:text-4xl bg-white/40 border-2 lg:border-4 border-white/40 rounded-3xl shadow-lg  hover:backdrop-blur-2xl hover:text-3xl lg:hover:text-5xl" onClick={()=>setlogin(true)}>login</button>
            <button className="w-32 h-8 lg:w-64 lg:h-16 gap:2 lg:gap-4 text-black text-2xl lg:text-4xl bg-white/40 border-2 lg:border-4 border-white/40 rounded-3xl shadow-lg  hover:backdrop-blur-2xl hover:text-3xl lg:hover:text-5xl" onClick={()=>setlogin(false)}>signup</button>
        </div>
        <div>{login?<div className="flex flex-col items-center p-4 object-cover">
                <input type="text" value={username} onChange={e=>setusername(e.target.value)&&setusername("")} placeholder="username" className="w-56 h-8 lg:w-96 lg:h-16  border-2 gap-2 p-2 text-3xl border-1 gap-2 p-1 text-2xl rounded-2xl"/>
                <input type="text" value={password} onChange={e=>setpassword(e.target.value)} placeholder="password"className="w-56 h-8 lg:w-96 lg:h-16 border-2 gap-4 p-4 mt-4 text-3xl border rounded-2xl gap-2 text-2xl"/>
                <Link to="https://youtu.be/T330K2Ck9DU?list=RDT330K2Ck9DUrel=preload" className="lg:text-3xl lg:m-4 lg:hover:text-4xl text-md m-2 hover:text-3xl ">
                          forget password?
                </Link> 
                <button type="submit" className="w-32 h-8 lg:w-64 h-16
                 gap-2 text-black text-2xl bg-white/40  border-2 border-white/40 shadow-lg  hover:backdrop-blur-2xl hover:text-3xl 
                 lg:gap-4 lg:text-4xl  rounded-2xl lg:hover:text-5xl" onClick={FetchLogin}>login</button>
                <p>{message}</p>
                <p className="text-3xl mt-9">not a member ? <a onClick={()=>{setlogin(false)}} className="bg-white/40 border-2 p-2 gap-4 text-2xl hover:backdrop-blur hover:text-4xl roundedxl">signup now </a></p>
            </div>:""}
           {!login? <div className="flex flex-col items-center p-4">
                <input type="email" placeholder="email"className="w-56 h-8 lg:w-96 lg:h-16 border-2 gap-2 p-2 lg:text-3xl text-2xl rounded-2xl"/>
                <input type="text" placeholder="password"className="w-56 h-8 lg:w-96 lg:h-16 border-2 gap-2 p-2 mt-2 lg:text-3xl text-2xl rounded-2xl"/>
                <input type="text" placeholder="confirm password"className="w-56 h-8 lg:w-96 lg:h-16 border-2 lg:gap-4 lg:p-4 lg:mt-4 lg:text-3xl  gap-2 text-2xl rounded-2xl"/>
                <button type="submit" className="w-48 h-8 lg:w-64 lg:h-16 lg:gap-4 text-black lg:text-4xl bg-white/40  lg:border-4 border-white/40 lg:rounded-3xl shadow-lg lg:hover:text-5xl lg:m-4 
                gap-2  text-2xl bg-white/40  border-2  hover:text-3xl">signup</button>
            </div>:""}
        </div>
    </div>
    </div>
    </div>
     </>)
}