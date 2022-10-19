import { useState } from "react";
import {Todo} from "./components/Todo";



function App() {

    const [Todos, setTodo] = useState <string[]>([
        'Adicionar Tarefa ',
      ])

      function createTodo() {
        setTodo([...Todos, "Adicionado Tarefa" ]) //utilizando o setState
      }
    
    return(
        <div className="Corpo">
    <div text = "To do List">
 
    </div>
        <div className="CardToDoList">
           <Todo texto={"Tarefa"} />

           {Todos.map(todo => {
            return <Todo texto ={todo}/>
            })}
    
      
    <button 
    
    onClick = {createTodo}> Adicinar Tarefa</button>
    </div>

    </div>
    );

  
}
export default App
