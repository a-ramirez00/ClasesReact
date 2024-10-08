import React from 'react'
import { useState, useEffect } from 'react'  // importamos el hooks de la libreria, puede ser de react u otra
import ContadorView from './ContadorView'
import Titulo from './Titulo'
const contador = () => {
    // console.log('Se monto o se actualizo el componente')

    const [contador, setContador] = useState(0) //manera de desestructurar la variable de estado.
    const [toggle, setToggle] = useState(true)
    // let contador = 0
    // para usar el hooks de estado debemos declarar la variable como de estado
    // solamente recibe logica antes del return



    const aumentarContador = () => {
        //   contador = contador + 1
        if (contador < 10) {

            setContador(contador + 1)
        }

    }

    // funcion para modo oscuro
    // tambien para montar o desmontar un componente
    const alternarTogle = () => {
        setToggle(!toggle)
    }


    // 1er.
    // Se ejecuta solo al montar el componente
    // Ej: llamadas a APIs, suscripciones a addEventListening
    useEffect(() => {
        console.log('Primer useEffect')
    }, [])


    // 2do
    // se ejecuta en el montaje y cada vez que contador cambie, si tenemos mas variables va a depender de las otras tambien
    // Ej: Realizar acciones especificas cunado una variable cambie
    useEffect(() => {
        console.log('segundo useEffect')
    }, [contador])


    // 3ro
    // Se ejecuta en el montaje
    // se ejecuta cada vez que cualquier variable de estado de este componente se ejecute
    // Operaciones globales de monitoreo
    // actualizaciones globales del componente

    useEffect(() => {
        console.log('Tercer useEffect')
    })



    useEffect(() => {


        const fetchApi = () => {
            fetch('https://fakestoreapi.com/products/')
                .then((respuesta) => respuesta.json())
                .then((data) => console.log(data))
        }

        // fetchApi()
    }, [])


    // const restarContador = () => {
    //     if (contador > 0) {

    //         setContador(contador - 1)
    //     }


    // }


    // solamente componente que recibe informacion y la muestra
    return (
        <div>
            <ContadorView contador={contador} aumentarContador={aumentarContador} />

            <div>
                <p> Valor toggle: {toggle.toString()} </p>
                <button onClick={alternarTogle}>Alternar valor del toggle</button>
                {/* expresion para mostrar y ocultar el titulo, Para modo oscuro. */}
                {
                    toggle === true && <Titulo/>
                }
            </div>
        </div>
    )

}

export default contador
