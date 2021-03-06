import React from "react";
import { TodoContext } from '../ToDoContext';



function TodoForm () {
    
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } =React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);

};

const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
};
    
    return (
        <form onSubmit={onSubmit}>
            <label>Crea una nueva tarea</label>

            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Ingresa la tarea que deceas agregar"
            />

            <div>
                <button
                type="button"
                onClick={onCancel}>
                    Cancelar
                </button>

                <button
                    type="submit"
                >
                    Añadir
                </button>
            </div>

        </form>
    );
}

export { TodoForm };