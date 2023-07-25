import React from 'react';
import { useDispatch } from 'react-redux';

function Task({ task }) {
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  }

  function handleDelete() {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  }

  return (
    <li className='line'>
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.description}</span>
      <button onClick={handleToggle}>{task.isDone ? 'Undo' : 'Done'}</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Task;


