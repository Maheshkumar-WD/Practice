
import { useState } from 'react';
import './App.css';
import FormWrapper from './components/wrappers/FormWrapper';
import TodoWrapper from './components/wrappers/TodoWrapper';

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
       <TodoWrapper todos={todos} />
       
    </div>
  );
}

export default App;
