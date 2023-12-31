import React from 'react'
import SubTitle from '../Uitily/SubTitle'
import './homePageCategory.css'
import CategoryCard from '../category/CategoryCard'





import { Row, Spinner } from 'react-bootstrap'
import HomeCategoryHook from '../../hook/category/HomeCategoryHook'

const HomePageCategory = () => {

    const [category, loading] = HomeCategoryHook()

    return (
    <div className='container category-container'>
        <SubTitle title="Category" btnTitle="More" pathText="/allCategory"/>
        <Row className="row container d-flex justify-content-between align-items-center my-5 mb-5">
            {
                loading === false ?(
                    category.data? (
                        category.data.slice(0,5).map((item, index)=> {
                            return <CategoryCard  className="image-category" key={index} img={item.image} title={item.name} background="#fff" />
                        })
                    ):<h2>No Category</h2>
                    
                ): <div className="is_loading d-flex"><Spinner animation="grow" /> <h2>Loading</h2></div>
            }
            
        </Row>
    </div>
)
}

export default HomePageCategory