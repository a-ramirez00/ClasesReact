import React from 'react'

const Item = ({product}) => {
    return (
        <div>
            <div>  {/*para que no nos marque error */}
                <img src={product.imagen} alt="" />
                <h2>{product.nombre}</h2>
                <p>Precio: ${product.precio}</p>
            </div>
        </div>
    )
}

export default Item
