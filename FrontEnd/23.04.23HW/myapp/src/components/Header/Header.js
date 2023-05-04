import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css"

function Header() {
  return (
    <div className={s.header_title}>
      <ul className={s.ul_link}>
        <li><NavLink to="/" className={s.header_li}>Home</NavLink></li>
        <li><NavLink to="/works" className={s.header_li}>Works</NavLink></li>
        <li><NavLink to="/blog" className={s.header_li}>Blog</NavLink></li>
        <li><NavLink to="/contact" className={s.header_li}>Contact</NavLink></li>
      </ul>
    </div>
  );
}

export default Header;
