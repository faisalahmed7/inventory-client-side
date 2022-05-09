import React from 'react';
import './NewProduct.css'

const NewProduct = ({ product }) => {
    const { name, description, image, price, supplierName } = product;
    return (
        <div className='newProduct-container'>
            <img className='w-100' src={image} alt="" />
            <div className='mt-4'>
                <h2>{name}</h2>
                <p>Supplier Name:  {supplierName}</p>
                <p>Price:  {price}</p>
                <p className='description'>{description}</p>
            </div>

        </div>
    );
};

export default NewProduct;