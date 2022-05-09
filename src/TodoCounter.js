import React from "react";
import "./TodoCounter.css"

function TodoCounter({ total, completed }) {
    return (

        <h2 className="todoCounter" >
            Has completado {completed} de {total} ToDos
        </h2>
    );
}

export { TodoCounter };