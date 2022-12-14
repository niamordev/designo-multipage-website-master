import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [showNavMobile, setShowNavMobile] = useState(false);

  const handleNavMobile = () => {
    setShowNavMobile(!showNavMobile);
  };
  return (
    <header>
      <nav>
      <NavLink className="link" to="/designo-multipage-website-master/">
        <img
          className="brand-logo"
          src="../designo-multipage-website-master/assets/shared/logo-dark.png"
          alt=""
        />
        </NavLink>

        {showNavMobile ? (
          <img
            onClick={() => handleNavMobile()}
            className='btn-nav-mobile'
            src="../designo-multipage-website-master/assets/shared/mobile/icon-close.svg"
            alt=""
          />
        ) : (
          <img
            onClick={() => handleNavMobile()}
            className='btn-nav-mobile'
            id="hamburger"
            src="../designo-multipage-website-master/assets/shared/mobile/icon-hamburger.svg"
            alt=""
          />
        )}

        {showNavMobile ? (
            <div className="container-nav-mobile">
            <ul className="nav-mobile">
            <NavLink className="link" to="/designo-multipage-website-master/our-company">
              <li>OUR COMPANY</li>
            </NavLink>
            <NavLink className="link" to="/designo-multipage-website-master/locations">
              <li>LOCATIONS</li>
            </NavLink>
            <NavLink className="link" to="/designo-multipage-website-master/contact">
              <li>CONTACT</li>
            </NavLink>
          </ul>
          </div>
        ) : null}

        <ul className="links-large-screen">
          <NavLink className="link" to="/designo-multipage-website-master/our-company">
            <li>OUR COMPANY</li>
          </NavLink>
          <NavLink className="link" to="/designo-multipage-website-master/locations">
            <li>LOCATIONS</li>
          </NavLink>
          <NavLink className="link" to="/designo-multipage-website-master/contact">
            <li>CONTACT</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
