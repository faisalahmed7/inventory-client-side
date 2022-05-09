import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({ product }) => {
    const { name, description, image, price, _id, quantity, supplierName } = product;
    const navigate = useNavigate()
    const navigateToDetail = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='product-container'>
            <img className='w-100' src={image} alt="" />
            <div className='mt-4'>
                <h2>{name}</h2>
                <p>Supplier Name:  {supplierName}</p>
                <p>Price:  {price}</p>
                <p>Quantity:  {quantity}</p>
                <p className='description'>{description}</p>
                <button onClick={() => navigateToDetail(_id)} className='update-button'>Update</button>
            </div>
        </div>
    );
};

export default Inventory;