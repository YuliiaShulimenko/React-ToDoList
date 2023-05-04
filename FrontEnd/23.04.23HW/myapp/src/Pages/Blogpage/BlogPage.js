import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import PostContainer from '../../components/PostContainer/PostContainer'
import {posts}from "../../data"
import s from "./BlogPage.module.css"
import Post from '../../components/Post/Post'


export default function BlogPage() {
  return (
    <div className="container">
    <div className={s.wrapper}>
      <h1 className={s.title}>Blog</h1>
      <div className={s.blog_container}>
        {posts.map((elem, index) => 
        <div key={index}>
          <Post key={index} {...elem} />
          <hr/>
        </div>)}
      </div>
    </div>
    </div>
  )
}