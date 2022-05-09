import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
            .then(res => res.json()
                .then(data => setProduct(data)))
    }, [])

    const handleRestockItem = e => {
        e.preventDefault()
        const quantity = e.target.quantity.value;


        const updateQuantity = { quantity }
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log("success", data)
                alert('Restock Item successfully')
                e.target.reset()
                setProduct(...product, data)



            })
    }


    return (
        <div className='details-container'>
            <div className='singleProduct-container'>
                <div className='singleProduct-image'>
                    <img className='w-100 rounded-2' src={product.image} alt="" />
                </div>
                <div className='singleProduct-details'>
                    <h2><span className='name'><i>{product.name}</i></span></h2>
                    <p>Product Id:  <span className='p_id'><i>{product._id}</i></span></p>
                    <p>Price:  {product.price} BDT</p>
                    <p>Quantity:  {product.quantity}</p>
                    <p>Supplier: {product.supplierName}</p>
                    <p className='single-description'>{product.description}</p>

                    <button className='deliver-btn'>Deliver</button>
                    <div className='mt-2'>
                        <form onSubmit={handleRestockItem}>
                            <input type="text" name="quantity" id="" />
                            <input className='bg-success text-white rounded-2 border' type="submit" value="Restock Quantity" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InventoryDetail;