import React from "react";
import '../EstilosContadorClips.css/contador.css';

function Contador({numClics}){
  return(
      <div className='contador'>
           {numClics}
      </div>
   );
}
   export  default Contador;