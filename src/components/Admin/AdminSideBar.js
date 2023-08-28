import React from 'react'
import { Link } from 'react-router-dom'
import './admin.css'

const AdminSideBar = () => {
    return (
        <div className="sidebar">
        <div className="d-flex flex-column">
            <Link to="/admin/allorders" style={{ textDecoration: 'none' }}>
                <div className="side-text mt-3 border-bottom p-2 mx-auto text-center">
                Manage orders
                </div>
            </Link>
            <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
                <div className="side-text my-1 border-bottom p-2 mx-auto text-center">
                Product management
                </div>
            </Link>
            <Link to="/admin/addbrand" style={{ textDecoration: 'none' }}>
                <div className="side-text my-1 border-bottom p-2 mx-auto text-center">
                Add brand
                </div>
            </Link>

            <Link to="/admin/addcategory" style={{ textDecoration: 'none' }}>
                <div className="side-text my-1 border-bottom p-2 mx-auto text-center">
                Add category
                </div>
            </Link>

            <Link to="/admin/addsubcategory" style={{ textDecoration: 'none' }}>
                <div className="side-text my-1 border-bottom p-2 mx-auto text-center">
                Add subcategory
                </div>
            </Link>
            <Link to="/admin/addproducts" style={{ textDecoration: 'none' }}>
                <div className="side-text my-1 border-bottom p-2 mx-auto text-center">
                Add product
                </div>
            </Link>

        </div>
    </div>
)
}

export default AdminSideBar