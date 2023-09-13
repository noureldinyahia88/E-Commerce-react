
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'
import notify from '../useToastify'
import { createSubcategory } from '../../redux/actions/SubcategoryAction'

const SubCategoryHook = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        if(!navigator.onLine) {
            notify("Check your connection", "warm")
            return;
        }
        dispatch(getAllCategory());
        }, []);

    const category = useSelector(state => state.allCategory.category)
    const subcategory = useSelector(state => state.subCategory.subcategory)

    const [id, setID] = useState("0")
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(true)

    // on change menu
    const handelChange = (e) => {
        setID(e.target.value)
    }

    // to save
    const onChangeName = (e) => {
        e.persist()
        setName(e.target.value)
    }

    const handelSubmit = async (e) => {
        e.preventDefault();

        if(!navigator.onLine) {
            notify("Check your connection", "warm")
        }
        if(id === "0") {
            notify("Please choose valid category" ,"warm")
            return;
        }
        if(name === "") {
            notify("Please write valid name" ,"warm")
            return;
        }
        setLoading(true)
        await dispatch(createSubcategory({
            name: name,
            category:id
        }))
        setLoading(false)
    }


    useEffect(()=>{
        if(loading === false) {
            setName("")
            setID("0")
            
            
            if(subcategory === 201) {
                notify("Something wrong", "warm")
            }
            else if(subcategory === "Error Error: Request failed status code 400") {
                notify("The name already exists ","warm")
            }
            else {
                notify("Success", "success")
            }
            setLoading(true)
        }
    }, [loading])

    return [id,name ,loading ,category, subcategory, handelChange, handelSubmit, onChangeName]
}

export default SubCategoryHook