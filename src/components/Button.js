import React from 'react'


function Button({ imagen, tipo }) {
  return (
    <div className={`contenedor ${tipo}`} >
        <div className="contenedor-imagen">
            <img src={imagen} alt="boton-paper" />
        </div>
    </div>
  )
}


export default Button