import React from 'react'
import CategoryContainer from '../category/CatgeoryContainer'
import Pagination from '../Uitily/Pagination'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAllCategory, getAllCategoryPage } from '../../redux/actions/categoryAction';
import AllCategoryPageHook from '../../hook/category/AllCategoryPageHook'


const Categoryallpage = () => {

    const [category, loading, pageCount, getPage] = AllCategoryPageHook()
    return (
        <div>
            <CategoryContainer data={category.data} loading={loading}/>
            {
                pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage} />) : null
            }
        </div>
)
}

export default Categoryallpage