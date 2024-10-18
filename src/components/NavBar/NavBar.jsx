import CartWidget from './CartWidget'
import './navbar.css'  // para importar un archivo css


// funcion 1

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='brand'>
                <h2>Ecommerce</h2>
            </div>
                <CartWidget /> {/* solamente para devolver la imagen del carrito */}

        </nav>
    )
}

/*
const saludar = () =>{
    
}
*/

// diferentes tipos de export

// cuando exportamos casi siempre lo hacemos asi y con el nombre de la variable
// export default se utiliza cuando creamos un solo componente, el export nombrado se utiliza cuando tenemos varias funciones
export default NavBar

// export nombrado

// export{NavBar , saludar}  /*sirve ppar exportar objtos */

