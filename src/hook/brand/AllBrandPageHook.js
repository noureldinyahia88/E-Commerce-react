import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBrand, getAllBrandPage } from '../../redux/actions/BrandAction';

const AllBrandPageHook = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(getAllBrand(6));
    }, []);

    // to get data from redux
    const brand = useSelector(state => state.allBrand.brand)
    const loading = useSelector(state => state.allBrand.loading)

    // to get page count
    let pageCount = 0;
    if(brand.paginationResult)
    pageCount= brand.paginationResult.numberOfPages

    // when press Pagination
    const getPage = (page) => {
        dispatch(getAllBrandPage(page))
        console.log(page);
    }
        return [brand, loading, pageCount, getPage]
}

export default AllBrandPageHook