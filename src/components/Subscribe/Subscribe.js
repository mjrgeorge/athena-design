import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="m-5 text-center">
            <h2>Get your design right, right now</h2>
            <p className="text-muted my-3">Be the first know our latest offers and updates!</p>
            <div className="d-flex justify-content-center pt-4">
                <div style={{ minWidth: '320px' }} class="input-group w-50">
                    <input type="text" class="form-control" placeholder="Enter your email address" />
                    <div class="input-group-append">
                        <button class="btn btn-info" type="button">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;