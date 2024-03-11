import React from 'react';

import background from '../assets/images/get-started/background.jpg';

const GetStarted = () => {
    return (
        <div className="get-started" style={{ backgroundImage: `url(${background})` }}>
            <div className="container">
                <h2>Get started <span className="primary-color">in minutes</span></h2>
                <p>Our quick and easy sign-up process is one of the things our clients love 
about us. It only takes a couple of minutes to start trading.</p>
                <div className="wrap-btn">
                    <a href="https://www.xbprime.com/" className="btn-primary">Get Started</a>
                    <small>Capital is at risk.</small>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;