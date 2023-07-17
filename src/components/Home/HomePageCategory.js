import React from 'react'
import SubTitle from '../Uitily/SubTitle'
import './homePageCategory.css'
import CategoryCard from '../category/CategoryCard'


import Fashion from '../../images/Fashion.png'
import Kids from '../../images/Kids_Fashion.png'
import Trip from '../../images/tirp.png'
import Appliances from '../../images/Appliances.png'

const HomePageCategory = () => {
    return (
    <div className='container'>
        <SubTitle title="Category" btnTitle="More"/>
        <div className='row container d-flex justify-content-between align-items-center my-5 mb-5'>
            <CategoryCard  className="image-category" img={Fashion} title="Fashion" background="#F4DBA4" />
            <CategoryCard  className="image-category" img={Kids} title="Kids" background="#F4DBA4" />
            <CategoryCard  className="image-category" img={Trip} title="Trips" background="#F4DBA4" />
            <CategoryCard  className="image-category" img={Appliances} title="Appliances" background="#F4DBA4"  />
        </div>
    </div>
)
}

export default HomePageCategory