import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let displayError;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const handleLogin = e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)

    }
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {

        displayError = <p className='text-danger'>Error: {error.message}</p>


    }

    if (user) {
        navigate(from, { replace: true });
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (!email) {
            toast('please enter your email')
        }
        else {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
    }

    return (
        <div className='login-form'>
            <h2 className='text-info text-center mt-5'>Login First</h2>
            <form onSubmit={handleLogin}>
                <input ref={emailRef} type="email" name="email" id="email" placeholder='Your Email' required />
                <input ref={passwordRef} type="password" name="password" id="password" placeholder='Your Password' required />
                <input type="submit" className='btn-success w-50 d-block mx-auto' value="Login" />


            </form>
            {displayError}

            <p>New to Bd Electronics ? <Link to='/registration' className='text-danger text-decoration-none'> Please Register</Link></p>
            <p>Forget Password ?<button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>

            <SocialLogin></SocialLogin>
            <ToastContainer />

        </div>
    );
};

export default Login;