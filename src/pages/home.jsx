import { useState,useEffect } from "react"
import { Circles } from "react-loader-spinner";
import ProductTile from "../component/products";
export default function Home(){
     const [product,setproduct]=useState()
     const [loading,setloading]=useState(false)


  async function FetchProduct(){
    setloading(true)
    const res=await fetch('https://fakestoreapi.com/products')
    const data= await res.json()
    console.log(data)
    if(data){
        setloading(false)
        setproduct(data)
    }
  }
useEffect(()=>{
    FetchProduct()
},[])


    return(<>
    <div>{
        loading ? <div className="min-h-screen w-full flex justify-center items-center">
            <Circles
            height={'120'}
            width={'120'}
            color="rgb(127,29,29)"
            visible={true}
            />
        </div> : <div>
            {
                product&&product.length? 
                product.map((productitem)=> <ProductTile key={productitem.id} product={productitem}/>):null
            }

            </div>}
    </div>
    </>)
}