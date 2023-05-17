import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


// import { Anidacion } from './components/Clase01/BasicSintaxis'
// import { Expresiones } from './components/Clase01/incorporate'
// import { OperacionesAritmeticas } from './components/Clase01/incorporate'
// import { ConditionalRenderingTernari, LogicOperationRendering, IfElseRendering } from './components/Clase01/conditionalRendering'
// import Ejercicio1 from './components/Clase01/Ejercicios/Ejercicio01'
// -----------
// Clase 02
// -----------
// import Container from './components/Clase02/Composition'
import Contador from './components/Clase02/Ejercicios/Ejercicio01'
import FuncionalComponenetCounter from './components/Clase02/Ejercicios/Ejercicio02'
import Loader from './components/Clase02/Ejercicios/Ejercicio03'


function App() {
  return (
    <>
      {/* Clase 1 */}

      {/* <Expresiones></Expresiones> */}
      {/* <OperacionesAritmeticas></OperacionesAritmeticas> */}
      {/* <ConditionalRenderingTernari></ConditionalRenderingTernari> */}
      {/* <LogicOperationRendering></LogicOperationRendering> */}
      {/* <IfElseRendering></IfElseRendering> */}
      {/* <Ejercicio1></Ejercicio1> */}
      
      {/* Clase 2 */}

      {/* <Container></Container> */}
      {/* <Contador></Contador> */}
      {/* <FuncionalComponenetCounter></FuncionalComponenetCounter> */}
      <Loader/>

      
    </>
  )
}

export default App
