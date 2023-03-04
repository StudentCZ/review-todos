import React from 'react';
import styles from './InputTodo.module.css';

const InputTodo = () => {
  return (
    <>
      <h1 className={styles.heading}>My Todo List</h1>
      <form>
        <input type='text' />
        <button></button>
      </form>
    </>
  );
};

export default InputTodo;
