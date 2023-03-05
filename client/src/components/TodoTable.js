import React from 'react';
import styles from './TodoTable.module.css';

export const TodoTable = ({ todos, handleDeleteTodo }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(({ description, todo_id }) => (
        <tr key={todo_id}>
          <td>{description}</td>
          <td>Edit</td>
          <td>
            <button onClick={() => handleDeleteTodo(todo_id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
