
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
      <div className='flex flex-col h-[400px] items-center border-2 border-white mt-4 gap-2 rounded-xl shadow-xl hover:scale-105 transition-transform duration-500 overflow-hidden'>

<img 
  src={product.images[0]} 
  alt={product.title} 
  className='object-cover h-1/2 w-full'
/>

<h1 className='w-full truncate text-gray-700 font-bold text-lg text-center'>
  {product.title}
</h1>

<h4 className='text-gray-700 text-sm'>
  {product.availabilityStatus}
</h4>

<h4 className='text-gray-700 text-sm'>
  ${product.price}
</h4>

<div className='mt-auto w-full flex justify-center'>
  <button 
    onClick={() => isitem ? RemoveHandle() : HandleAddtoCart()}
    className="w-[90%] h-10 text-sm bg-white/40 border rounded-lg shadow hover:scale-105 transition"
  >
    {isitem ? "Remove" : "Add to cart"}
  </button>
</div>

</div>
   
      </div>)
 }