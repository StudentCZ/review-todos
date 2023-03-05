import React, { useState } from 'react';
import { AddToForm } from './components/api';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddTodo = async (description) => {
    setLoading(true);

    try {
      const response = await AddToForm({ description }, setTodos);
      setTodos((prevTodos) => [...prevTodos, response.data]);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  return (
    <div className='container'>
      <InputTodo handleAddTodo={handleAddTodo} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ListTodos todos={todos} setTodos={setTodos} />
      )}
    </div>
  );
};

export default App;
