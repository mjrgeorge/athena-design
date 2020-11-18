import React from 'react';
import './PriceDetails.css';

const PriceDetails = ({ info }) => {
    const { price, title, home_page, inner_page, asset_file, source_file, photos, support_duration, support_time } = info;
    return (
        <div className="col-lg-4">
            <div className="price_container shadow rounded m-5 mx-auto p-5">
                <p className="price font-weight-bold">${price}</p>
                <p className="text-muted  font-weight-light">{title}</p>
                <hr className="bg-info mx-3" />
                <div className="text-muted">
                    <p>{home_page}</p>
                    <p>{inner_page}</p>
                    <p>{asset_file}</p>
                    <p>{source_file}</p>
                    <p>{photos}</p>
                    <p>{support_duration}</p>
                    <p>{support_time}</p>
                    <button className="btn btn-info">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default PriceDetails;