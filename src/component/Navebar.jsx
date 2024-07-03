import React from 'react';
import '../style/navebar.css';
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';

const Navebar = () => {
  return (
    <div className='navebar'>
    <NavLink to='/'>  <img className='logo' src="images/t-zon.jpg"/></NavLink>
      <div className='profile'> {<CgProfile />}</div>

    </div>
  )
}

export default Navebar;
