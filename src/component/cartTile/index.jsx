
import {useDispatch} from 'react-redux'
import  {removeFromcart} from '../../store/slice/cartslice'

export default function CartTile({cartitem}){
const dispatch=useDispatch()
function RemoveHandle(){
    dispatch(removeFromcart(cartitem.id))
}
    return(<>
    <div>  <div className='min-h-[40vh] flex flex-col items-center justify-center'>
        
        <img src={cartitem.images[1]} className='max-w-80 max-h-80 hover:max-w-90 max-h-90'/>
        <p className='text-2xl'><span>  {cartitem.title}</span></p><br></br>
        <p className='text-2xl'><span>  price: {cartitem.price}$</span></p>



        <div>
        <button  onClick={ RemoveHandle } className="w-72 h-25 gap-4 text-black text-4xl bg-white/40  border-4 border-white/40 shadow-lg  hover:backdrop-blur-2xl hover:text-5xl m-4">
              "remove from the cart" 
          </button>
        </div>
        
        
        </div> </div>
    
    
    </>)


}
