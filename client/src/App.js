import React, { useState } from 'react';
import { AddToForm } from './components/api';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddTodo = async (description) => {
    try {
      setLoading(true); // set loading state to true before sending POST request
      const response = await AddToForm(
        {
          description: description,
        },
        setTodos // pass setTodos function to update state after successful POST
      );
      const newTodo = response.data;
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setLoading(false); // set loading state to false after receiving response
    } catch (error) {
      console.log(error);
      setLoading(false); // set loading state to false if an error occurs
    }
  };

  return (
    <>
      <div className='container'>
        <InputTodo handleAddTodo={handleAddTodo} />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ListTodos todos={todos} setTodos={setTodos} />
        )}
      </div>
    </>
  );
}

export default App;
