import React from 'react'
import Banner from './Banner'
import { Marginer } from '../marginer'
import { TrendingCars } from '../Trending-Carousel'

const Homepage = () => {
    return (
        <>
            <div className="background-theme-1">
                <Banner />
                <Marginer direction="vertical" margin='8em' />
                <TrendingCars />
            </div>
        </>
    )
}

export default Homepage