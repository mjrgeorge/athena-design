import React from 'react';


const ServiceDetails = ({ service }) => {
    const { image, title, details } = service;
    return (
        <div className="col-md-6 col-lg-3">
            <div className="service_container mx-auto p-5">
                <img className="mb-4" src={image} alt="service" />
                <h5>{title}</h5>
                <p className="text-muted">{details}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;