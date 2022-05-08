import React from 'react';
import useProducts from '../../hooks/useProducts';
import { Table } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const ManageItems = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate()
    const handleAddNewProduct = () => {
        navigate('/addItem')
    }
    const handleDelete = id => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                const remaining = products.filter((product) => product._id !== id);
                setProducts(remaining)
            })
    }
    return (
        <div>
            <div className='text-center mt-5 '>
                <button onClick={handleAddNewProduct} className='bg-success p-2 border-0 rounded-2'><span className='text-white'>Add New Product</span></button>
            </div>
            <div className='mt-5'>
                <h2 className='text-center mb-4'>Total Items : {products.length}</h2>
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Product name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delete item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr>
                                <td>
                                    <h6>{product.name}</h6>
                                </td>
                                <td>
                                    <h6>{product.price}</h6>
                                </td>
                                <td>
                                    <h6>{product.quantity}</h6>
                                </td>
                                <td><button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete</button></td>

                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default ManageItems;