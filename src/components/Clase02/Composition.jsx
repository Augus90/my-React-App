import Header from "../Clase01/Ejercicios/Header";
import Imagen from "../Clase01/Ejercicios/imagen";

// function componentWhithNestedTags(){
//     return(
//         <div>
//             <Header/>
//             <Imagen/>
//         </div>
//     )
// }

function Card({header, children}){
    return(
        <div>
            <h1>{header}</h1>
            <div>
                {children}
            </div>
        </div>
    )
}

function Container(){
    <div>
        <Card header={"Hola"}>
            <p>Contenido de la tarjeta</p>
        </Card>
    </div>
}

export default Container;