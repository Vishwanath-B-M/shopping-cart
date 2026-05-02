
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
      <div className='flex flex-col h-[700px] items-center justify-center border-2 border-white mt-2 gap-1 rounded-xl shadow-xl hover:scale-105 transition-transform duration-500 overflow-hidden'>

<img 
  src={product.images[0]} 
  alt={product.title} 
  className='object-cover h-[400px] w-full'
/>

<h1 className='w-40 truncate text-gray-700 font-bold p-4 text-2xl text-center'>{product.title}</h1>

<h4 className='text-gray-700 text-2xl'>{product.availabilityStatus}</h4>

<h4 className='text-gray-700 text-2xl'>${product.price}</h4>

<div className=' w-full flex justify-center'>
  <button 
    onClick={() => isitem ? RemoveHandle() : HandleAddtoCart()}
    className="w-72 h-25 text-4xl bg-white/40 border-white rounded-3xl shadow hover:scale-105 transition mb-1 p-4"
  >
    {isitem ? "Remove" : "Add to cart"}
  </button>
</div>

</div>
   
      </div>)
 }