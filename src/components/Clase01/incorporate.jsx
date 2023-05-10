
export function Expresiones(){

    const miVariable = 'Hola, mundo!';

    return(
        <div>
            <h1>
                {miVariable}
            </h1>
        </div>
    );
}

export function OperacionesAritmeticas(){
    
    function suma(a, b){
        return a + b;
    }

    return (
        <div className="">
            {
                suma(10, 5)
            }
        </div>
    );
}