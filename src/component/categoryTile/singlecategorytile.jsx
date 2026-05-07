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
    <div className="flex flex-col max-h-[300px] lg:max-h-[400px] overflow-hidden items-center lg:mt-2 lg:gap-2 rounded-2xl shadow-xl 
hover:scale-105 transition-transform duration-500">

  <img 
    src={product.thumbnail} 
    alt={product.title}
    className="object-cover lg:h-48 w-full"
  />

  <h3 className="w-40 truncate text-gray-700 font-bold text-lg text-center">
    {product.title}
  </h3>

  <p className="text-gray-600 text-sm">
    {product.availabilityStatus}
  </p>

  <p className="text-gray-800 font-semibold text-lg">
    ${product.price}
  </p>

  <button 
    onClick={() => isitem ? RemoveFromCart() : HandleAddtoCart()} 
    className="w-full lg:w-2/3 h-8 text-sm bg-white border rounded-xl shadow 
    hover:scale-105 transition mb-2"
  >
    {isitem ? "Remove from cart" : "Add to cart"}
  </button>

</div>
    
    
    </>)
}
   