import React from 'react'
import FAQList from './Faq'
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Marginer } from '../marginer';


const FaqsContainers = styled.div`
margin: 0px auto;
    ${tw`
        max-w-screen-lg w-full flex flex-col items-center justify-center pr-4 pl-4 md:pl-0 md:pr-0 mb-10 
    `};
`;


const Title = styled.h2`
    ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
    `};
`;



const FAQ = () => {
    return (
        <FaqsContainers>
            <Title>
                FAQ's
            </Title>
            <Marginer direction="vertical" margin='3em' />
            <FAQList />
        </FaqsContainers>
    )
}

export default FAQ