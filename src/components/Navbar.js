import React from 'react'
import Logo from '../images/hamburgerlogo.png';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
           <img src={Logo} alt=""/>
        </div>
        <div className='rightside'>
           <Link to="/">Ana səhifə</Link>
           <Link to="/menyu">Menyu</Link>
           <Link to="/haqqimizda">Haqqımızda</Link>
           <Link to="/əlaqə">Əlaqə</Link>
        </div>
      
    </div>
  )
}

export default Navbar
