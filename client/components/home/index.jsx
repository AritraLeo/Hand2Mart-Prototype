import React from 'react'
import Banner from './Banner'
import { Marginer } from '../marginer'
import { TrendingCars } from '../Trending-Carousel/index'
import { AboutUs } from '../about-us'

const Homepage = () => {
    return (
        <>
            <div className="background-theme-1">
                <Banner />
                <Marginer direction="vertical" margin='4em' />
                <TrendingCars />
                <Marginer direction="vertical" margin='4em' />
                <AboutUs />
                <Marginer direction="vertical" margin='4em' />
            </div>
        </>
    )
}

export default Homepage