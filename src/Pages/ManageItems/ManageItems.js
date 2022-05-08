import React from 'react';
import useProducts from '../../hooks/useProducts';
import { Table } from "react-bootstrap";

const ManageItems = () => {
    const [products] = useProducts([]);
    return (
        <div>
            <div>
                <h2>MANAGE : {products.length}</h2>
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
                                <td><button className='btn btn-danger'>Delete</button></td>

                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default ManageItems;