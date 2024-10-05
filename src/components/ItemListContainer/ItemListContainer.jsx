import React from 'react'
// como hacemos para pasar datos?


const ItemListContainer = ({saludo} ) =>  {  /* <= otra forma de destructurar */
    //console.log(props.saludo)   // Todas las props llegan dentro de un objeto

    //const {saludo} = props  // de esta manera destructuramos
    return (
        <div>
            <h2>{saludo}</h2> {/* se muestra en la pagina */}
        </div>
    )
}

export default ItemListContainer
