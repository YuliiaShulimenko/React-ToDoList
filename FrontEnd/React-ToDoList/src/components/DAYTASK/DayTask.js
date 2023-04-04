import React from "react";
import Day from "../DAY/Day";
import s from "./DayTask.module.css"

const DayTask = ({ task, tasksList, removeTask }) => {
  const dayTasks = tasksList.filter((item) => item.day === task.day);
  return (
    <div className={s.dayaList}>
    <div className={s.day}>
      <p>{task.day}</p></div>

      <div className={s.task}>
      {dayTasks.map((task) => (
        <div key={task.id}>
          <Day task={task} removeTask={removeTask} />
        </div>
      ))}
    </div>
    </div>
  );
};
export default DayTask;
