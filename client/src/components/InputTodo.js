import React, { useState } from 'react';
import styles from './InputTodo.module.css';

const InputTodo = () => {
  const [description, setDescription] = useState('');

  return (
    <>
      <h1 className={styles.heading}>My Todo List</h1>
      <form className={styles.form1}>
        <input type='text' className={styles.input1} />
        <button className={styles.button1}>ADD</button>
      </form>
    </>
  );
};

export default InputTodo;
