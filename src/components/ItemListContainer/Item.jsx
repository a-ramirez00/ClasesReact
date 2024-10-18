import React from 'react'

const Item = ({product}) => {
    return (
        <div>
            <div>  {/*para que no nos marque error */}
                <img src={product.image} alt="" />
                <h2>{product.name}</h2>
                <p>Precio: ${product.price}</p>
            </div>
        </div>
    )
}

export default Item
