import React from "react";
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from "../logo";
import Header from "./Header";
// import Logo from 'Logo'
import { NavItems } from "./navItems";


const NavbarContainer = styled.div`
min-height: 68px;
/* background-color: "#22222"; */
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        lg: pl-12
        lg: pr-12
        justify-between
        bg-blueGray
    `}
`;

const LogoContainer = styled.div``;

export const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <LogoContainer>
                    {/* Logo */}
                    {/* {Logo} */}
                    <Logo color='white' />
                </LogoContainer>
                <NavItems />
            </NavbarContainer>
            <Header />
        </>
    )
}
