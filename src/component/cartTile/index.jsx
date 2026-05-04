
import {useDispatch} from 'react-redux'
import  {removeFromcart} from '../../store/slice/cartslice'

export default function CartTile({cartitem}){
const dispatch=useDispatch()
function RemoveHandle(){
    dispatch(removeFromcart(cartitem.id))
}
    return(<>
    <div>  <div className='min-h-[40vh] flex flex-col items-center justify-center object-cover '>
        <img src={cartitem.images[0]} className='max-w-80 max-h-80 hover:max-w-90 max-h-90'/>
        <p className='text-2xl'><span>  {cartitem.title}</span></p><br></br>
        <p className='text-2xl'><span>  price: {cartitem.price}$</span></p>



        <div>
        <button  onClick={ RemoveHandle } className="w-full lg:h-10 text-sm border bg-white shadow-xl rounded-xl hover:scale-105 transition m-1">

              remove from the cart 
          </button>
        </div>
        
        
        </div> </div>
    
    
    </>)


}
