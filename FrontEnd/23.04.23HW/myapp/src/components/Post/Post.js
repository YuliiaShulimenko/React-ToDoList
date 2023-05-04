import React from 'react'
import s from "./Post.module.css"
import moment from "moment"

function Post({title,date,tags,text}) {
  const newDate = moment(date).format("DD-MM-YYYY")

  return (
    <div className={s.post_title}>
        <h2>{title}</h2>
        <div className={s.post}>
        <h4 className={s.post_data }>{newDate}</h4>
        <h4 className={s.post_tags }>{tags.join(', ')}</h4>
        </div>
        <p className={s.description}>{text}</p>
       
    </div>
  )
}

export default Post