import './Header.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Header() {
  return (
    <div className="headerbar">       
        <div className="nav_bar">
           Fellas Betting Site
        </div>
    </div>
  );
}

export default Header;
