import CartWidget from './CartWidget'
import './navbar.css'  // para importar un archivo css
import { Link } from 'react-router-dom'

// funcion 1

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='brand'>
                <ul>
                    <li>
                        <Link to='/'>inicio</Link> </li>
                    <li>
                        <Link to="/category/remeras">remeras</Link > </li>
                    <li>
                        <Link to='/category/gorras'>gorras</Link> </li>
                    <li>
                        <Link to='/category/zapatillas'>zapatillas</Link></li>
                </ul>
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

