import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
         <p> &copy; 2022 burger33.com</p>
         <FaInstagram/>
         <FaTwitter/>
         <FaFacebookF/>
        </div>
      
    </div>
  )
}

export default Footer
