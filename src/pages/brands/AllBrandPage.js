import React from 'react'
import Pagination from '../../components/Uitily/Pagination'
import BrandContainer from '../../components/Brand/BrandContainer'
import AllBrandPageHook from '../../hook/brand/AllBrandPageHook'

const AllBrandPage = () => {

    const [brand, loading, pageCount, getPage] = AllBrandPageHook()

    return (
    <div>
        <BrandContainer data={brand.data} loading={loading} />
        <Pagination Pagination={pageCount} onPress={getPage} />
    </div>
)
}

export default AllBrandPage