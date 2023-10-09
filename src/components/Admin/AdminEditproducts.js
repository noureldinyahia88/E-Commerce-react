import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Multiselect from 'multiselect-react-dropdown';
import add from '../../images/addPlus.png';
import MultiImageInput from 'react-multiple-image-input';
import { ToastContainer } from 'react-toastify';
import { CompactPicker } from 'react-color';
import EditProductHook from '../../hook/product/EditProductHook';
import { useParams } from 'react-router-dom';

const AdminEditproducts = () => {
    const { id } = useParams()
    const  [brandID, subCatID, catID, onChangeColor,onChangeQty,onChangePriceBefore,onChangePriceAfter, onChangeDecProd,onChangeNameProd, showColor, category, brand, priceAfter, images, setImages, onSelect, onRemove, options, handelChangeComplete, 
        removeColor, onSelectCategory, handelSubmit, onSelectBrand, colors, priceBefore, qty,prodDescription, prodName] = EditProductHook(id)
    return (
        <Container>
        <Row className="justify-content-start ">
            <div className="admin-content-text pb-4">Edit the product - {prodName}</div>
            <Col sm="8">
                <div className="text-form pb-2">Product images</div>
                
                
                <MultiImageInput
            images={images}
            setImages={setImages}
            theme={{
                backgroundColor: "light",
                outlineColor: "#6fb164",
                buttonColor: "#fff",
            }}
            max={4}/>

                <input
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Product name"
                    value={prodName}
                    onChange={onChangeNameProd}
                />
                <textarea
                    className="input-form-desc2 p-2 mt-3"
                    rows="4"
                    cols="50"
                    placeholder="Product description"
                    value={prodDescription}
                    onChange={onChangeDecProd}
                />
                <input
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Price before sale"
                    value={priceBefore}
                    onChange={onChangePriceBefore}
                />
                <input
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Product price"
                    value={priceAfter}
                    onChange={onChangePriceAfter}
                />
                <input
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Quantity"
                    value={qty}
                    onChange={onChangeQty}
                />
                <select
                    onChange={onSelectCategory}
                    name="cat"
                    value={catID}
                    className="select input-form-area mt-3 px-2 ">
                    <option value="0">The Main category</option>
                    {
                        category.data ? (category.data.map((item,index) => {
                            return (
                                <option key={index} value={item._id}>{item.name}</option>
                            )
                        })) : null
                    }
                </select>

                <Multiselect
                    className="mt-2"
                    placeholder="subcategory"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue="name"
                    style={{ color: "red" }}
                    
                />
                <select
                onChange={onSelectBrand}
                    name="brand"
                    value={brandID}
                    className="select input-form-area mt-3 px-2 ">
                    <option value="0">The brand</option>
                    {
                            brand.data ? (brand.data.map((item, index) => {
                                return (
                                    <option key={index} value={item._id}>{item.name}</option>
                                )
                            })) : null
                    }
                </select>

                <div className="text-form mt-3 ">The colors</div>
                <div className="mt-1 d-flex">
                    {
                        colors.length >= 1 ? (
                            colors.map((color,index)=>{
                                return (
                                <div key={index}
                                onClick={()=>removeColor(color)}
                                className="color ms-2 border  mt-1"
                                style={{ backgroundColor: color }}>
                                </div>
                                )
                            })
                        ) : null
                    }
                    <img onClick={onChangeColor} src={add} alt="" width="30px" height="35px" className="add-image" style={{cursor:"pointer"}} />
                    {
                        showColor === true ? <CompactPicker onChangeComplete={handelChangeComplete} /> : null
                    }
                </div>
            </Col>
        </Row>
        <Row>
            <Col sm="8" className="d-flex justify-content-end ">
                <button className="btn-save d-inline mt-2" onClick={handelSubmit}>Save changes</button>
            </Col>
        </Row>
        <ToastContainer />
    </Container>
)
}

export default AdminEditproducts