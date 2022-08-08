import React from "react";
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from "../logo";
import Header from "./Header";
// import Logo from 'Logo'
import { NavItems } from "./navItems";


const NavbarContainer = styled.div`
    min-height: 68px;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        lg: pl-12
        lg: pr-12
        justify-between
    `}
`;

const LogoContainer = styled.div``;

export const Navbar = () => {
    return (
        <>
            <Header />
            <NavbarContainer>
                <LogoContainer>
                    {/* Logo */}
                    {/* {Logo} */}
                    <Logo />
                </LogoContainer>
                <NavItems />
            </NavbarContainer>
        </>
    )
}
