
import { useState } from 'react';
import './App.css';
import NewTodo from './components/Todos/NewTodo';
import FormWrapper from './components/wrappers/FormWrapper';

function App() {
  let [todos,setTodos] = useState([]);

  let onSubmit=(todo)=>{
    setTodos(todosState=>{
      return [...todosState,todo];
    })
  }

  return (
    <div className="App">
       <FormWrapper onSubmit={onSubmit} />
       
    </div>
  );
}

export default App;
