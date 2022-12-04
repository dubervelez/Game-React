import React from 'react'
import "../styles/_button.scss"

function Button({ imagen, tipo, estado, clickEleccion }) {

  return (
    <div className={`contenedor ${tipo}${estado = ""}`} >
        <div className="contenedor-imagen" onClick={clickEleccion}>
            <img src={imagen} alt="boton-paper" />
        </div>
    </div>
  )
}


export default Button