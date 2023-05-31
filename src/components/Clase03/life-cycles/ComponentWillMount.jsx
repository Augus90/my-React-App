import React, {Component} from "react";

export default class Timer extends Component{

    constructor(props){
        super(props);
        this.state = {
            time: 0
        }
    }

    componentDidMount(){
        this.timer = setInterval(() =>{
            this.setState(prevState => ({
                time: prevState.time + 1
            }))
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        alert("Componente Desmontado");
    }

    render(){
        return <div>Time: {this.state.time} Segundos</div>
    }
}