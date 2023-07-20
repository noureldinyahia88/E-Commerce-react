import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import './subtitle.css'
import sort from '../../images/sort.png'

const SearchContainerResult = ({title}) => {
    const handler = () =>{}
    return (
        <div className="d-flex justify-content-between pt-3 px-2">
        <div className="sub-title-flitter">{title}</div>
        <div className="search-count-text d-flex ">
            <UnopDropdown
                onAppear={handler}
                onDisappearStart={handler}
                trigger={
                    <p className="mx-1">
                        <img
                            width="20px"
                            height="20px"
                            className="ms-1"
                            src={sort}
                            alt=""
                        />
                        Sort by : Popularity
                    </p>
                }
                delay={0}
                align="CENTER"
                hover>
                <div className="card-filter">
                    <div className="border-bottom card-filter-item text-center"> Newest Arrivals</div>
                    <div className="border-bottom card-filter-item text-center">Price: Low to High</div>
                    <div className="border-bottom card-filter-item text-center">Price: High to Low</div>
                    <div className=" card-filter-item text-center">Product Rating</div>
                </div>
            </UnopDropdown>
        </div>
    </div>
)
}

export default SearchContainerResult