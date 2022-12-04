import "./App.scss";
import "./styles/style.scss"
import Header from "./components/Header";
import Button from "./components/Button";
import Rules from "./components/Rules";
import Playing from "./components/Playing";
import Paper from "./images/icon-paper.svg";
import Rock from "./images/icon-rock.svg";
import Scissors from "./images/icon-scissors.svg";
import { useState } from "react";



function App() {

  const [mostrarRules, setMostrarRules] = useState("");
  const [jugar, setjugar] = useState(false);

  const Mostrar = ()=>{
    setMostrarRules("activo"); 
  };
  const Cerrar = ()=>{
    setMostrarRules(""); 
  };

  const jugando = ()=>{
    setjugar(false)
  }

  const elegirRol = ()=>{
    setjugar(true)
  }



  return (
    <div className="App">
      <Header score ="12"></Header>
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
            <Playing clickagain={jugando}></Playing>
          )
      }
      
      
      
      <Rules mostrar={mostrarRules} clickCerrar={Cerrar} clickAbrir={Mostrar}></Rules>
    </div>
  );
}

export default App;
