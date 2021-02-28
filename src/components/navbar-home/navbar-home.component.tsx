import React, { FC, useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import store from "../../redux/store";
import { logoutUser } from "../../redux/actions/userActions"

import './navbar-home.component.css';

const HomeNavbar: FC = () => {
  const [state, setState]: any = useState(store.getState())

  useEffect(() => {
    setTimeout(() => {
      setState(store.getState());
      console.log(state)
    }, 0)
  }, []);

  let handleLogout = () => {
    store.dispatch(logoutUser());
  }
  
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
        {
          state.user.authenticated ? (
            <>
              <li>
                <a href="#" onClick={handleLogout}>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )
        }
      </ul>
    </nav>
  );
};

export default HomeNavbar;
