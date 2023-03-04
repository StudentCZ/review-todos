import React, { useState } from 'react';
import styles from './InputTodo.module.css';
import { AddToForm } from './api';

const InputTodo = () => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AddToForm(description);
    setDescription('');
  };
  return (
    <>
      <h1 className={styles.heading}>My Todo List</h1>
      <form className={styles.form1} onSubmit={handleSubmit}>
        <input
          type='text'
          className={styles.input1}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className={styles.button1}>ADD</button>
      </form>
    </>
  );
};

export default InputTodo;
