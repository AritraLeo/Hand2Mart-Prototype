import React from 'react'
import Banner from './Banner'
import { Marginer } from '../marginer'
import { TrendingCars } from '../Trending-Carousel/index'
import { AboutUs } from '../about-us'
import Reviews from '../review'
import FAQ from '../faq'

const Homepage = () => {
    return (
        <>
            <div className="background-theme-1">
                <Banner />
                <Marginer direction="vertical" margin='4em' />
                <TrendingCars />
                <Marginer direction="vertical" margin='4em' />
                <Reviews />
                <Marginer direction="vertical" margin='1em' />
                <FAQ />
                <Marginer direction="vertical" margin='4em' />
                <AboutUs />
            </div>
        </>
    )
}

export default Homepage