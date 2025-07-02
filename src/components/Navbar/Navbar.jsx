import React from 'react'
import { HomeContainerStyled, LinkContainerStyled, LinksContainerStyled, MenuContainerStyled, NavbarContainerStyle, SpanStyled, UserContainerStyled, UserNavStyled } from './NavbarStyle'
import { motion } from 'framer-motion'

// Icons
import { RiHome2Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <NavbarContainerStyle >
            <div>
                <a href="#">
                    <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png"
                        alt="Logo" />
                </a>
            </div>
            <LinksContainerStyled>
                <HomeContainerStyled>
                    <motion.div whileTap={{ scale: 0.97 }}>
                        <a href="/">
                            <LinkContainerStyled home>
                                <RiHome2Fill />
                            </LinkContainerStyled> Home
                        </a>
                    </motion.div>
                </HomeContainerStyled>

                <UserNavStyled>
                    <UserContainerStyled>
                        <SpanStyled>
                            Iniciar sesión
                        </SpanStyled>
                        {/* Icono de usuario */}
                        <FaRegUser />
                    </UserContainerStyled>
                </UserNavStyled>

                <motion.div whileTap={{ scale: 0.97 }}>
                    <MenuContainerStyled>
                        <IoMenuOutline />
                    </MenuContainerStyled>
                </motion.div>
            </LinksContainerStyled>
        </NavbarContainerStyle>
    )
}

export default Navbar