import React from "react";


// function FuncionalToClass(prop){
//     return <div>Hola {prop.text}</div>
// }


class FuncionalToClass extends React.Component{

    render(){
        return(
            <div>
                {this.prop.text}
            </div>
        )
    }
}

export default FuncionalToClass;