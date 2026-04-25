
import {useDispatch, useSelector} from 'react-redux'
import { addTocart ,removeFromcart} from '../../store/slice/cartslice'


export default function ProductTile({product}){

const dispatch=useDispatch()
const cart=useSelector(state=>state.cart)



     function HandleAddtoCart(){
    dispatch(addTocart(product))
    console.log( product)
     }
    function RemoveHandle(){
      dispatch(removeFromcart(product.id))
      console.log( product.id);

    }
   const isitem= cart.some(item=>item.id===product.id)


    return(<>
    <div className='flex flex-col items-center border-2 border-red-900 mt-4 gap-4 rounded-xl border-2 border-white shadow-3xl hover:scale-105 transition-transform duration-500'>
        <img src={product.images[1]||product.images[1]} alt={product.title} className='object-cover h-full w-full text-2xl '/>
        <h1 className='w-40 truncate text-grey-700 font-bold p-2 text-3xl'> {product.title}</h1>
        <div className='flex item-center justify-center w-full'>
          <button  onClick={() => isitem ? RemoveHandle() : HandleAddtoCart()} className="w-72 h-25 gap-2 text-black text-4xl bg-white/40  border-4 border-white/40 shadow-lg  hover:backdrop-blur-2xl hover:text-5xl">
             { isitem ? "remove from the cart":"add to cart" }
          </button>
        </div>
    </div>
      </>)
 }