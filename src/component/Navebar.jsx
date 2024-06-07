import React from 'react';
import '../style/navebar.css';
import { CgProfile } from "react-icons/cg";

const Navebar = () => {
  return (
    <div className='navebar'>
      <img className='logo' src="/amazon-logo-white.png" alt="" />
      <div className='profile'> {<CgProfile />}</div>

    </div>
  )
}

export default Navebar;
