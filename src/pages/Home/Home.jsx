import React from 'react';
import Banner from './Banner';
import Topfood from './Topfood';
import Chafe from './Chafe';
import Offer from './Offer';
import Feadback from './Feadback';
import Award from './Award';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Topfood></Topfood>
            <Chafe></Chafe>
            <Offer></Offer>
            <Feadback></Feadback>
            <Award></Award>
        </div>
    );
};

export default Home;