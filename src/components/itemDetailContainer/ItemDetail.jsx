import React from 'react'

const ItemDetail = ({product}) => {
    return (
        <div style={{ display: 'flex' }}>

            <img src={product.image} sizes={200} alt="" />
            <div>

                <h2>{product.name}</h2>
                <p>{product.Descriptions}</p>
                <p>Precio: $ {product.price}</p>
            </div>
        </div >
    )
}

export default ItemDetail
