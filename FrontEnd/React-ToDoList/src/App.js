import React, { useState } from 'react';


import s from "./App.module.css"
import Menu from './components/MENU/Menu';
import TaskList from './components/TASKLIST/TaskList';

const App = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (day, importance, description) => {
    const newTask = { day, importance, description };
    setTasks([...tasks, newTask]);


  };

  return (
    <div className = {s.app}>
      <Menu addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );  
};

 export default App;