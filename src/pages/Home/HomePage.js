import React from 'react'
import Slider from '../../components/Home/Slider'
import HomePageCategory from '../../components/Home/HomePageCategory'
import CardProductContainer from '../../components/ProductPage/CardProductContainer'
import DiscountSection from '../../components/Home/DiscountSection'
import BrandFeatured from '../../components/Brand/BrandFeatured'
import './homePage.css'
import ViewAllProductHome from '../../hook/product/ViewAllProductHome'


const HomePage = () => {
    const [items] = ViewAllProductHome()
    return (
    <div>
        <Slider />
        <HomePageCategory />
        <CardProductContainer products={items} title="Top selling items" btntitle="More"  pathText='/products' />
        <DiscountSection />
        <CardProductContainer products={items} title="Top Picks" btntitle="More" pathText='/products'  />
        <BrandFeatured title="the most popular" btntitle="More" />
    </div>
)
}

export default HomePage