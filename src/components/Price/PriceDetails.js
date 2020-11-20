import React from 'react';

const PriceDetails = ({ info }) => {
    const { id, price, title, home_page, inner_page, asset_file, source_file, photos, support_duration, support_time } = info;
    const handleMouseOver = () => {
        document.getElementById(`btn_${id}`).style.visibility = "visible";
    }
    const handleMouseLeave = () => {
        document.getElementById(`btn_${id}`).style.visibility = "hidden";
    }
    return (
        <div onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} className="col-lg-4">
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
                    <button id={`btn_${id}`} type='button' className='btn btn-brand px-4 py-2 text-white'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default PriceDetails;