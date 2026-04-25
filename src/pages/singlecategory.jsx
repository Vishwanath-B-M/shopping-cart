
import SingleCate from '../component/categoryTile/singlecategorytile'
export default function SingleCategory(){

 
    return(<>
    <div>
     <div >
        {url.map((item=><SingleCate  url={item}/>))}
    </div>
    </div>
    
    
    </>)

}