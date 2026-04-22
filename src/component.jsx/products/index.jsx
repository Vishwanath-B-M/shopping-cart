
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


   console.log(cart)

    return(<>
    <div>
        <img src={product.image} alt={product.title}/>
        <div>
          <button  onClick={() => {
  if (isitem) {
    RemoveHandle();
  } else {
    HandleAddtoCart();
  }
}}className="w-40 h-20 bg-green-900 ml-4 rounded br-4"> 
            { (isitem)? "remove from the cart":"add to cart" }
          

          </button>
        </div>
    </div>
      </>)
 }