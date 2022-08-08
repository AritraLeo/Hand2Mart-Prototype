import styled from '@emotion/styled'
import React from 'react'
import tw from 'twin.macro';


const HeaderContainer = styled.div`
background: rgb(70,135,184);
background: linear-gradient(90deg, rgba(70,135,184,1) 0%, rgba(17,39,45,1) 31%, rgba(8,44,67,1) 51%, rgba(1,16,17,1) 68%, rgba(64,155,189,1) 100%);
    ${tw`text-right text-blue-50 pb-3 w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        lg: pl-12
        lg: pr-12
        justify-between`}
`;

const HeaderElements = styled.ul`
    ${tw`flex list-none mr-4`}

`;

const HeaderElement = styled.li`
    ${tw`text-sm md:text-base text-blue-50 font-medium mr-1 md:m-5 cursor-pointer transition duration-300 ease-in-out hover:text-red-800`};

`;

const Header = () => {
    return (
        <HeaderContainer>
            Header
            <HeaderElements>
                <HeaderElement>
                    Login/Register
                </HeaderElement>
            </HeaderElements>
        </HeaderContainer>
    )
}

export default Header