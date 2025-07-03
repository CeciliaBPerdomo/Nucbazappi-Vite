import React from 'react'
import { CategoriasContainer, CategoriasWrapper } from './CategoriesStyled'
import { categories } from "../../data/Categories"
import Category from './Category'

const Categories = () => {
  return (
    <CategoriasWrapper>
      <h2>Categorias</h2>
      <CategoriasContainer>
        {
          categories.map((category) => {
            return (
              <Category 
              key={category.id}
              {...category}
              />
            )
          })
        }
      </CategoriasContainer>
    </CategoriasWrapper>
  )
}

export default Categories