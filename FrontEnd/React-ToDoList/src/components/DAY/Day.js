import s from "./Day.module.css"


const Day =({task,removeTask})=>{
  return (
    <div className={s.one_task} style={{ backgroundColor: task.importance === 'Важно' ? '#E74C3C' : '#1ABC9C' }}>
         <p  >{task.description}</p>
         <button className={s.day_btn} onClick={()=>removeTask(task.id)}>X</button>
    </div>
  )
}
export default Day;
