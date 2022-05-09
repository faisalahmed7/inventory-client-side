import React, { useEffect, useState } from 'react';
import Award from '../Award/Award';
import './Awards.css'

const Awards = () => {
    const [awards, setAwards] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/award')
            .then(res => res.json()
                .then(data => setAwards(data)))
    }, [])
    return (
        <div className='mt-5 mb-5' >
            <h2 className='awards-name mb-5 text-success'>Our Business Awards</h2>

            <div className='awards-container'>
                {
                    awards.map(award => <Award
                        key={award._id}
                        award={award}>

                    </Award>)
                }
            </div>
        </div>
    );
};

export default Awards;