
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
    <div className='flex flex-col items-center border-2 border-red-900 mt-4 gap-4 rounded-xl'>
        <img src={product.image} alt={product.title} className='object-cover h-full w-full'/>
        <h1 className='w-40 truncate text-grey-700 font-bold'> {product.title}</h1>
        <div className='flex item-center justify-center w-full mb-3'>
          <button  onClick={() => isitem ? RemoveHandle() : HandleAddtoCart()} className="bg-green-700 rounded p-6 font-bold border-2 text-2xl">
             { isitem ? "remove from the cart":"add to cart" }
          </button>
        </div>
    </div>
      </>)
 }