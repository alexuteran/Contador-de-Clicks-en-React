
import './App.css';
import Boton from './componentes/boton';
import logoAlex from './img/LOGO ALEX.png';
import Contador from './componentes/Contador';
import {useState} from 'react';


function App() {

const [numClics,setNumClics]=useState(0);


   const manejarClic=()=>{
    setNumClics(numClics+1);
      
    }
    const reiniciarContador=()=>{
      setNumClics(0);
    }


  return (
    <div className="App">
       <div className="logo"> 
          <img  className="logo-alex" 
          src={logoAlex} alt="logo Alexander"/ >
       </div>
     
       <div className="contenedor-principal">
          <Contador
            numClics={numClics}/>
          <Boton
             texto='Clic'
             manejarClic={manejarClic}
             esBotonDeClic={true}/>


           <Boton
             texto='Reiniciar'
             manejarClic={reiniciarContador}
             esBotonDeClic={false}/>

       </div>

    </div>
  );
}

export default App;
