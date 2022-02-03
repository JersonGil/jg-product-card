import React, { useContext, CSSProperties } from 'react'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard'

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className }: Props) => {
  const { product } = useContext(ProductContext)
  let imgToshow: string

  if (img) {
    imgToshow = img
  } else if (product.img) {
    imgToshow = product.img
  } else {
    imgToshow = noImage
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToshow}
      alt='product'
    />
  )
}
