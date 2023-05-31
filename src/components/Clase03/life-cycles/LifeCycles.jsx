import { Component } from "react";

export default class ComponeneteEjemplo extends Component{
    
    componentDidMount(){
        console.log('Componente montado en el DOM');
    }
    
    componentDidUpdate(){
        console.log('Componenete Actualizaso');
    }

    componentWillUnmount(){
        console.log('Componente desmontado');
    }

    render() {
        return <div>Hola mundo!</div>    
    }
}