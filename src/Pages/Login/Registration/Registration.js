import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './Registration.css'

const Registration = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegistration = e => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div className='registration-form'>
            <h2 className='text-success text-center mt-5'>Please Register</h2>
            <form onSubmit={handleRegistration}>
                <input type="text" name="name" id="name" placeholder='Your Name' required />
                <input type="email" name="email" id="email" placeholder='Your Email' required />
                <input type="password" name="password" id="password" placeholder='Your Password' required />
                <input type="submit" value="Registration" />


            </form>
            <p>Already Registered <Link to='/login' className='text-danger text-decoration-none'> Please Login</Link></p>
        </div>
    );
};

export default Registration;