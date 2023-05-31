import { useEffect } from "react";
import { useState } from "react";

export default function UseEffectExample(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        // Lo que quiero que haga cada vez que se modifique el estado
        console.log(`El contador esta en ${count}`);

        return () => {
            // Aca hago algo cuando se desmonta el componente
            alert('Me desmonte');
        }
    }, [count])

    return (
        <button onClick={() => setCount( count + 1)}>ADD</button>
    )
}