import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, getAllCategoryPage } from '../../redux/actions/categoryAction';


const AllCategoryPageHook = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(getAllCategory(6));
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
        return [category, loading, pageCount, getPage]
}

export default AllCategoryPageHook