import React from 'react';
import main from './main.module.css';
import styles from './ListTodos.module.css';

const ListTodos = () => {
  return (
    <>
      <table className={styles.table}>
        <tr>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </table>
    </>
  );
};

export default ListTodos;
