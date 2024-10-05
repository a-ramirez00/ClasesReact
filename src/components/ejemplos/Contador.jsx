import React from 'react'
import { useState } from 'react'
import ContadorView from './ContadorView'
const contador = () => {

    const [contador, setContador] = useState(0) //manera de desestructurar la variable de estado.

    // let contador = 0
    // para usar el hooks de estado debemos declarar la variable como de estado
    // solamente recibe logica, antes del return
    const aumentarContador = () => {
        //   contador = contador + 1
        if (contador < 10) {

            setContador(contador + 1)
        }

    }
    const restarContador = () => {
        if (contador > 0) {

            setContador(contador - 1)
        }


    }
    // solamente componente que recibe informacion y la muestra
    return(
        <ContadorView contador = {contador} aumentarContador = {aumentarContador} restarContador={restarContador}/>
    )

}

export default contador
