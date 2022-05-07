import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({ product }) => {
    const { name, description, image, price, _id } = product;
    const navigate = useNavigate()
    const navigateToDetail = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='product-container'>
            <img src={image} alt=''></img>
            {/* <img className='w-100' src={image} alt="" /> */}
            <div className="img-text">
                <h2 className='text-center '>{name}</h2>
                <p className='price'>Price: {price}</p>
                <p className='description'>{description}</p>

            </div>
            <button onClick={() => navigateToDetail(_id)} className='update-button'>Update</button>
        </div>
    );
};

export default Inventory;