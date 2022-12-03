import React  from 'react'


function Header({ score }) {
  return (
    <header className='contenedor-header'>
      <div className='header-titulo'>
        <h1 className='header-titulo__h1' >ROCK <br /> PAPER <br/> SCISSORS</h1>
      </div>
      <div className='header-score'>
        <span className='score-span'>Score</span>
        <p className='score-marcador'>{score}</p>
      </div>
    </header>
  )
}

export default Header