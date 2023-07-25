import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (description.trim() === '') return;
    dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), description, isDone: false } });
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTask;
