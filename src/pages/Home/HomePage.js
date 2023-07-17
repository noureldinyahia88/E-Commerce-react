import React from 'react'
import Slider from '../../components/Home/Slider'
import HomePageCategory from '../../components/Home/HomePageCategory'
import CardProductContainer from '../../components/ProductPage/CardProductContainer'
import DiscountSection from '../../components/Home/DiscountSection'
import BrandFeatured from '../../components/Brand/BrandFeatured'



const HomePage = () => {
    return (
    <div>
        <Slider />
        <HomePageCategory />
        <CardProductContainer title="Top selling items" btntitle="More" />
        <DiscountSection />
        <CardProductContainer title="Top Picks" btntitle="More" />
        <BrandFeatured title="the most popular" btntitle="More" />
    </div>
)
}

export default HomePage