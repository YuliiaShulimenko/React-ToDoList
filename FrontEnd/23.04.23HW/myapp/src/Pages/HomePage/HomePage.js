import React from 'react'
import PostContainer from '../../components/PostContainer/PostContainer'
import image2 from "./img/Ellipse 1.png"
import WorksContainer from '../../components/WorksContainer/WorksContainer'
import { works } from '../../data'
import { posts } from '../../data'
import s from "./HomePage.module.css"



function HomePage() {
  const works2= works.slice(0,3)
  const posts2= posts.slice(0,2)


  
  
  return (
    <div className='container'>
<div className={s.div_home_banner}>
        <div className={s.div_home_left}>
            <h2>Hi, I am John, Creative Technologist</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button>Download Resume</button>
        </div>

        <div>
        <img src={image2}/>
        </div>
        </div>

        <div className={s.posts}>
        <PostContainer posts={posts2}/>
        </div>


        <div >
            <WorksContainer works={works2}/>

        </div>
        </div>
  )
}

export default HomePage