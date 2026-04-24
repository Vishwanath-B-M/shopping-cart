
import {useDispatch} from 'react-redux'
import  {removeFromcart} from '../../store/slice/cartslice'

export default function CartTile({cartitem}){
const dispatch=useDispatch()
function RemoveHandle(){
    dispatch(removeFromcart(cartitem.id))
}
    return(<>
    <div>  <div className='min-h-[40vh] flex flex-col items-center justify-center'>
        
        <img src={cartitem.image}/>
        <p><span>  {cartitem.title}</span></p><br></br>
        <p><span>  price: {cartitem.price}$</span></p>



        <div>
        <button  onClick={ RemoveHandle } className="w-40 h-20 bg-green-700 rounded flex flex-col items-center justify-center text-white">
              "remove from the cart" 
          </button>
        </div>
        
        
        </div> </div>
    
    
    </>)


}
