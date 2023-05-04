
import React from 'react'
import s from './ContactPage.module.css'


export default function ContactPage() {



  return (
    <div className="container">

      <form className={s.form} onClick={(e) => e.stopPropagation()}>
        <div className={s.title}>
          <h2>If you have any further questions, please fill in the feedback form and we will get back to you as soon as possible</h2>

        </div>
        <input type='text' name='name' placeholder='Enter your name' />
        <input type='email' name='email' placeholder='Enter your email' />
        <input type="tel" id="phone" name="phone" placeholder='Enter your telephone' />
        <textarea type='text' name='message' placeholder='Write your message here...' />
        <button className={s.button} type='submit'>Send Message</button>
      </form>
    </div >
  )
}
