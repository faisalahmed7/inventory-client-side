import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
            .then(res => res.json()
                .then(data => setProduct(data)))
    }, [])
    return (
        <div className='details-container'>
            <div className='singleProduct-container'>
                <div className='product-image'>
                    <img className='w-100' src={product.image} alt="" />
                </div>
                <div className='product-details'>
                    <h2><span className='text-danger'><i>{product.name}</i></span></h2>
                    <p>Product Id:  <span className='p_id'><i>{product._id}</i></span></p>
                    <p>Price:  {product.price} BDT</p>
                    <p>Quantity:  {product.quantity}</p>
                    <p className='single-description'>{product.description}</p>
                    <button className='deliver-btn'>Deliver</button>
                </div>

            </div>
        </div>
    );
};

export default InventoryDetail;