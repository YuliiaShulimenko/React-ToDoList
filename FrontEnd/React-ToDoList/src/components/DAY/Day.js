import s from "./Day.module.css"


const Day =({task,removeTask})=>{
  return (
    <div className={s.one_task} style={{ backgroundColor: task.importance === 'Важно' ? '#E74C3C' : '#1ABC9C' }}>
         <p  >{task.description}</p>
    </div>
  )
}
export default Day;
