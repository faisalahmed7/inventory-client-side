import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css'
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png'
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate()

    let showError;


    if (googleLoading) {
        return <Loading></Loading>

    }
    if (googleError) {

        showError = <p className='text-danger'>Error: {googleError?.message}</p>


    }
    if (googleUser) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center justify-around'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {showError}

            <button onClick={() => signInWithGoogle()} className='btn  social w-50 d-block mx-auto my-2'>
                <img style={{ width: "30px" }} src={google} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>



        </div>
    );
};

export default SocialLogin;