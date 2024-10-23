import React from 'react'
import { PulseLoader} from 'react-spinners'
import './loading.css'


const Loading = () => {
  return (
    <div className='loading'>
      <PulseLoader className= 'spinner' color= 'lime' />
      <h2>Cargando...</h2>
    </div>
  )
}

export default Loading
