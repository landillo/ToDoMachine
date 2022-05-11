import React from "react";
import "./CreateButton.css";

function CreateTodoButton () {

    const onClickButton = () => {
        alert("aqui iria el modal");
    }

    return (
        <button 
            className="CreateTodoButton"
            onClick={ onClickButton }
        >
            +
        </button>
    );
}

export  { CreateTodoButton };