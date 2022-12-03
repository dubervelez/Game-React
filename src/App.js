import "./App.scss";
import "./styles/style.scss"
import Header from "./components/Header";
import Button from "./components/Button";
import Rules from "./components/Rules";
import Paper from "./images/icon-paper.svg";
import Rock from "./images/icon-rock.svg";
import Scissors from "./images/icon-scissors.svg";
import { useState } from "react";

function App() {

  const [mostrarRules, setMostrarRules] = useState("");

  const Mostrar = ()=>{
    setMostrarRules("activo"); 
  };
  const Cerrar = ()=>{
    setMostrarRules(""); 
  };

  return (
    <div className="App">
      <Header score ="12"></Header>
      <main>
        <div className="boton">
          <Button tipo="paper" imagen={Paper}></Button>
        </div>
        <div className="boton">
          <Button tipo="scissors" imagen={Scissors}></Button>
        </div>
        <div className="boton">
        <Button tipo="rock" imagen={Rock}></Button>
        </div>
      </main>
      <Rules mostrar={mostrarRules} clickCerrar={Cerrar} clickAbrir={Mostrar}></Rules>
    </div>
  );
}

export default App;
