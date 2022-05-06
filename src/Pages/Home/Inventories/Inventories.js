import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [products, setProducts] = useProducts()
    return (
        <div id="services" className='mt-5' >
            <h2 className='products-name mb-5'>Inventories</h2>

            <div className='products-container'>
                {
                    products.map(product => <Inventory
                        key={product._id}
                        product={product}>
                    </Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;