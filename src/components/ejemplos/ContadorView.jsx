import React from 'react'
//  es un componente que solo sirve para renderizar 
const ContadorView = ({contador , aumentarContador, restarContador}) => {


    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={aumentarContador} > + </button>
            <button onClick={restarContador} > - </button>
        </div>
    )
}

export default ContadorView
