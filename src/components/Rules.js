import React from 'react'
import Rulesimg from "../images/image-rules.svg"
import Close from "../images/icon-close.svg"
import "../styles/_rules.scss"

function Rules({ mostrar, clickAbrir ,clickCerrar, cerrar }) {
    
  return (
    <div className="contenedor-btn-rules">
        <div className={`rules ${mostrar}`}>
            <div className='fondo-rules'>
                <img className='rules-img' src={Rulesimg} alt="roles del juego" />
                <img className={`btn-cerrar-rules ${cerrar}`} onClick={clickCerrar} src={Close} alt="cerrar roles" />
            </div>
        </div>
        <button className="btn-rules" onClick={clickAbrir}>RULES</button>
    </div>
  )
}

export default Rules