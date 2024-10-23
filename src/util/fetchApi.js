const getProducts = () => {
    return fetch("http://localhost:8080/api/productos")
        .then((respuesta) => respuesta.json())
        .catch((error) => console.error(error))
}

const getProductByid = (idProduct) => {
    return fetch(`http://localhost:8080/api/productos/${idProduct}`)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}


const addProduct = (newProduct) => {
    return fetch("http://localhost:8080/api/productos", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

const modProduct = (idProduct, mod )=> {
    return fetch(`http://localhost:8080/api/productos/${idProduct}`,{
        method :"put",
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(mod)
    })
    .then((response)=>response.json())
    .catch((error)=>console.error(error))
}


const deleteProductById=(idProduct)=>{
    return fetch(`http://localhost:8080/api/productos${idProduct}`,{
        method:"DELETE"
    })
    .then((response)=>response.json())
    .catch((error)=>console.error(error))
}
export { getProducts, getProductByid, addProduct , modProduct , deleteProductById }