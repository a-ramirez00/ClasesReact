

const productos = [
    {
        id: 'Df2121',
        name: 'Remera Roja',
        Descriptions: '',
        stock: 10,
        price: 2000,
        image: '/img/remeraRoja.jpg',
        category: 'remeras'
    },
    {
        id: 'Gt2233',
        name: 'Gorra Nike',
        Descriptions: '',
        stock: 2,
        price: 1000,
        image: '/img/gorra.jpeg',
        category: 'gorras'
    },
    {
        id: 'Mn22121',
        name: 'Zapatilas verdes',
        Descriptions: '',
        stock: 5,
        price: 5000,
        image: '/img/zapatilla.jpeg',
        category: 'zapatillas'
    }
]


const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
    })
    })
}

    /*


    //Creamos la promesa
    // Recibo dos valores, resolve and reject
    const promesa = new Promise((resolve, reject) => {
        if (condicion) {
            resolve('Se resolvio la promesa')
        } else {
            reject('Se rechazo la promesa')
        }
    })


    */

// export nombrado

// export {getProducts}



