import React from "react";
import "./CreateButton.css";

function CreateTodoButton (props) {

    const onClickButton = () => {
       props.setOpenModal(prevState => !prevState);
    }
// usando el prevState guarda el estado de la funcion actuializadora y nos permitge
// mandar una funcion que en este caso devuelve la negacion del estado actual y nos
// permite abrir o cerrar el modal, dependiendo el estado.

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