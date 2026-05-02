import { useDispatch,useSelector } from "react-redux"
import { addTocart,removeFromcart} from "../../store/slice/cartslice"
export default function SingleCate({product}){
  if(!product) return null
  const dispatch=useDispatch()
  const cart=useSelector(state=>state.cart.cart)
  function HandleAddtoCart(){
    dispatch(addTocart(product))
  }
  function RemoveFromCart(){
    dispatch(removeFromcart(product.id))
  }
  const isitem=cart.some((item)=>item.id===product.id)
    return(<>
    <div className="lg:max-h-[400px] overflow-hidden flex flex-col items-center justify-center border-2 border-red-900 mt-2 gap-2 rounded-2xl border-2 border-black shadow-3xl hover:scale-105 transition-transform duration-500 
    sm:max-h-100 flex flex-col items-center border-1 border-red-900 mt-2 gap-2 rounded border-2 border-white shadow-3xl hover:scale-105 transition-transform duration-500 ">
      <img src={product.thumbnail} alt={product.title} 
      className="object-cover h-1/2 w-full text-2xl"/>
      <h3 className="w-40 truncate text-grey-700 font-bold pb-6 text-lg">
        {product.title}
        </h3>
      <p className="text-grey-700 font-bold  text-lg ">
        {product.availabilityStatus}
        </p>
      <p className="text-grey-700 font-bold text-lg ">
        ${product.price}
        </p>
      <button onClick={()=>isitem?RemoveFromCart():HandleAddtoCart()} 
      className="lg:w-72 h-25 gap-1 text-black text-4xl bg-white/40 mb-2 border-4 border-white/40 rounded-3xl shadow-lg  hover:backdrop-blur-2xl hover:text-5xl object-cover">
        {isitem?"remove from cart":"add to cart"}
        </button>
    </div>
    
    
    </>)
}
   