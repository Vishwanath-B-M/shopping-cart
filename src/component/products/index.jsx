
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
    <div>
        <img src={product.image} alt={product.title}/>
        <div>
          <button  onClick={() => isitem ? RemoveHandle() : HandleAddtoCart()} className="w-20 h-20 bg-green-900 rounded">
             { isitem ? "remove from the cart":"add to cart" }
          </button>
        </div>
    </div>
      </>)
 }