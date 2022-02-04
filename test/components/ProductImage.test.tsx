import React from 'react'
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components'
import { product1 } from '../data/products'

describe('ProductImage', () => {
  test('debe mostrar el componente con su imagen', () => {
    const wrapper = renderer.create(
      <ProductImage img={product1.img} />
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('debe mostrar el componente con su imagen del producto 1', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductImage/>
          )
        }
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
