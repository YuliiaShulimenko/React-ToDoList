import React from 'react'
import s from "./PostContainer.module.css"
import {posts}from "../../data"
import Post from '../Post/Post'
import { NavLink } from 'react-router-dom'

function PostContainer({posts}) {
  return (
    <div  >
        <div className={s.title_post}>
        <h3>Recent posts</h3>
        <NavLink to='/blog' className={s.blog_link}><p className={s.link}>View All</p></NavLink>
        </div>

        <div className={s.container}>
{posts.map(elem=><Post {...elem} key={elem.id}/>)}
        </div>
    </div>
  )
}

export default PostContainer