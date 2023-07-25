import React from 'react';
import AddTask from './component/Addtask';
import ListTask from './component/Listtask';
import { useDispatch } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>ToDo App</h1>
      <AddTask />
      <div>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'ALL' })}>All</button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'DONE' })}>Done</button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'NOT_DONE' })}>Not Done</button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'EDIT' })}>Edit</button>
      </div>
      <ListTask />
    </div>
  );
}

export default App;


