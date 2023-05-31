import React, {Component} from "react";

class Message extends Component{

    componentDidUpdate(prevProps){
        if(prevProps.text !== this.props.text){
            alert('El mensaje ha sido Actualizado', this.props.text);
        }
    }

    render(){
        return <div> {this.props.text} </div>
    }

}

export default class ComponentDidUpdate extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: "Mensaje Inicial"
        }
    }

    handleClick = () => {
        this.setState({
            message: "Mensaje Actualizado"
        })
    }

    render(){
        return (
            <div>
                <Message text={this.handleClick.message}/>
                <button onClick={this.handleClick}>Actualizar Mensaje</button>
            </div>
        )
    }
}