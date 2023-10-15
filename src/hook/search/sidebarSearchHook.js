import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/BrandAction';

const SidebarSearchHook = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const run = async () => {
        await    dispatch(getAllCategory());
        await    dispatch(getAllBrand());
        }
        run()
    }, []);

    // get category state from redux
    const allCategory = useSelector(state => state.allCategory.category)

    // get Brand state from redux
    const allBrand = useSelector(state => state.allBrand.brand)

    
    let category = [];
    if(allCategory && allCategory.data){
        category = allCategory.data
    }

    let brand = [];
    if(allBrand && allBrand.data){
        brand = allCategory.data
    }

    return [category, brand]
}

export default SidebarSearchHook