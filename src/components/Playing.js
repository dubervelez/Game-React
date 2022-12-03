import React from 'react'
import Button from './Button'
import "../styles/_Playing.scss"
import Paper from "../images/icon-paper.svg";
import Rock from "../images/icon-rock.svg";


function Playing() {
  return (
    <div className="pantalla-jugando">
        <Button tipo="paper" imagen={Paper}></Button>
        <Button tipo="rock" imagen={Rock} estado="jugando"></Button>
    </div>
  )
}

export default Playing