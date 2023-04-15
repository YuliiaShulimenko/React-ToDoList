import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import s from "./ProductList.module.css";

export default function ProductList({ products }) {
  return (
    <div className={s.list}>
      {products.map((elem) => (
        <ProductItem {...elem} key={elem.id} />
      ))}
    </div>
  );
}
