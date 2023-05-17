import { useState } from "react"

function FuncionalComponenetCounter(){

    const [contador2, serContador2] = useState(
        Number(localStorage.getItem('contador2')) || 0
    );

    function incrementar (){
        localStorage.setItem('contador2', contador2 + 1)
        serContador2( contador2 + 1);
    }
    
    function decrementar (){
        if(contador2 === 0){
            console.log("No podes decrementar a negativo");
        }else{
            localStorage.setItem('contador2', contador2 - 1)
            serContador2( contador2 - 1);
        }
    }

    return (
        <div>
            <p>Contador 2: {contador2}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}

export default FuncionalComponenetCounter;