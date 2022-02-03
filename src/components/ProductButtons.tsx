import React, { useContext, CSSProperties, useCallback } from 'react'
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard'

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className }: Props) => {
  const { increaseBy, counter, maxCounter } = useContext(ProductContext)

  const isMaxReached = useCallback(() => {
    if (maxCounter) return counter >= maxCounter
    return
  }, [counter, maxCounter])

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        {' '}
        -{' '}
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        disabled={!!isMaxReached()}
        onClick={() => increaseBy(1)}
      >
        {' '}
        +{' '}
      </button>
    </div>
  )
}
