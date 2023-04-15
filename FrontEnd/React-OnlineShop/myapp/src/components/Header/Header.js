import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={s.header}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
    </div>
  );
}
