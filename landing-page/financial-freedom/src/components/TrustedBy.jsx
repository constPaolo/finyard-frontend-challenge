import React from 'react';

const TrustedBy = ({ count, description }) => {
    return (
        <div className="trusted-by">
        <h2>Trusted by {count}</h2>
        <p>{description}</p>
        </div>
    );
    }

export default TrustedBy;