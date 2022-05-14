import React from "react";

import { TodoContext } from "../ToDoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

function AppUI() {
  const { error,
          loading,
          searchedTodos,
          completeTodos,
          deleteTodos,
          openModal,
          setOpenModal,
         } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>ocurrio un error</p>}
        {loading && <p>estamos cargando, por favor espera</p>}
        {!loading && !searchedTodos.length && <p>!Crea tu primer ToDo!</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
        <p> aqui es el modal</p>
      </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}
export { AppUI };
