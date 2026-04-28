import { useDispatch,useSelector } from "react-redux"
import { addTocart,removeFromcart} from "../../store/slice/cartslice"
export default function SingleCate({product}){
  if(!product) return null
  const dispatch=useDispatch()
  const cart=useSelector(state=>state.cart)
  function HandleAddtoCart(){
    dispatch(addTocart(product))
  }
  function RemoveFromCart(){
    dispatch(removeFromcart(product.id))
  }
  const isitem=cart.some((item)=>item.id===product.id)
    return(<>
    <div className="max-h-200 flex flex-col items-center border-2 border-red-900 mt-8 gap-4 rounded-xl border-2 border-white shadow-3xl hover:scale-105 transition-transform duration-500 ">
      <img src={product.thumbnail} alt={product.title} className="object-cover h-[80%] w-[80%] text-2xl"/>
      <h3 className="w-40 truncate text-grey-700 font-bold p-2 text-3xl">{product.title}</h3>
      <p className="text-grey-700 font-bold p-2 text-3xl ">{product.availabilityStatus}</p>
      <p className="text-grey-700 font-bold p-2 text-3xl ">${product.price}</p>
      <button onClick={()=>isitem?RemoveFromCart():HandleAddtoCart()} className="w-72 h-25 gap-2 text-black text-4xl bg-white/40 mb-2 border-4 border-white/40 shadow-lg  hover:backdrop-blur-2xl hover:text-5xl object-cover">{isitem?"remove from cart":"add to cart"}</button>
    </div>
    
    
    </>)
}
   