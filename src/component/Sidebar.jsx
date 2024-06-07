import React from 'react';
import '../style/sidebar.css';
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdPlaylistAddCheck ,MdBorderColor} from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <span><IoMdAddCircleOutline /></span>
          <p>add items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <span><MdPlaylistAddCheck /></span>
          <p>list items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <span><MdBorderColor /></span>
          <p>orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar;
