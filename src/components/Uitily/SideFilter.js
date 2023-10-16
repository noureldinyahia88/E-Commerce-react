import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import SidebarSearchHook from '../../hook/search/sidebarSearchHook'
import './sidebarStyle.css'


const SideFilter = () => {
    const [category, brand, clickCategory, clickBrand, priceFrom, priceTo] = SidebarSearchHook()

    let priceFromValue = localStorage.getItem("priceFrom")
    let priceToValue = localStorage.getItem("priceTo")

    return (
    <div className="sidbar mt-3">
        <Row>
            <Col className="d-flex flex-column mt-2">
                <h5 className="sidbarHead mt-3">Categories</h5>
                <div className="d-flex mt-3">
                <input onChange={clickCategory} type="checkbox" value="0" />
                <div className="filter-sub me-2 ">All</div>
                </div>
                {
                    category ? (category.map((item, index)=>
                        <div key={index} className="d-flex mt-3">
                <input onChange={clickCategory} type="checkbox" value={item._id} />
                <div className="filter-sub me-2 ">{item.name}</div>
                </div>
                    )):<h3>No Category</h3>
                }
            </Col>
    
            <Col className="d-flex flex-column mt-2">
            <h5 className="sidbarHead mt-3">Brands</h5>
            <div className="d-flex mt-3">
                <input onChange={clickBrand} type="checkbox" value="0" />
                <div className="filter-sub me-2 ">All</div>
                </div>
                {
                    brand ? (brand.map((item, index)=>
                    <div key={index} className="d-flex mt-2">
                <input onChange={clickBrand}  type="checkbox" value={item._id} />
                <div className="filter-sub me-2 ">{item.name}</div>
                </div>
                    )) : <h3>No Brand</h3>
                }
            </Col>
    
            <h5 className="sidbarHead my-3">Price</h5>
            <div className="d-flex">
                {/* <p className="filter-sub my-2">From:</p> */}
                <input 
                placeholder='From'
                value={priceFromValue}
                onChange={priceFrom}
                className="priceInput m-2 text-center"
                type="number"
                />
            </div>
            <div className="d-flex ">
                {/* <p className="filter-sub my-2">To:</p> */}
                <input
                placeholder='To:'
                value={priceToValue}
                onChange={priceTo}
                className="priceInput m-2 text-center"
                type="number"
                />
            </div>
            </Row>
        </div>
)
}

export default SideFilter