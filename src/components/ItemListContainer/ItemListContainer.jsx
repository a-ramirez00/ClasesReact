import React from 'react'
// import { getProducts } from '../../data/data.js'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getProducts, getProductByid, addProduct, modProduct, deleteProductById } from '../../util/fetchApi.js'

// como hacemos para pasar datos?


const ItemListContainer = ({ saludo }) => {  /* <= otra forma de destructurar */
    //console.log(props.saludo)   // Todas las props llegan dentro de un objeto

    //const {saludo} = props  // de esta manera destructuramos

    const [products, setProducts] = useState([])

    const newProduct = {
        nombre: "Zapatilas verdes",
        descripcion: '',
        precio: 5000,
        stock: 5,
        imagen: "/img/zapatilla.jpeg",
        categoria: "zapatillas"
    }
    const mod = {
        precio: 15000,
        categoria: ''
    }

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))

        getProductByid(1)
            .then((data) => console.log(data))
    }, [])

    /*
    
    // usamos useEffect para que la promesa solo se ejecute una vez
    useEffect(() => {
        // Llamo la funcion y encadeno .then y .cathc
        getProducts()
            .then((data) => {  // .then captura la respuesta
                setProducts(data)
            }).catch((error) => {    // .catch captura el rechazo de la promesa
                console.error(error)
            }).finally(() => {          // siempre se ejecuta cuando la promesa finaliza, no importa si sale bien o mal
                console.log('finalizo la promesa')
            })
    }, [])
    
    */

    /*
    const nombres = ['Emanuel', 'Pablo', 'Bautista', 'Facundo']
    
    
    // PRIMERA FORMA DE MOSTAR ALGO EN PANTALLA
    // defino una variable y le asigno nommbres.map ....
    //luego al nombre de esa variable la coloco entre llaves en el return
    
    const listaNumbres = nombres.map((nombre)=>(
        <li> {nombre}</li>
    ))
    
    */



    // getProducts()
    const clickEvento = () => {
        deleteProductById(1)
            .then((data) => setProducts(data))
        
            // modProduct(2, mod)
        // .then((data)=> setProducts(data))


        // addProduct(newProduct)
        // .then((data) => setProducts(data))
    }

    return (
        <div>
            <h2>{saludo}</h2> {/* se muestra en la pagina */}
            {


                //           {/* Primera forma */}
                //         {listaNumbres}


                //         {/* SEGUNDA FORMA DE MOSTRAR ALGO EN PANTALLA */}
                //       {nombres.map((nombre)=>{
                //         return <li>{nombre}</li>
                //   })}
            }
            <button onClick={clickEvento}> borrar producto </button>
            <ItemList products={products} />

        </div>
    )
}

export default ItemListContainer
