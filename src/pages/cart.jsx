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



    return(<>
    <div>
        {cart&&cart.length?<div>

            {cart.map((cartitem=><CartTile key={cartitem.id} cartitem={cartitem} />))}


            <div><h1> your cart summary</h1> 

            <p>  
              <span> total item: <span> {cart.length}</span> </span><br></br>
              <span>total price:{totalcart.toFixed(2)}</span>
            </p>
            
            
            
            
            </div>
            


        </div>:<div><h1> cart is empty </h1>
        <Link  to='/'>
        <button className="w-20 h-20 bg-green-900"> shop now  </button>
        </Link>



        </div>}
    </div>
    </>)
}