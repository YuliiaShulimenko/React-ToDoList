import React from 'react'
import s from "./Works.module.css"
import { NavLink } from 'react-router-dom'

function Works({id,main_img,title,year,tags,text}) {
  const link = `/works/${id}`
  return (
    <div className={s.works_main} >
        
        <img src={main_img} alt="#" className={s.image}/>

        <div className={s.works_discription}>
      
        <NavLink to={link} className={s.title}><h2>{title}</h2></NavLink>
        
        <div className={s.h4_works}>
        <h4 className={s.year_works}>{year}</h4>
        <h4>{tags[0]}</h4>
        </div>
        <p>{text}</p>
        
        </div>
      
    </div>
  )
}

export default Works