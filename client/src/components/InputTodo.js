import React, { useState } from 'react';
import styles from './InputTodo.module.css';

const InputTodo = ({ handleAddTodo }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAddTodo(description);
    setDescription('');
  };
  return (
    <>
      <h1 className={styles.heading}>My Todo List</h1>
      <form className={styles.form1} onSubmit={handleSubmit}>
        <label htmlFor='description' className={styles.label}>
          Description
        </label>
        <input
          type='text'
          className={styles.input1}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter a new todo'
        />
        <button className={styles.button1}>ADD</button>
      </form>
    </>
  );
};

export default InputTodo;
