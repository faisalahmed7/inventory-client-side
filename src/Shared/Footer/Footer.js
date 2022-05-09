import React from 'react';
import './Footer.css'

import facebook from '../../images/social/facebook.png'

import linkedin from '../../images/social/linkedin.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='react-footer'>
            <div className='address-footer'>
                <div className='address mt-2'>
                    <h6>Contact Info</h6>
                    <p> House#19/A/A</p>
                    <p> Road#07</p>
                    <p> Sector#03</p>
                    <p> Uttara, Dhaka-1230</p>
                </div>
                <div className='mt-4'>

                    <p className='text-center'>“Forget past mistakes. Forget failures. Forget everything except what you’re going to do now and do it”– William Durant</p>
                    <h3 className='text-center'> Copyright © {year}</h3>

                </div>
                <div className='social-address mt-2'>
                    <h6>Social Contact</h6>
                    <div>
                        <div>
                            <a target="_blank" href="https://www.facebook.com/faisalovroo/"><img src={facebook} alt="" /></a>
                        </div>

                        <div className='mt-2'>
                            <a target="_blank" href="https://www.linkedin.com/in/faisal-ahmed-3283b7217/"><img src={linkedin} alt="" /></a>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Footer;