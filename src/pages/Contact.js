import React from 'react'
import BannerImage from '../images/2blackbean.jpg'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage:`url(${BannerImage})`}}></div>
        <div className='rightSide'>
            <h1>Bizimlə əlaqə</h1>
            <form id='contact-form'>
            <label htmlFor="name">Ad</label>
            <input name='name' placeholder='Adınızı daxil edin...' type="text" />
            <label htmlFor="email">Email</label>
            <input name='mail' placeholder='Emailinizi daxil edin...' type="email" />
            <label htmlFor="message">Mesaj</label>
            <textarea name='message' placeholder='Mesajınızı daxil edin...'></textarea>
            <button type='submit'>Mesaj Göndər</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
