import React, {Component} from "react";
import { render } from "react-dom";

class Contador extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: Number(localStorage.getItem('contador')) || 0
        }
    }

    incrementarContador(){
        localStorage.setItem('contador', this.state.contador+1);
        this.setState({contador: this.state.contador + 1});
    }

    decrementarContador(){
        if(this.state.contador === 0){
            console.log("No poder Decrementar en negativo");
        }else{
            localStorage.setItem('contador', this.state.contador - 1);
            this.setState({contador: this.state.contador - 1});
        }
    }

    render(){
        return(
            <div>
                <p>Contador: {this.state.contador}</p>
                <button onClick={()=> this.incrementarContador()}>Incrementar</button>
                <button onClick={() => this.decrementarContador()}>Decrementar</button>
            </div>
        )
    }
}

export default Contador;