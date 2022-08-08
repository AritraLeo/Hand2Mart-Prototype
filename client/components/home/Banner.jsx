import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { SCREENS } from '../responsive';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import dynamic from 'next/dynamic'

// const DynamicComponentWithNoSSR = dynamic(
//     () => import('../components/hello3'),
//     { ssr: false }
// )



// import Carousel from './Carousel';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";



// import Lambo from '../../assets/images/Lambo.jpg';
// import Jeep from ''
import { useMediaQuery } from 'react-responsive';

// const Lambo = "https://wallpapercave.com/wp/wp2044514.jpg";

const AboutUsContainer = styled.div`
    ${tw`
        w-full flex flex-wrap items-center 2xl:justify-center pt-4 pb-4 pr-7 pl-7 md:pl-0 md:pb-0 
    `};
`;

// const Try = styled.div`
//         width: auto;
//         height: 100%;
//         margin-left: 2em;
// `;


// const winowWidth = window.innerWidth;



const CarContainer = styled.div`

    height: 15em;
    width: auto;
    margin-left: -30px;

    img{
        width: auto;
        height: 100%;
        margin-left: 2em;
    }

    /* Image{
        width: auto;
        height: 100%;
        margin-left: 2em;
    } */

    @media (min-width: ${SCREENS.md}) {
        height: 28em;
    }

    @media (min-width: ${SCREENS.lg}) {
        height: 30em;
    }

    @media (min-width: ${SCREENS['2xl']}) {
        height: 35em;
        margin-left: 0;
    }
`;


const InfoContainer = styled.div`
    ${tw`
        md:w-1/2 flex flex-col md:ml-6 2xl:ml-16
    `};
`;


const Title = styled.h1`
    ${tw`
        text-black text-2xl md:text-5xl font-extrabold md:font-black md:leading-normal
    `};
`;

const InfoText = styled.p`
    ${tw`
        text-gray-500 text-sm md:text-base md:max-w-2xl mt-4 font-normal
    `};
`;

const handleDragStart = (e) => e.preventDefault();


const items = [
    (<CarContainer>
        <img src={"/Jeep.png"} onDragStart={handleDragStart} role="presentation" />
    </CarContainer>),
    (<CarContainer>
        <img src={"/Jeep.png"} onDragStart={handleDragStart} role="presentation" />
    </CarContainer>),
    (<CarContainer>
        < img src={"/Jeep.png"} onDragStart={handleDragStart} role="presentation" />,
    </CarContainer>)
];


export const Banner = () => {

    const [windowWidth, setWinowWidth] = useState(0);
    useEffect(() => {
        setWinowWidth(window.innerWidth);
    }, [])


    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
    const isMedium = useMediaQuery({ maxWidth: SCREENS.md });

    if (isMobile || isMedium) {
        return (
            <div className="background-theme-1">
                <AboutUsContainer>
                    {/* Alice Carousel  */}
                    <AliceCarousel autoPlay='true'
                        // autoHeight='false'
                        // autoWidth='false'
                        animationDuration={400}
                        animationType='fadeout'
                        autoPlayInterval={400}
                        autoPlayStrategy='none'
                        mouseTracking items={items} />
                    <InfoContainer>
                        <Title>
                            Feel the best with Our rental services!
                        </Title>
                        <InfoText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur veniam voluptatem, culpa excepturi vero delectus necessitatibus. Maiores necessitatibus modi ab nesciunt, illum iste nihil facilis vel nobis expedita cumque deleniti. Placeat, aperiam atque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quibusdam ad cupiditate iusto voluptas explicabo quod officia voluptates consectetur ratione! Eveniet, eos perferendis! Consequuntur voluptatem aut architecto esse ea porro?
                        </InfoText>
                    </InfoContainer>
                </AboutUsContainer>
            </div>
        )
    } else {
        return (
            <div className="background-theme-1">

                <AboutUsContainer>
                    <CarContainer>
                        <Carousel showThumbs={false} width={(windowWidth) / 2.1} autoPlay interval="500" transitionTime="500">
                            <CarContainer>
                                <img src={"/Jeep.png"} onDragStart={handleDragStart} role="presentation" />
                            </CarContainer>
                            <CarContainer>
                                <img src={"/Jeep.png"} onDragStart={handleDragStart} role="presentation" />
                            </CarContainer>
                            <CarContainer>
                                <img src={"/Jeep.png"} onDragStart={handleDragStart} role="presentation" />
                            </CarContainer>
                        </Carousel>
                    </CarContainer>
                    {/* <Try> */}
                    {/* </Try> */}

                    {/* Alice Carousel  */}
                    {/* <AliceCarousel autoPlay='true'
                // autoHeight='false'
                // autoWidth='false'
                animationDuration={400}
                animationType='fadeout'
                autoPlayInterval={400}
                autoPlayStrategy='none'
            mouseTracking items={items} /> */}

                    {/* Component way */}
                    {/* <Carousel /> */}

                    {/* Normal Image */}
                    {/* <img src={'/Jeep.png'} alt="Jeep" /> */}
                    <InfoContainer>
                        <Title>
                            Feel the best with Our rental services!
                        </Title>
                        <InfoText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur veniam voluptatem, culpa excepturi vero delectus necessitatibus. Maiores necessitatibus modi ab nesciunt, illum iste nihil facilis vel nobis expedita cumque deleniti. Placeat, aperiam atque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quibusdam ad cupiditate iusto voluptas explicabo quod officia voluptates consectetur ratione! Eveniet, eos perferendis! Consequuntur voluptatem aut architecto esse ea porro?
                        </InfoText>
                    </InfoContainer>
                </AboutUsContainer >
            </div>
        )

    }
}

export default Banner