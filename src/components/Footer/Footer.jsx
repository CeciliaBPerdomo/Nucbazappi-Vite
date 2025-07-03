import React from 'react'
import { FooterContainerStyled, LinksContainerStyled } from './FooterStyled'

const Footer = () => {
    return (
        <FooterContainerStyled>
            <LinksContainerStyled>
                <a href='/' style={{ paddingLeft: '2rem' }}>Términos de Uso</a>
                <a href='/' style={{ paddingLeft: '2rem' }}>Trabajá con Nosotros</a>
                <a href='/' style={{ paddingLeft: '2rem' }}>Soporte</a>
            </LinksContainerStyled>

            <p>
                Hecho con ❤️ en <span> NUCBAZAPPI</span>
            </p>

        </FooterContainerStyled>
    )
}

export default Footer