import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';

export default props => {
  return (
        <Menu>
            <Link to="/" className="menu-item">
                Home
            </Link>

            <Link to="/About" className="menu-item">
                About
            </Link>

            <Link to="/Contact" className="menu-item">
                Contact
            </Link>

            <Link to="/Login" className="menu-item">
                Login/Logout
            </Link>
        </Menu>
  );
};