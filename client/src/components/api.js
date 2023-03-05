import React from 'react';
import axios from 'axios';

export const AddToForm = async (description, setTodos) => {
  try {
    const body = { description };
    const response = await axios.post('http://localhost:5001/todos', body);
    const newTodo = response.data;
    return newTodo;
  } catch (error) {
    console.log(error);
  }
};

export const getTodos = async (object) => {
  try {
    const response = await axios.get('http://localhost:5001/todos');
    return object(response.data);
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteFromTodo = async (id, setTodos) => {
  try {
    const deleteTodo = await axios.delete(`http://localhost:5001/todos/${id}`);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.todo_id !== id));
  } catch (error) {
    console.error(error.message);
  }
};
