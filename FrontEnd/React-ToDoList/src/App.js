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

  //Удаление задачи(не работает)

  const removeTask = (id) => {
   const tasks = tasks.filter(elem => elem.id !== id)
        setTasks(tasks)
        
  };
  

  return (
    <div className = {s.app}>
      <Menu addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask}/>
    </div>
  );  
};

 export default App;