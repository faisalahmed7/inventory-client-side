import React from 'react';
import './Award.css'
const Award = ({ award }) => {
    const { name, description, image } = award;
    return (
        <div className='award-container'>
            <img className='w-100' src={image} alt="" />
            <div className='mt-4'>
                <h2>{name}</h2>

                <p className='description'>{description}</p>
            </div>

        </div>
    );
};

export default Award;