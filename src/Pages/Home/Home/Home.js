import React from 'react';
import Awards from '../Awards/Awards';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import NewProducts from '../NewProducts/NewProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <hr />
            <NewProducts></NewProducts>
            <hr />
            <Awards></Awards>
        </div>
    );
};

export default Home;