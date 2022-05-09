import React, { useEffect, useState } from 'react';
import NewProduct from '../NewProduct/NewProduct';
import './NewProducts.css'

const NewProducts = () => {
    const [newProducts, setNewProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/upcoming')
            .then(res => res.json()
                .then(data => setNewProducts(data)))
    }, [])
    return (
        <div className='mt-5 mb-5' >
            <h2 className='products-name mb-5 text-info'>Upcoming New Products</h2>

            <div className='products-container'>
                {
                    newProducts.map(product => <NewProduct
                        key={product._id}
                        product={product}>

                    </NewProduct>)
                }
            </div>
        </div>
    );
};

export default NewProducts;