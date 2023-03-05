import React from 'react';
import axios from 'axios';

export const AddToForm = async (todo, setTodos) => {
  try {
    const { data } = await axios.post('http://localhost:5001/todos', todo);
    setTodos((prevTodos) => [...prevTodos, data]);
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const getTodos = async (object) => {
  try {
    const { data } = await axios.get('http://localhost:5001/todos');
    return object(data);
  } catch (error) {
    console.error(error.message);
  }
};

export const handleDeleteTodo = async (id, setTodos) => {
  try {
    const deleteTodo = await axios.delete(`http://localhost:5001/todos/${id}`);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.todo_id !== id));
  } catch (error) {
    console.error(error.message);
  }
};
