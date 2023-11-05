import React from 'react'
import './subtitle.css'
import { Link } from 'react-router-dom'

const SubTitle = ({title,btnTitle,pathText}) => {
    return (
    <div className='sub container d-flex justify-content-between align-items-center '>
        <div className='sub-title'>{title}</div>
        <Link  to={`${pathText}`} style={{ textDecoration: 'none' }}>
        {btnTitle ? (<div className='shopping-now'>{btnTitle}</div>): null}
        </Link>
    </div>
)
}

export default SubTitle