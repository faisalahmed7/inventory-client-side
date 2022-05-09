import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [products] = useProducts();
    const newProducts = [...products]
    const finalProducts = newProducts.slice(0, 6)
    const navigate = useNavigate()

    const handleManageInventory = () => {
        navigate('/manageItems')
    }
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
            <div className='text-center mt-5 '>
                <button onClick={handleManageInventory} className='bg-success p-2 border-0 rounded-2'><span className='text-white'>Manage Inventories</span></button>
            </div>
        </div>
    );
};

export default Inventories;