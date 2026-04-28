import { useState,useEffect } from "react"
import CategoryTile from "../component/categoryTile/categorytile";

export default function Category(){
    const [Category,setcategory]=useState([])
    const [loading,setloading]=useState(true)
    async function FetchData() {
        const res=await fetch('https://dummyjson.com/products/categories')
        const data=await res.json()
        if(data){
            setloading(false)
            setcategory(data)
        }   
    }
    useEffect(()=>{
        FetchData()
    },[])
    return(<>
    <div className="min-h-4/4 ">
        <div className="bg-gradient-to-r from-blue-300 to-purple-300 flex flex-col items-center justify-center border-2 border-white shadow-2xl overflow-hidden overflow-scroll md:border-1">
            {
                Category.map((item)=><CategoryTile key={item.id} Category={item}/>)
            }   
        </div>
        </div>
     </>)
}