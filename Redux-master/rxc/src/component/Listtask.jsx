import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function ListTask() {
  const tasks = useSelector((state) =>
    state.filter === 'DONE'
      ? state.tasks.filter((task) => task.isDone)
      : state.filter === 'NOT_DONE'
      ? state.tasks.filter((task) => !task.isDone)
      : state.tasks
  );

  return (
    <ul className='line'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default ListTask;




