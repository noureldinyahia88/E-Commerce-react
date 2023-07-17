import React from 'react'
import './subtitle.css'

const SubTitle = ({title,btnTitle}) => {
    return (
    <div className='sub container d-flex justify-content-between align-items-center pt-5 '>
        <div className='sub-title'>{title}</div>
        {btnTitle ? (<div className='shopping-now'>{btnTitle}</div>): null}
    </div>
)
}

export default SubTitle