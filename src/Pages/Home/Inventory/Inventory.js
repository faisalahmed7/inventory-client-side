import React from 'react';
import './Inventory.css'

const Inventory = ({ product }) => {
    const { name, description, image, price, id } = product
    return (
        <div className='product-container'>
            <img src={image} alt=''></img>
            {/* <img className='w-100' src={image} alt="" /> */}
            <div className="img-text">
                <h2 className='text-center '>{name}</h2>
                <p className='price'>Price: {price}</p>
                <p className='description'>{description}</p>

            </div>
            <button className='update-button'>Update</button>
        </div>
    );
};

export default Inventory;