import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({ product }) => {
    const { name, description, image, price, _id, quantity } = product;
    const navigate = useNavigate()
    const navigateToDetail = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='product-container'>
            <img className='w-100' src={image} alt="" />
            <h2>{name}</h2>
            <p>Price:  {price}</p>
            <p>Quantity:  {quantity}</p>
            <p className='description'>{description}</p>
            <button onClick={() => navigateToDetail(_id)} className='update-button'>Update</button>
        </div>
    );
};

export default Inventory;