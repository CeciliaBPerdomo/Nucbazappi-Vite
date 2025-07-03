import React from 'react'
import { BorderDecoration, CardCategoria } from './CategoriesStyled'

const Category = ({img, title, category}) => {
    return (
        <CardCategoria
            whileTap={{ scale: 1.1 }}
        >
            <img
                src={img}
                alt={category}
            />

            <h2>{title}</h2>
            <BorderDecoration />
        </CardCategoria>
    )
}

export default Category