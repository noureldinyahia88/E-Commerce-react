import React, { useState, useEffect } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import { Col, Row } from 'react-bootstrap';
import avatar from '../../images/add.png'
import add from '../../images/addPlus.png'
import MultiImageInput from 'react-multiple-image-input';
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'
import './admin.css'
import { getAllBrand } from '../../redux/actions/BrandAction';
import { CompactPicker } from 'react-color'



const AdminAddProducts = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        
        dispatch(getAllCategory());
        dispatch(getAllBrand());
        }, []);

        // to get category from redux
    const category = useSelector(state => state.allCategory.category)
    // to get brand from redux
    const brand = useSelector(state => state.allBrand.brand)

    
    const onSelect = () => {
        
    }
    const onRemove = () => {
        
    }
    const onSelectCategory = (e) => {
        setSubCatID(e.target.value)
    }
    const onSelectBrand = (e) => {
        setBrandId(e.target.value)
    }
    const options = [
        { name: "The first category", id: 1 },
        { name: "The second category", id: 2 },
    ];
    // value images products
    const [images, setImages] = useState([]);
    // values State
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState(0);
    const [priceAfter, setPriceAfter] = useState(0);
    const [qty, setQty] = useState(0);
    const [catID, setCatID] = useState('');
    const [brandID, setBrandId] = useState('');
    const [subCatID, setSubCatID] = useState([]);
    const [selectedSubID, setSelectedSubID] = useState([]);

    // hide and show compactPicker
    const [showColor, setShowColor] = useState(false)

    // store pick colors
    const [colors, setPickColor] = useState([])

    const handelChangeComplete = (color) => {
        setPickColor([...colors, color.hex])
        setShowColor(!showColor)
    }
    // remove color
    const removeColor = (color) => {
        const newColor = colors.filter((e) => e !== color)
        setPickColor(newColor)
    }
    

    return (
        <div>
        <Row className="justify-content-start ">
            <div className="admin-content-text pb-4">Add a new product</div>
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
                    onChange={(e)=>setProdName(e.target.value)}
                />
                <textarea
                    className="input-form-desc2 p-2 mt-3"
                    rows="4"
                    cols="50"
                    placeholder="Product description"
                    value={prodDescription}
                    onChange={(e)=>setProdDescription(e.target.value)}
                />
                <input
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Price before sale"
                    value={priceBefore}
                    onChange={(e)=>setPriceBefore(e.target.value)}
                />
                <input
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Product price"
                    value={priceAfter}
                    onChange={(e)=>setPriceAfter(e.target.value)}
                />
                <input
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Quantity"
                    value={qty}
                    onChange={(e)=>setQty(e.target.value)}
                />
                <select
                    onChange={onSelectCategory}
                    name="cat"
                    className="select input-form-area mt-3 px-2 ">
                    <option value="0">The Main category</option>
                    {
                        category.data ? (category.data.map((item) => {
                            return (
                                <option value={item._id}>{item.name}</option>
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
                    className="select input-form-area mt-3 px-2 ">
                    <option value="0">The brand</option>
                    {
                            brand.data ? (brand.data.map((item) => {
                                return (
                                    <option value={item._id}>{item.name}</option>
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
                    <img onClick={()=> setShowColor(!showColor)} src={add} alt="" width="30px" height="35px" className="add-image" style={{cursor:"pointer"}} />
                    {
                        showColor === true ? <CompactPicker onChangeComplete={handelChangeComplete} /> : null
                    }
                </div>
            </Col>
        </Row>
        <Row>
            <Col sm="8" className="d-flex justify-content-end ">
                <button className="btn-save d-inline mt-2 ">Save changes</button>
            </Col>
        </Row>
    </div>
)
}

export default AdminAddProducts