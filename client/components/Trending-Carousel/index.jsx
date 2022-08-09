// @ts-check
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { Car } from '../vehicles/car';
// import '@brainhubeu/react-carousel/lib/style.css'
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const TopCarsContainers = styled.div`
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

const CarContainer = styled.div`

    ${tw`
        w-full flex flex-wrap justify-center mt-7 md:mt-10
    `};
`;

const handleDragStart = (e) => e.preventDefault();


const testCar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc:
        "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
};

const testCar2 = {
    name: "HONDA cITY 5 Seater Car",
    mileage: "20k",
    thumbnailSrc:
        "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
};

const items = [
    (<Car {...testCar} />),
    (<Car {...testCar2} />),
    (<Car {...testCar} />),
    (<Car {...testCar2} />),
    (<Car {...testCar} />),
    (<Car {...testCar} />),
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


export const TrendingCars = () => {

    const [current, setCurrent] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });



    // const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

    return <TopCarsContainers>
        <Title>Explore Our Top Deals</Title>
        <CarContainer>
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
        </CarContainer>
    </TopCarsContainers>
}



