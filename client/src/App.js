import React, { useState } from 'react';
import { AddToForm } from './components/api';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = async (description) => {
    const newTodo = await AddToForm(description);
    const updateTodos = [...todos, newTodo];
    setTodos(updateTodos);
  };

  return (
    <>
      <div className='container'>
        <InputTodo handleAddTodo={handleAddTodo} />
        <ListTodos />
      </div>
    </>
  );
}

export default App;
