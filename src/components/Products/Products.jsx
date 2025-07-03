import React from 'react'
import { ButtonContainerStyled, ProductosWrapper, ProductsContainer } from './ProductsStyled'
import { products } from "../../data/Products"
import ProductCard from './ProductCard'
import Button from '../UI/Button/Button'

const Products = () => {
    return (
        <ProductosWrapper>
            <h2>Nuestros productos</h2>
            <ProductsContainer>
                {products.map((product) => (
                  <ProductCard 
                    key={product.id}
                    {...product}
                  />
                ))}
            </ProductsContainer>

            <ButtonContainerStyled>
                <Button>Ver menos</Button>
                <Button disabled>Ver más</Button>
            </ButtonContainerStyled>
        </ProductosWrapper>
    )
}

export default Products