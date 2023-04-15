import React from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../../components/Rating/Rating'
import s from "./CardPage.module.css"

function CardPage({products}) {
  const { id } = useParams();
const product = products.find(item => String(item.id) === id);

  return (
    <div className={s.div_card}>
      <h2>{product && product.title}</h2>
      <img className ={s.img} src={product?.image} alt="#" />
      <h2>Price: {product.price} $</h2>
      <h2>Description: {product.description}</h2>
      <Rating rating={product.rating.rate} />
    </div>
  )
}

export default CardPage