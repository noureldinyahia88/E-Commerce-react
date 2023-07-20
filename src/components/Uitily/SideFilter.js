import React from 'react'
import { Row } from 'react-bootstrap'

const SideFilter = () => {
    return (
    <div className="mt-3">
        <Row>
            <div className="d-flex flex-column mt-2">
                <div className="filter-title">Male</div>
                <div className="d-flex mt-3">
                <input type="checkbox" value="" />
                <div className="filter-sub me-2 ">Women</div>
                </div>
                <div className="d-flex mt-2">
                <input type="checkbox" value="" />
                <div className="filter-sub me-2 ">Unisex</div>
                </div>
                <div className="d-flex mt-2">
                <input type="checkbox" value="" />
                <div className="filter-sub me-2 "> olyester</div>
                </div>
                <div className="d-flex mt-2">
                <input type="checkbox" value="" />
                <div className="filter-sub me-2 "> Cotton/Polyester</div>
                </div>
                <div className="d-flex mt-2">
                <input type="checkbox" value="" />
                <div className="filter-sub me-2 "> Coton</div>
                </div>
            </div>
    
            <div className="d-flex flex-column mt-2">
                <div className="filter-title mt-3">BRAND</div>
                <div className="d-flex mt-3">
                <input type="checkbox" value="" />
                <div className="filter-sub me-2 ">All</div>
                </div>
                <div className="d-flex mt-2">
                <input type="checkbox" value="" />
                <div className="filter-sub me-2 ">Apple</div>
                </div>
                <div className="d-flex mt-2">
                <input type="checkbox" value="" />
                <div className="filter-sub me-2 ">Samsung</div>
                </div>
            </div>
    
            <div className="filter-title my-3">Price</div>
            <div className="d-flex">
                <p className="filter-sub my-2">From:</p>
                <input
                className="m-2 text-center"
                type="number"
                style={{ width: "50px", height: "25px" }}
                />
            </div>
            <div className="d-flex">
                <p className="filter-sub my-2">To:</p>
                <input
                className="m-2 text-center"
                type="number"
                style={{ width: "50px", height: "25px" }}
                />
            </div>
            </Row>
        </div>
)
}

export default SideFilter