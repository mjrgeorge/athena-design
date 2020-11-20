import React from 'react';
import PriceDetails from './PriceDetails';
import './Price.css';

const Price = () => {
    const information = [
        {
            "id": "1",
            "price": 199,
            "title": "For Basic",
            "home_page": "Homepage",
            "inner_page": "No Inner Page",
            "asset_file": "Asset file",
            "source_file": "Source file",
            "photos": "Free Stock Photos",
            "support_duration": "10 Days Free Support",
            "support_time": "Asset file",
        },
        {
            "id": "2",
            "price": 399,
            "title": "For Preferred",
            "home_page": "Homepage",
            "inner_page": "4 Inner Page",
            "asset_file": "Asset file",
            "source_file": "Source file",
            "photos": "Free Stock Photos",
            "support_duration": "20 Days Free Support",
            "support_time": "Asset file",
        },
        {
            "id": "3",
            "price": 599,
            "title": "For Elite",
            "home_page": "Homepage",
            "inner_page": "8 Inner Page",
            "asset_file": "Asset file",
            "source_file": "Source file",
            "photos": "Free Stock Photos",
            "support_duration": "30 Days Free Support",
            "support_time": "Asset file",
        },
    ]
    return (
        <section className="text-center team-container mt-5" id='pricing'>
            <div className="p-3">
                <h2>Choose Your Dedicated Team</h2>
            </div>
            <div className="row ">
                {
                    information.map(info => <PriceDetails info={info} key={info.id}></PriceDetails>)
                }
            </div>
        </section>
    );
};

export default Price;