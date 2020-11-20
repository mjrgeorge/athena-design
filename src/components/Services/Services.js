import React from 'react';
import './Service.css';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    const services = [
        {
            "id": "1",
            "image": "https://i.ibb.co/XbkCZXt/Group1.png",
            "title": "Experience Design",
            "details": "The point of using Lorem Ipsum is that it has a more-orless normal"
        },
        {
            "id": "2",
            "image": "https://i.ibb.co/WBTKV34/Group2.png",
            "title": "Interface Design",
            "details": "The point of using Lorem Ipsum is that it has a more-orless normal"
        },
        {
            "id": "3",
            "image": "https://i.ibb.co/yX2GxRd/Group3.png",
            "title": "Prototyping",
            "details": "The point of using Lorem Ipsum is that it has a more-orless normal"
        },
        {
            "id": "4",
            "image": "https://i.ibb.co/8DGykY2/Group4.png",
            "title": "Illustration",
            "details": "The point of using Lorem Ipsum is that it has a more-orless normal"
        }
    ]
    return (
        <section className="text-center  service_area" id='services'>
            <div className="p-3 mx-auto">
                <h2>What we do</h2>
                <p className="text-muted">Our main focus is to make the User Experience very <br /> simple and easy. Simplicity is our Strength.</p>
            </div>
            <div className="row">
                {
                    services.map(service => <ServiceDetails service={service} key={service.id}></ServiceDetails>)
                }
            </div>
        </section>
    );
};

export default Services;