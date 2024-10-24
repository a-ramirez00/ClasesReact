import { useEffect, useState } from 'react'
import { getProducts } from '../../data/data.js'
import ItemDetail from './ItemDetail.jsx'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {


    const [product, setProduct] = useState({})
    const {idProduct } = useParams()


    useEffect(() => {
        getProducts()
            .then((data) => {
                const findProduct = data.find((product) => product.id === idProduct)
                setProduct(findProduct)
            })
    }, [idProduct])

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer
