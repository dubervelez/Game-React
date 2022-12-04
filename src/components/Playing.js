import React from 'react'
import Button from './Button'
import "../styles/_Playing.scss"


function Playing({ clickagain, jugador1, jugadorColor, jugador2, jugador2Color, resultado }) {
    function debugg() {
        return 
    }
  return (
    <div className="pantalla-jugando">
        <div className='contenedor-boton'>
            <div className='juego-op'>
                <Button tipo={jugadorColor} imagen={jugador1} clickEleccion={debugg}></Button>
                <span>YOU PICKED</span>
            </div>
            <div className='juego-op'>
                <Button tipo={jugador2Color} imagen={jugador2} estado="jugando" clickEleccion={debugg}></Button> 
                <span>THE HOUSE PICKED</span>
            </div>
        </div>
        
        <div className='mensaje-resultado'>
            <h2 className='mensaje-h2'>{resultado}</h2>
            <button className='mensaje-btn'  onClick={clickagain}>PLAY AGAIN</button>
        </div>
    </div>
  )
}

export default Playing