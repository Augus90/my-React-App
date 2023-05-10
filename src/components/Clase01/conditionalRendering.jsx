
export function ConditionalRenderingTernari(){
    
    const mostrarTexto = false;
    
    const trueText = 'Hola, mundo!';
    const falseText = 'Chau, mundo!';

    return(
        <div>
            <h1>
                {
                    mostrarTexto ? <span>{trueText}</span> : <span>{falseText}</span>
                }
            </h1>
        </div>
    );

}

export function LogicOperationRendering(){
    
    const mostrarTexto = false;
    const trueText = 'Hola, mundo!';
    const falseText = 'Chau, mundo!';

    return(
        <div className="">
            <h1>
                {mostrarTexto && <span>{trueText}</span>}
                {!mostrarTexto && <span>{falseText}</span>}
            </h1>            
        </div>
    );
}

export function IfElseRendering(){
    
    const mostrarTexto = true;
    const trueText = 'Hola, mundo!';
    const falseText = 'Chau, mundo!';

    function renderingIfElse(){
        if(mostrarTexto ){
            return <span>{trueText}</span>
        }else{
            return <span>{falseText}</span>
        }
    }
    
    return (
        <div>
            <h1>
                {
                    renderingIfElse()
                }
            </h1>
        </div>
    );
}