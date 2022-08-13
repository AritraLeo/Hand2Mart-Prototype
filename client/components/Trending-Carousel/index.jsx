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
import { css } from 'styled-components';


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

const testBike = {
    name: "BMW S1000RR",
    mileage: "15k",
    thumbnailSrc:
        "https://c4.wallpaperflare.com/wallpaper/109/292/855/bmw-bmw-s1000rr-motorcycle-wallpaper-preview.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Manual",
    gas: "Petrol",
};

const testBike2 = {
    name: "DUCATI V4 Superlegerra",
    mileage: "9k",
    thumbnailSrc:
        "https://w0.peakpx.com/wallpaper/656/291/HD-wallpaper-v4r-superleggera-2020-front-superleggera-superbike-v4-r-ducati.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Manual",
    gas: "Petrol",
};

const itemsCars = [
    (<Car {...testCar} />),
    (<Car {...testCar2} />),
    (<Car {...testCar} />),
    (<Car {...testCar2} />),
    (<Car {...testCar} />),
    (<Car {...testCar} />),
]

const itemBikes = [
    (<Car {...testBike} />),
    (<Car {...testBike2} />),
    (<Car {...testBike} />),
    (<Car {...testBike2} />),
    (<Car {...testBike} />),
    (<Car {...testBike2} />),
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


const CarButtonSlector = styled.button`
:hover{
    background-color: #5eeeee;
    color: black;
}

${tw`p-1 rounded-2xl`}
`;
// /* ${({ carSelector }) => (carSelector ? css`background-color: 'cyan'` : tw`bg-gray-500`)}; */


const SelectorButtonContainer = styled.div`
    ${tw`mt-3 p-1 text-white`}
`;


const SelectorButton = styled.button`
    ${tw` bg-gray-700 hover:bg-gray-500 rounded-2xl`}
`;


const BikeButtonSlector = styled.button`
:hover{
    background-color: #5eeeee;
    color: black;
}

    ${tw`p-1 rounded-2xl`}
`;


export const TrendingCars = () => {

    const [carSelector, setCarSelector] = useState(true);
    const [bikeSelector, setBikeSelector] = useState(false);

    const [current, setCurrent] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    const toggleCar = () => {
        setBikeSelector(open => !open);
        setCarSelector(open => !open)
    }

    const toggleBike = () => {
        setBikeSelector(open => !open);
        setCarSelector(open => !open)
    }

    // const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

    return <TopCarsContainers>
        <Title>Explore Our Top Deals</Title>

        {/* Selectors -Styled */}
        {/* <SelectorButtonContainer>
            <SelectorButton>
                <CarButtonSlector carSelector={carSelector} onClick={toggleCar} >
                    Car
                </CarButtonSlector>
                <BikeButtonSlector bikeSelector={bikeSelector} onClick={toggleBike}>
                    Bike
                </BikeButtonSlector>
            </SelectorButton>
        </SelectorButtonContainer> */}

        {/* Selectors - html */}
        <div className="mt-3 p-1 text-white">
            <button className='bg-gray-500 rounded-2xl'>
                <button className='p-1 rounded-2xl' style={{
                    backgroundColor: `${carSelector ? 'cyan' : 'gray'}`,
                    color: `${carSelector ? 'black' : 'white'}`
                }}
                    onClick={toggleCar}
                >
                    Car
                </button>
                <button className='p-1 rounded-2xl' style={{
                    backgroundColor: `${bikeSelector ? 'cyan' : 'gray'}`,
                    color: `${bikeSelector ? 'black' : 'white'}`
                }}
                    onClick={toggleBike}
                >
                    Bike
                </button>
            </button>
        </div>

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
                items={carSelector ? itemsCars : itemBikes}
            />
        </CarContainer>
    </TopCarsContainers>
}



