import React from 'react';
import harry from '../../images/about/faisal.jpg'


const About = () => {
    return (
        <div className='text-center mt-5 mx-auto w-75'>

            <h3>Proprietor Name:<h4>Md. Faisal Ahmed </h4></h3>
            <p style={{ textAlign: 'justify' }}>Hi, We are doing our business since 1987. It was started through my grandfather. Then it comes to me through the generation changing.
                We are the authorized dealer of the these product. Our products quality as good as you see in the other countries.
                We always focus on our  retail sellers who are doing business in their area. We ensure our support 24/7.
                We always encourage the small businessman who will start their business. We always support them.  </p>
            <div className='mt-5'>
                <img className='rounded-2' src={harry} alt="" />
            </div>
        </div>
    );
};

export default About;