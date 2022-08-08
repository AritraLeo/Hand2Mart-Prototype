import React from "react";
// import CarLogoImg from '../../../assets/images/car-logo.png';
// import CarLogoImgDark from '../../../assets/images/car-logo-dark.png';
// import H2MLogo from 'Logo.jpg'
import styled from 'styled-components';
import tw from 'twin.macro';

// interface ILogoProps {
//     color?: 'white' | 'dark';
//     bgColor?: 'white' | 'dark';
// }

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
`;

const LogoText = styled.div`
    ${tw`text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `}

    ${({ color }) => (color === 'white' ? tw`text-white` : tw`text-black`)}
` ;

const Image = styled.div`

    width: auto;
    ${tw`h-6 md:h-9 `}

img{
        width:auto;
        height: 100%;

    }
`;


export const Logo = (props) => {

    const { color, bgColor } = props;

    return (
        <>
            <LogoContainer>
                <Image>
                    <img
                        src="/Logo.jpg"
                        // src={bgColor === 'dark' ? CarLogoImgDark : CarLogoImg}
                        alt='Logo' />
                </Image>
                <LogoText color={color || 'dark'}>
                    Hand2Mart
                </LogoText>
            </LogoContainer>
        </>
    )
}



