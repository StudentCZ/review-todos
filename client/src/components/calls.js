import React, { useState } from 'react';

export const AddToForm = async (e) => {
  const [description, setDescription] = useState('');
  e.preventDefault();
  try {
    const body = { description };
    const response = await fetch('http://localhost:5001/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error(error.message);
  }
};
