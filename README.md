# Jg-Product-Card

Este es un paquete de prueba de despliegue en NPM

### Jerson Gil

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'jg-product-card
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10
  }}
>
  {() => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
