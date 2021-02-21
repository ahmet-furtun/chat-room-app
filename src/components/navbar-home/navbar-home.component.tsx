import React, { FC } from "react";
import {Link} from 'react-router-dom';

import './navbar-home.component.css';

const HomeNavbar: FC = () => {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="menu">M</i>
      </label>
      <label className="logo">Chat-Room</label>
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomeNavbar;
