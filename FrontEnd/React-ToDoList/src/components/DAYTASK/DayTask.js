import React from "react";
import Day from "../DAY/Day";
import s from "./DayTask.module.css"

const DayTask = ({day, task, tasksList, removeTask ,deleteDay}) => {
  const dayTasks = tasksList.filter((item) => item.day === task.day);
  return (
    <div className={s.dayaList}>
    <div className={s.day}>
      <p>{task.day}</p></div>

      <div className={s.task}>
      {dayTasks.map((task) => (
        <div key={task.id}>
          <Day task={task}  />
        </div>
      ))}
    </div>
    <button className={s.dayTask_btn} onClick={() => deleteDay(day)}>x</button>
    </div>
  );
};
export default DayTask;
