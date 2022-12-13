import React from "react";
import { NavLink } from "react-router-dom";


export default function Footer() {
  return (
    <footer>
      <div className="content-footer">
        <div className="aside-content">
          <h2>Let’s talk about your project</h2>
          <p>
            {" "}
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
          <button  className="btn-style1">Get in touch</button>
        </div>
        <div className="brand-and-links">
          <div className="brand">
            <img
              src="../assets/shared/logo-light.png"
              alt=""
              className="logo"
            />
          </div>
          <ul className="links">
            <NavLink className='link' to='/our-company'><li>our company</li></NavLink> 
            <NavLink className='link' to='/locations'><li>locations</li></NavLink> 
            <NavLink className='link' to='/contact'><li>contact</li></NavLink> 
          </ul>
        </div>

        <div className="infos-and-socials-links">
          <div className="info1">
            <p>Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>

          <div className="info2">
            <p> Contact Us (Central Office)</p>
            <p> P : +1 253-863-8967</p>
            <p> M : contact@designo.co</p>
          </div>

          <div className="social-links">
            <a href="#">
              <img src="../assets/shared/desktop/icon-facebook.svg" alt="" />
            </a>
            <a href="#">
              <img src="../assets/shared/desktop/icon-instagram.svg" alt="" />
            </a>
            <a href="#">
              <img src="../assets/shared/desktop/icon-twitter.svg" alt="" />
            </a>
            <a href="#">
              <img src="../assets/shared/desktop/icon-pinterest.svg" alt="" />
            </a>
            <a href="#">
              <img src="../assets/shared/desktop/icon-youtube.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
