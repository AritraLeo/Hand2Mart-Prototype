import styled from '@emotion/styled';
import React from 'react'
import tw from 'twin.macro';
import ReviewCard from './reviewCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ReviewsContainers = styled.div`
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

const ReviewContainer = styled.div`

    ${tw`
        w-full flex flex-wrap justify-center mt-7 md:mt-10
    `};
`;

const items = [
    (<ReviewCard
    // {...testCar} 
    />),
    (<ReviewCard
    // {...testCar2}
    />),
    (<ReviewCard
    // {...testCar} 
    />),
    (<ReviewCard
    // {...testCar2}
    />),
    (<ReviewCard
    // {...testCar} 
    />),
    (<ReviewCard
    // {...testCar} 
    />),
]

const responsive = {
    0: {
        items: 1,
    },
    600: {
        items: 2
    },
    // 1024: {
    //     items: 4
    // },
    1280: {
        items: 3
    },

}



const Review = () => {
    return (
        <>
            <ReviewsContainers>
                <Title>
                    2k+ happy customers
                </Title>
                <ReviewContainer>
                    <AliceCarousel
                        animationDuration={400}
                        animationType='fadeout'
                        autoPlayInterval={1200}
                        autoPlayStrategy='none'
                        // mouseTracking
                        infinite
                        responsive={responsive}
                        autoPlay
                        items={items}
                    />
                    {/* <ReviewCard /> */}
                </ReviewContainer>
            </ReviewsContainers>
        </>
    )
}

export default Review