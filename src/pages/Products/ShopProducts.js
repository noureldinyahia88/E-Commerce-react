import React from 'react'
import CategoryHeader from '../../components/Uitily/CategoryHeader'
import SearchContainerResult from '../../components/Uitily/SearchContainerResult'
import { Col, Container, Row } from 'react-bootstrap'
import SideFilter from '../../components/Uitily/SideFilter'
import CardProductContainer from '../../components/ProductPage/CardProductContainer'
import Pagination from '../../components/Uitily/Pagination'
import ViewSearchHook from '../../hook/product/ViewSearchHook'

const ShopProducts = () => {

  const [items, pagination, onPress, gerProduct, result] = ViewSearchHook()

  if(pagination){
    var pageCount = pagination
} else {
    pageCount = 0
}

  return (
    <div>
        <CategoryHeader />
        <Container >
        <SearchContainerResult title={`${result} products found`} />

        <Row className='d-flex flex-row'>
            <Col sm='2' xs='2' md='1' className='d-flex'>
            <SideFilter />
            </Col>
            <Col sm='10' xs='10' md='11'>
                <CardProductContainer products={items}  title='' btntitle='' />
                {
                    pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={onPress} />):null
                }
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default ShopProducts