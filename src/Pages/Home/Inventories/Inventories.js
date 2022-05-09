import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [products] = useProducts();
    const newProducts = [...products]
    const finalProducts = newProducts.slice(0, 6)
    return (
        <div id="services" className='mt-5 mb-5' >
            <h2 className='products-name mb-5'>Inventories</h2>

            <div className='products-container'>
                {
                    finalProducts.map(product => <Inventory
                        key={product._id}
                        product={product}>
                    </Inventory>)
                }
            </div>
            <div className='text-center mt-5 mb-2'>
                <Link to='/manageItems' className='text-danger text-decoration-none'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Inventories;