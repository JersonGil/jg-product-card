import React, { createContext, CSSProperties } from 'react'
import styles from '../styles/styles.module.css'
import { useProducts } from '../hooks/useProduct'
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from '../interfaces/interfaces'

export interface Props {
  product: Product;
  className?: string;
  style?: CSSProperties;
  value?: number;
  initialValues?: InitialValues;
  onChange?: (args: onChangeArgs) => void;
  children: (args: ProductCardHandlers) => JSX.Element;
}

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export const ProductCard = ({
  product,
  className,
  style,
  value,
  initialValues,
  onChange,
  children,
}: Props) => {
  const { counter, increaseBy, maxCounter, isMaxCountReach, reset } =
    useProducts({
      onChange,
      product,
      value,
      initialValues,
    })

  return (
    <Provider value={{ product, counter, increaseBy, maxCounter }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReach,
          product,
          maxCount: initialValues?.maxCount,
          reset,
          increaseBy
        })}
      </div>
    </Provider>
  )
}
