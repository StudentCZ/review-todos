import React, { useEffect, useState } from 'react';
import main from './main.module.css';
import styles from './ListTodos.module.css';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5001/todos');
      const data = await response.json();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <table className={styles.table}>
        <tr>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {/* <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr> */}
      </table>
    </>
  );
};

export default ListTodos;
