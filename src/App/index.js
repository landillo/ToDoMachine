import React from "react";
import { TodoProvider } from "../ToDoContext"; 
import { AppUI } from "./AppUI";



function App() {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
