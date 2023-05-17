import Header from "./Header";
import Imagen from "./imagen";


export default function Ejercicio1(){

    const titulo = 'Titulo';
    const descripcion = 'Esta es la Descripcion';

    const urlImage = 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

    return(
        <div>
            <Header titulo={titulo} descripcion={descripcion}></Header>
            <Imagen urlImagen={urlImage}></Imagen>
        </div>
    );
}