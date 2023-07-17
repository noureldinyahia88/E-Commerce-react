import React, { useState } from 'react'
import { Navbar, Container, Carousel, FormControl, Nav } from 'react-bootstrap'

import slider1 from '../../images/slide1.png'
import slider2 from '../../images/slide2.png'
import slider3 from '../../images/slide3.png'
import slider4 from '../../images/slide4.png'


const Slider = () => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex)=>{
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item  interval={2000}>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <img
                    className=""
                    src={slider1}
                    alt="First slide"
                />
            </div>
        </Carousel.Item>
        <Carousel.Item  interval={2000}>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <img
                    className=""
                    src={slider2}
                    alt="First slide"
                />
            </div>
        </Carousel.Item>

        <Carousel.Item  interval={2000}>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <img
                    className=""
                    src={slider3}
                    alt="First slide"
                />
            </div>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <img
                    
                    className=""
                    src={slider4}
                    alt="First slide"
                />
            </div>
        </Carousel.Item>
    </Carousel>
)
}

export default Slider