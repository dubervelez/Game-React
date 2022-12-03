import React from 'react'
import Button from './Button'
import "../styles/_Playing.scss"
import Paper from "../images/icon-paper.svg";
import Rock from "../images/icon-rock.svg";


function Playing() {
  return (
    <div className="pantalla-jugando">
        <div className='contenedor-boton'>
            <div className='juego-op'>
                <Button tipo="paper" imagen={Paper}></Button>
                <span>YOU PICKED</span>
            </div>
            <div className='juego-op'>
                <Button tipo="rock" imagen={Rock} estado="jugando"></Button> 
                <span>THE HOUSE PICKED</span>
            </div>
        </div>
        
        <div className='mensaje-resultado'>
            <h2></h2>
        </div>
    </div>
  )
}

export default Playing