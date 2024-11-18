import Item from "./Item"

const ItemList = ({ products }) => { 
    return (
        <div className="catalogo">
            {
                products.map((product)=> (
                    <Item product={product}  key={product.id} />
                ))
            }
        </div>
    )
}

export default ItemList