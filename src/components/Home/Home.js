import React from 'react';
import Price from '../Price/Price';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="container-fluid">
            <Services/>
            <Price/>
        </div>
    );
};

export default Home;