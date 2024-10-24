import React from 'react'
import { Link } from 'react-router-dom'



const Item = ({product}) => {
    return (
        <div>
            <div> 
                <img src={product.image} alt="" />
                <h2>{product.name}</h2>
                <p>Precio: ${product.price}</p>


                <Link to={'/detail/' + product.id} >Ver detalles </Link>
            </div>

            {/* <Link to={'/detail/' + product.id} >  para que no nos marque error */}
                {/* <img src={product.image} alt="" /> */}
                {/* <h2>{product.name}</h2> */}
                {/* <p>Precio: ${product.price}</p> */}

            {/* </Link> */}
        </div>
    )
}

export default Item
