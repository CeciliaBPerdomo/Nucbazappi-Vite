import React from 'react'
import { CardPrice, ProductosCard, ContainerPrice } from './ProductsStyled'
import Button from "../UI/Button/Button"

const ProductCard = ({title, img, desc, price}) => {
  return (
    <ProductosCard>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <ContainerPrice>
            <CardPrice>$ {price}</CardPrice>
            <Button>Agregar</Button>
        </ContainerPrice>
    </ProductosCard>
  )
}

export default ProductCard