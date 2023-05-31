function ChildComponent({onChildClick}){
    return(
        <button onClick={onChildClick}>
            Click
        </button>
    )
}

export default function ParentComponenete(){
    const handleChildClick = () => {
        alert("El componente hijo ha sido clickeado");
    }

    return(
        <ChildComponent onChildClick={handleChildClick}/>
    )
}
