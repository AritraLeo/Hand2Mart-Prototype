import styled from "@emotion/styled";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const Container = styled.div`

width: auto;
    height: 100%;
    margin-left: 2em;
img {
    width: auto;
    height: 100%;
    margin-left: 2em;
}
`;

const items = [
    <img src={"/Jeep.png"} onDragStart={handleDragStart} role="presentation" />,
    <img src={"/Jeep.png"} onDragStart={handleDragStart} role="presentation" />,
    <img src={"/Jeep.png"} onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
    return (
        <Container>
            <AliceCarousel mouseTracking items={items} />
        </Container>
    );
};

const Carousel = () => {
    return <Gallery />;
};

export default Carousel;
