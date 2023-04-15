import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import s from "./Raiting.module.css"

export default function Rating({ rating }) {
  let stars = [1, 2, 3, 4, 5]

  return (
    <div className={s.div_star}>
      {stars.map(star => star < rating ? <AiFillStar color='orange' key={star}/> : <AiFillStar key={star}/>)}
    </div>
  )
}
