import React from 'react';
import './Award.css'
const Award = ({ award }) => {
    const { name, description, image } = award;
    return (
        <div className='award-container'>
            <img className='w-100' src={image} alt="" />
            <div className='mt-4'>
                <h5 className='text-danger'>{name}</h5>

                <p className='description text-center text-success'>{description}</p>
            </div>

        </div>
    );
};

export default Award;