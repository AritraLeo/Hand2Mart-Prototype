import React from "react";
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from "react-responsive";
import { SCREENS } from './../responsive/index';
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
background-color: "#22222";
    ${tw`flex list-none`}
`;

const NavItem = styled.li`
background-color: "#22222";
padding-bottom: 1rem;
    ${tw`text-sm md:text-base text-white font-medium mr-1 md:m-5 cursor-pointer transition duration-300 ease-in-out hover:text-gray-700`};

    ${({ menu }) => menu && css`
        ${tw`
        text-white text-xl mb-3 focus:text-white
        `};
    `}
`;

export const NavItems = () => {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    if (isMobile) {
        return <Menu right styles={menuStyles}>
            <ListContainer>
                <NavItem menu>
                    <a href="#">Home</a>
                </NavItem>
                <NavItem menu>
                    <a href="#">Cars</a>
                </NavItem>
                <NavItem menu>
                    <a href="#">Services</a>
                </NavItem>
                <NavItem menu>
                    <a href="#">Services</a>
                </NavItem>
                <NavItem menu>
                    <a href="#">Services</a>
                </NavItem>
                <NavItem menu>
                    <a href="#">Services</a>
                </NavItem>
                <NavItem menu>
                    <a href="#">Contact Us</a>
                </NavItem>
            </ListContainer>
        </Menu>
    }

    return <ListContainer>
        <NavItem>
            <a href="#">Home</a>
        </NavItem>
        <NavItem>
            <a href="#">Cars</a>
        </NavItem>
        <NavItem>
            <a href="#">Services</a>
        </NavItem>
        <NavItem>
            <a href="#">Services</a>
        </NavItem>
        <NavItem>
            <a href="#">Services</a>
        </NavItem>
        <NavItem>
            <a href="#">Services</a>
        </NavItem>
        <NavItem>
            <a href="#">Contact Us</a>
        </NavItem>
    </ListContainer>
}
