import React, { useEffect, useState } from 'react';
import { getTodos, handleDeleteTodo } from './api';
import main from './main.module.css';
import styles from './ListTodos.module.css';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos(setTodos);
  }, []);

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>Edit</td>
                <td>
                  <button
                    onClick={() => handleDeleteTodo(todo.todo_id, setTodos)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
