
import {useDispatch, useSelector} from 'react-redux'
import { addTocart ,removeFromcart} from '../../store/slice/cartslice'


export default function ProductTile({product}){

const dispatch=useDispatch()
const cart =useSelector(state=>state.cart.cart)


     function HandleAddtoCart(){
    dispatch(addTocart(product))
    console.log( product)
     }
    function RemoveHandle(){
      dispatch(removeFromcart(product.id))
      console.log( product.id);

    }
   const isitem= cart.some(item=>item.id===product.id)


    return(<div>
      <div className='flex flex-col max-h-[400px] items-center justify-center border-2 border-white mt-2 gap-1 rounded-xl shadow-xl hover:scale-105 transition-transform duration-500 overflow-hidden
     lg:max-h-[400px] overflow-hidden flex flex-col items-center justify-center border-2 border-red-900 mt-2 gap-2 rounded-2xl border-2 border-black shadow-3xl hover:scale-105 transition-transform duration-500 
    '>

<img 
  src={product.images[0]} 
  alt={product.title} 
  className='object-cover h-1/2 w-full'
/>

<h1 className='w-40 truncate text-gray-700 font-bold p-6 text-2xl text-center'>{product.title}</h1>

<h4 className='text-gray-700 text-lg'>{product.availabilityStatus}</h4>

<h4 className='text-gray-700 text-lg'>${product.price}</h4>

<div className=' w-full flex justify-center'>
  <button 
    onClick={() => isitem ? RemoveHandle() : HandleAddtoCart()}
    className="w-72 h-25 text-4xl bg-white/40 border-white rounded-3xl shadow hover:scale-105 transition mb-2 p-1 lg:w-1/2 h-10 gap-1 text-black text-4xl bg-white/40 mb-2 border-4 border-white/40 rounded-3xl shadow-lg  hover:backdrop-blur-2xl hover:text-5xl object-cover">
        {isitem?"remove from cart":"add to cart"}
   </button>
</div>

</div>
   
      </div>)
 }