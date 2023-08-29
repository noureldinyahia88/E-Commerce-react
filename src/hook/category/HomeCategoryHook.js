import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'

const HomeCategoryHook = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(getAllCategory());
    }, []);

    // get last category state from redux
    const category = useSelector(state => state.allCategory.category)
    
    // get last loading state from redux
    const loading = useSelector(state => state.allCategory.loading)

    console.log(category);
    console.log(loading);

    return [category, loading]
}

export default HomeCategoryHook