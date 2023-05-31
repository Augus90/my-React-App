import {useState} from "react";

export default function TodoList(){

    // Estado que guarda los todos
    const [todos, setTodos] = useState([]);
    // 
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        // validacion si existe un inputValue
        if(inputValue){
            // desconstruyo el arreglo del estado todos y concateno el nuevo estado inputValue
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }

    const deleteTodo = (indexTodo) => {
        const updateTodos = todos.filter((todo, index) => index !== indexTodo);

        setTodos(updateTodos);
    }

    return(
        <div>
            <input type="text" value={inputValue} onChange={evento => setInputValue(evento.target.value)} />
            <button onClick={addTodo}>Agregar</button>
            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => deleteTodo(index)}>Borrar</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}