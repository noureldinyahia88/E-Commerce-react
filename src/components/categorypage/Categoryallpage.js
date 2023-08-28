import React from 'react'
import CategoryContainer from '../category/CatgeoryContainer'
import Pagination from '../Uitily/Pagination'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, getAllCategoryPage } from '../../redux/actions/categoryAction';


const Categoryallpage = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(getAllCategory());
    }, []);

    // to get data from redux
    const category = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)

    // to get page count
    let pageCount = 0;
    if(category.paginationResult)
    pageCount= category.paginationResult.numberOfPages

    // when press Pagination
    const getPage = (page) => {
        dispatch(getAllCategoryPage(page))
        console.log(page);
    }

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