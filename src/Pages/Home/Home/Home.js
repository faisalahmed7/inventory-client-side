import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;