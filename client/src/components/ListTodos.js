import React, { useEffect, useState } from 'react';
import { deleteFromTodo, getTodos } from './api';
import styles from './ListTodos.module.css';
import Modal from './Modal';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

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
                <td>
                  <button onClick={toggleModal}>Edit</button>
                  <Modal isOpen={isOpen} onClose={toggleModal} />
                  <h2>Hello Modal</h2>
                  <p>Testing</p>
                </td>
                <td>
                  <button
                    onClick={() => deleteFromTodo(todo.todo_id, setTodos)}
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
