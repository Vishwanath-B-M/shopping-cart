import { useState,useEffect } from "react"
import { Circles } from "react-loader-spinner";
import ProductTile from "../component/products";
export default function Home(){
     const [product,setproduct]=useState([])
     const [loading,setloading]=useState(false)
     const [search,setsearch]=useState("")

  async function FetchProduct(){
    setloading(true)
    const res=await fetch('https://api.escuelajs.co/api/v1/products')
    const data= await res.json()
    if(data){
        setloading(false)
        setproduct(data)
    }
  }
useEffect(()=>{
    FetchProduct()
},[])


const searchs= product.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))


    return(<>
    <div className=" min-h-full bg-gradient-to-r from-blue-300 to-purple-300">{
        loading ? <div className="min-h-screen w-full flex justify-center items-center">
            <Circles
            height={'120'}
            width={'120'}
            color="rgb(127,29,29)"
            visible={true}
            />
        </div> : <div>
            <div>
                <input type="text" placeholder="search" className="w-2/4 h-10 border-2 ml-4 text-3xl mr-20 rounded hover:text-4xl hover:w-3/4" value={search} onChange={(e)=>setsearch(e.target.value)}/>
            </div>


            <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 gap-5 space-x-5 space-y-5 lg:grid-cols-4 max-w-6*l mx-auto p-3">
           {searchs?
            (searchs.map((item)=><ProductTile key={item.id} product={item}/>))
          
            :
            (product&&product.length? 
            product.map((productitem)=> <ProductTile key={productitem.id} product={productitem}/>):null)    
            }
            
            </div>

            </div>}
    </div>
    </>)
}

