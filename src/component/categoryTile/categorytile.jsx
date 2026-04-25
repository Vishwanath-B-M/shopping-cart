
import {Link} from "react-router-dom"
export default function CategoryTile({Category}){
   
    return(<>
             
        <Link to={`https://dummyjson.com/products/category/${category.name}`} ><p>
            {Category.name}
        </p>
        </Link>
        
        </>)
}