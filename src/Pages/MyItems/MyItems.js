import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            console.log(email);
            const url = `http://localhost:5000/item?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data)
        }
        getItems();
    }, [user]);
    const handleDelete = id => {

        const confirm = window.confirm('Are You Sure Want To Delete??')
        if (confirm) {
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter((item) => item._id !== id);
                    setItems(remaining)
                })
        }
    }

    return (
        <div>
            <h2>My Items {items.length}</h2>
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
                        {items.map((item) => (
                            <tr>
                                <td>
                                    <h6>{item.name}</h6>
                                </td>
                                <td>
                                    <h6>{item.price}</h6>
                                </td>
                                <td>
                                    <h6>{item.quantity}</h6>
                                </td>
                                <td><button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete</button></td>

                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyItems;