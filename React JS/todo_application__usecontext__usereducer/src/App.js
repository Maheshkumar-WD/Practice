import { useContext } from "react";
import { TodoContext } from "./context/todoContext";

function App() {
  let todoContext = useContext(TodoContext);
  return (
    <div className="App">
      <button onClick={()=>{todoContext.addTodo({id:todoContext.todos.length+1})}}>click</button>
      {todoContext.todos.map((todo,index)=>{
        return <h1 key={index}>{todo.id}</h1>
      })}
    </div>
  );
}

export default App;
