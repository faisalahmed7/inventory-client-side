import React from 'react';
import { useForm } from "react-hook-form";
import './AddItems.css'

const AddItems = () => {


    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {

        console.log(data);
        const url = `http://localhost:5000/inventory`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                e.target.reset();
            })

    };

    return (
        <div className='mt-4'>
            <div className='w-75 mx-auto device'>
                <h2 className='text-center text-success mb-4'>Please add a product</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Service Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                    <input className='mb-2' placeholder='Price' type="text" {...register("price")} />
                    <input className='mb-2' placeholder='Quantity' type="text" {...register("quantity")} />
                    <input className='mb-2' placeholder='Photo Url' type="text" {...register("image")} />
                    <input className='mb-2' placeholder='Email' type="text" {...register("email")} />
                    <input className='mb-2' type="submit" value="Add Service" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;