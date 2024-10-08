import React from 'react'

const ComponentePadre = ({children}) => {
  return (
    <div>

      <div>
        Navbar
      </div>
      {children}
      <div>
        footer
      </div>
      
    </div>
  )
}

export default ComponentePadre
