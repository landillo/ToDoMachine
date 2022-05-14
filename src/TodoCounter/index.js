import React from "react";
import { TodoContext } from "../ToDoContext";
import "./TodoCounter.css"

function TodoCounter() {
    
    const { totalTodos, completedTodos } = React.useContext(TodoContext); 
    
    return (

        <h2 className="todoCounter" >
            Has completado {completedTodos} de {totalTodos} ToDos
        </h2>
    );
}

export { TodoCounter };