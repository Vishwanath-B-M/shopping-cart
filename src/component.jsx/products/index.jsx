export default function ProductTile({product}){
    return(<>
    <div>
        <img src={product.image} alt={product.title}/>
        <div>
          <button className="w-40 h-20 bg-green-900 ml-4 rounded br-4"> add to cart</button>
        </div>
    </div>
      </>)
 }