import React, { useEffect, useState } from 'react'
import ViewSearchHook from '../product/ViewSearchHook'

const NavbarSearchHook = () => {
    const [items, pagination, onPress, gerProduct] = ViewSearchHook()

    const [searchWord, setSearchWord] = useState('')

    const onChangeSearch = (e) => {
        localStorage.setItem("searchWord", e.target.value)
        setSearchWord(e.target.value)

        const path = window.location.pathname

        if(path != "/products"){
            window.location.href = "/products"
        }
    }
    useEffect(()=>{
        setTimeout(()=>{
            gerProduct()
        }, 1000)
    }, [searchWord])

    return [onChangeSearch, searchWord]
}

export default NavbarSearchHook