import React from "react";
import Rating from "../Rating/Rating";
import { NavLink } from "react-router-dom";
import s from "./ProductItem.module.css"

export default function ProductItem({ title, rating, id }) {
  const link = `/products/${id}`;
  return (
    <div className={s.item}>
      <NavLink to={link}>
        <h2>{title}</h2>
      </NavLink>
      <Rating rating={rating.rate} />
    </div>
  );
}
