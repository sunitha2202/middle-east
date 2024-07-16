import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <div className="navbar-item">
		<FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className="navbar-items">
        <a href="/Home" className="navbar-link active">HOME</a>
        <a href="/Aspiring" className="navbar-link">ASPIRING</a>
        <a href="/Beauty" className="navbar-link">BEAUTY</a>
        <a href="/Business" className="navbar-link">BUSINESS</a>
        <a href="/cryptopreneur" className="navbar-link">CRYPTOPRENEUR</a>
        <a href="/Events" className="navbar-link">EVENTS</a>
        <a href="/Fashion" className="navbar-link">FASHION</a>
        <a href="Fitness" className="navbar-link">FITNESS</a>
        <a href="/Lifestyle" className="navbar-link">LIFESTYLE</a>
        <a href="/Magazines" className="navbar-link">MAGAZINES</a>
      </div>
      {/* <div className="navbar-right">
        <div className="navbar-item">
		<FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="navbar-item">
          <span>United States</span>
        </div>
      </div> */}
    </div>
  );
};

export default NavBar;
