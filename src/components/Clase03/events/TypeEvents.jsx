
// 1 evnto onClick en un boton

function ButtonComponenet(){
    const handleCLick = () => {
        console.log('El boton ha sido clickeado');
    }

    return(
        <button onClick={handleCLick}>
            Click
        </button>
    )
}


// 2 evento enChangeen un input

function InputComponent(){
    const handleInputChange = (evento) => {
        console.log(`El valor del input es: ${evento.target.value}`);
    }

    return(
        <input type="text"  onChange={(evento) => handleInputChange(evento)}/>
    )
}

// 3 evento onSubmit en un formulario

function FormComponent(){
    const handlerSubmit = (evento) => {
        evento.preventDefault();
        console.log('El formulario ha sido enviado');
    }

    return(
        <form onSubmit={handlerSubmit}>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default FormComponent