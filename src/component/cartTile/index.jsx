
import {useDispatch} from 'react-redux'
import  {removeFromcart} from '../../store/slice/cartslice'

export default function CartTile({cartitem}){
const dispatch=useDispatch()
function RemoveHandle(){
    dispatch(removeFromcart(cartitem.id))
}
    return(<>
    <div>  <div>
        
        <img src={cartitem.image}/>
        <p><span>  {cartitem.title}</span></p><br></br>
        <p><span>    {cartitem.price}</span></p>



        <div>
        <button  onClick={ RemoveHandle } className="w-20 h-20 bg-green-900 rounded">
              "remove from the cart" 
          </button>
        </div>
        
        
        </div> </div>
    
    
    </>)


}
