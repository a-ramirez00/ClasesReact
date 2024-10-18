import './App.css'
// para archivos que estan en el mismo nivel solo ( ./) si estan en diferente nivel (../)

import NavBar from './components/NavBar/NavBar' // importar un componente
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import Contador from './components/ejemplos/contador'

// import ComponentePadre from './components/ejemplos/ComponentePadre'
// import ComponenteHijo from './components/ejemplos/ComponenteHijo'

// import banner from './assets/banner.png' //importar una imagen 


// import { NavBar } from './components/NavBar' es el import nombrado


function App() {

  return (
    <div>

      <NavBar />   {/*  se debe auto cerrar la etiqueta */}
      {/* como pasamos valore? ese valor llega a donde nosotros declaramos el componente */}
      <ItemListContainer saludo={'Hola MUndo'} /> 
      {/* <ItemListContainer saludo={'A calentar el agua del mate'} />  */}
      {/* <ItemListContainer saludo={'ya es hora del break'} /> */}

      {/* <Contador /> */}

      {/* tecnica de CHILDREN */}
      {/*  
      <ComponentePadre >
      aca van las etiquetas
      
        <h2>Saludo desde app</h2>
        <p>Parrafo de ejemplo</p>
        <ComponenteHijo/>
      </ComponentePadre>

*/}

    </div>
  )
}

export default App
