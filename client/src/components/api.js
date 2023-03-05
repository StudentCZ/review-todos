import React from 'react';
import axios from 'axios';

export const AddToForm = async (description) => {
  try {
    const body = { description };
    const response = await axios.post('http://localhost:5001/todos', body);
    window.location = '/';
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

// export const AddToForm = async (description) => {
//   try {
//     const body = { description };
//     const response = await fetch('http://localhost:5001/todos', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// };
