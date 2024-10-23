// import useProducts from '../../hooks/useProducts'
import ItemList from './ItemList'
// import Loading from '../loading/Loading'
import hocFilterProducts from '../../hoc/HocFilterProducts'

// como hacemos para pasar datos?


const ItemListContainer = ({ products}) => {  /* <= otra forma de destructurar */

    // const { products, loading }= useProducts() //desestructuramos el objeto

    return (
        <div>
            {/* <h2>{saludo}</h2> se muestra en la pagina */}
            {
                // loading === true ? <Loading/> : 
                
            }
            <ItemList products={products}/>
        </div>
    )
}


const ItemListContainerWithHoc = hocFilterProducts( ItemListContainer)
// export default ItemListContainer

export default ItemListContainerWithHoc
