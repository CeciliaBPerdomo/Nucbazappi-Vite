import React from 'react'
import { StyledButton } from './ButtonStyled'

const Button = ({ radius = '32', disabled = false, children }) => {
    return (
        <StyledButton
            radius={radius}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    )
}

export default Button