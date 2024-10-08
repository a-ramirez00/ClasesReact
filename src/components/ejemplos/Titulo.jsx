import { useEffect } from "react"



const Titulo = () => {

    useEffect(() => {
        const mostranAnchoventana = () =>{
            console.log('ancho de la ventana:', window.innerWidth)
        }
    window.addEventListener('resize', mostranAnchoventana)

        // cleanup effect
        return () => {
            window.removeEventListener('resize', mostranAnchoventana)
        }
    }, [])

    return (
        <div>
            Titulo
        </div>
    )

}

export default Titulo
