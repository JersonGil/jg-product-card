import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components'
import { product1 } from '../data/products'

describe('PrudctTitle', () => {
  test('debe mostrar el componente con su titulo', () => {
    const wrapper = renderer.create(
      <ProductTitle title='Custom Product'/>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('debe mostrar el componente con su titulo del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductTitle/>
          )
        }
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
