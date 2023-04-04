import React from "react";
import DayTask from "../DAYTASK/DayTask";

const TaskList = ({ tasks}) => {
  const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  const importanceLevels = ["Важно", "Не важно"];


 //сортировка по дням недели,начиная с понедельника
  const sortedTasks = tasks.sort((a, b) => {
    const dayA = days.indexOf(a.day);
    const dayB = days.indexOf(b.day);
    if (dayA > dayB) return 1;
    if (dayA < dayB) return -1;


    //сортировка по важности,сначала важные,потом нет
    const importanceA = importanceLevels.indexOf(a.importance);
    const importanceB = importanceLevels.indexOf(b.importance);
    if (importanceA > importanceB) return 1;
    if (importanceA < importanceB) return -1;
  });


  //сортировка если в одном дне недели добавляем несколько задач
  const uniqueDays = [];   
  const filteredTasks = sortedTasks.filter((task) => {
    if (!uniqueDays.includes(task.day)) {
      uniqueDays.push(task.day);
      return task.day;
    }
    
    return false;
  });

  return (
    <div>
      {filteredTasks.map((task) => (
        <DayTask key={task.id} task={task} tasksList={sortedTasks} />
      ))}
    </div>
  );
};
export default TaskList;
