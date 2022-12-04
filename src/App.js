// Importaciones de hojas de estilos
import "./styles/App.scss";
import "./styles/_header.scss";
// Importaciones de componentes
import Header from "./components/Header";
import Button from "./components/Button";
import Rules from "./components/Rules";
import Playing from "./components/Playing";
//importaciones de imagenes
import Paper from "./images/icon-paper.svg";
import Rock from "./images/icon-rock.svg";
import Scissors from "./images/icon-scissors.svg";

import { useState } from "react";



function App() {

  
  // Creacion de UseState
  const [mostrarRules, setMostrarRules] = useState("");
  const [jugar, setJugar] = useState(false);
  const [eleccionJugador, setEleccionJugador] = useState(Paper);
  const [eleccionColor, setEleccionColor] = useState("paper");
  const [eleccionMaquina, setEleccionMaquina] = useState(Scissors);
  const [colorMaquina, setColorMaquina] = useState("scissors");
  const [score, setScore] = useState(0);
  const [resultado, setResultado] = useState("...");
  
  // Elección aleatoria del jugador 
  const roles = [Paper,Rock, Scissors];
  function getRandonInt(min, max) {
    return  Math.floor(Math.random() *(max - min)) + min;
  }

  // Funcion que evalua los posibles enfrentamientos del juego y devuelve un resultado 
  function ResultadoJuego(jugador, maquina) {
    if (jugador === maquina) {
      setResultado("YOU TIE")
    }
    if (jugador === Paper) {
      if (maquina === Rock) {
        setResultado("YOU WIN")
        setScore(score + 1)
      }else if (maquina === Scissors) {
        setResultado("YOU LOSE")
        setScore(score - 1)
      }
    }
    if (jugador === Rock){
      if (maquina === Paper) {
        setResultado("YOU LOSE")
        setScore(score - 1)
      }else if (maquina === Scissors) {
        setResultado("YOU WIN")
        setScore(score + 1)
      }
    }
    if (jugador === Scissors){
      if (maquina === Paper) {
        setResultado("YOU WIN")
        setScore(score + 1)
      }else if (maquina === Rock) {
        setResultado("YOU LOSE")
        setScore(score - 1)
      }
    }
  }


// funcionalidad principal
  const elegirRol = (imagen, tipo)=>{
    setJugar(true);
    setEleccionJugador(imagen);
    setEleccionColor(tipo)
    setResultado("...")
    const animacion = setInterval(()=>{
      let eleccion = roles[getRandonInt(0,3)]
      setEleccionMaquina(eleccion);
      if (eleccion === Paper) {
        setColorMaquina("paper");
      }else if (eleccion === Rock ){
        setColorMaquina("rock");
      }else if (eleccion === Scissors ){
        setColorMaquina("scissors");
      };
    },80);
    setTimeout(()=>{ 
      clearInterval(animacion);
    let eleccion = roles[getRandonInt(0,3)]
    setEleccionMaquina(eleccion);
    
    if (eleccion === Paper) {
      setColorMaquina("paper");
    }else if (eleccion === Rock ){
      setColorMaquina("rock");
    }else if (eleccion === Scissors ){
      setColorMaquina("scissors");
    };
    ResultadoJuego(imagen, eleccion);
    }, 2000)
    
  };

// funcion para devolvernos a elegir rol
  const jugando = ()=>{
    setJugar(false);
  };
  

// evento para mostrar la pestaña de rules
const Mostrar = ()=>{
  setMostrarRules("activo"); 
};
const Cerrar = ()=>{
  setMostrarRules(""); 
};


  return (
    <div className="App">
      <Header score ={score}></Header>
      { 
        !jugar ? (
          <main className="">
            <div className="boton">
              <Button tipo="paper" imagen={Paper} clickEleccion={elegirRol}></Button>
            </div>
            <div className="boton">
              <Button tipo="scissors" imagen={Scissors} clickEleccion={elegirRol} ></Button>
            </div>
            <div className="boton">
            <Button tipo="rock" imagen={Rock} clickEleccion={elegirRol} ></Button>
            </div>
          </main>
          ): (
            <Playing clickagain={jugando} jugadorColor={eleccionColor} jugador1={eleccionJugador} jugador2={eleccionMaquina} jugador2Color={colorMaquina} resultado={resultado}></Playing>
          )
      }
      <Rules mostrar={mostrarRules} clickCerrar={Cerrar} clickAbrir={Mostrar}></Rules>

      
      <footer className="attribution">
  	    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
  	    Coded by <a href="https://github.com/dubervelez">Duberney Velez</a>.
	    </footer>
      
    </div>
  );
}

export default App;
