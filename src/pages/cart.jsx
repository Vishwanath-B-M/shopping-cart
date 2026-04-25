import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import CartTile  from "../component/cartTile";
export default function Cart(){ 
    const [totalcart,settotalcart]=useState(0)
    const cart=useSelector(state=>state.cart)
    useEffect(()=>{
        settotalcart(cart.reduce((accumulater,current) => accumulater+current.price,0))
    },[cart])
    console.log(cart)
    return(< div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300">
    <div  className='flex flex-col items-center justify-center' >
        {cart&&cart.length?(<div className='flex flex-col items-center justify-center mt-4'>
            {cart.map((cartitem=><CartTile key={cartitem.id} cartitem={cartitem} />))}
            <h1 className='text-4xl'> your cart summary</h1>
            <p >  
              <span className='text-4xl'> total item: <span> {cart.length}</span> </span><br></br>
              <span className='text-4xl'>total price:{totalcart.toFixed(2)}$</span>
            </p>
        </div>):(<div className='min-h-screen flex flex-col items-center justify-center'><h1 className='text-4xl'> cart is empty </h1>
        <Link  to='/'>
        <button className="w-72 h-25 gap-4 text-black text-4xl bg-white/40  border-4 border-white/40 shadow-lg  hover:backdrop-blur-2xl hover:text-5xl"> shop now  </button>
        </Link>
       </div>)
       }
    </div>
    </div>)
}