import React from 'react';

import logo1 from '../assets/images/client-reviews/logo_section.svg';
import logo2 from '../assets/images/client-reviews/logo_section-1.svg';
import logo3 from '../assets/images/client-reviews/logo_section-2.svg';

import starFilled from '../assets/images/client-reviews/star-filled.svg';
import starEmpty from '../assets/images/client-reviews/star-empty.svg';
import starHalf from '../assets/images/client-reviews/star-half.svg';

import Marquee from "react-fast-marquee";

const ClientReviews = () => {
    const reviews = [
        {
            logo: logo1,
            stars: 4.4,
            text: "I have been using PrimeXBT for more than 2 years and I am really impressed with the clean UI, top notch security and the variety  of assets."
        },
        {
            logo: logo2,
            stars: 4.7,
            text: "PrimeXBT has earned the top spot as my preferred trading platform. It's not only due to their competitive low commissions and user-friendly design, but also because of the extensive variety of trading instruments they offer."
        },
        {
            logo: logo3,
            stars: 5,
            text: "PrimeXBT has earned the top spot as my preferred trading platform. It's not only due to their competitive low commissions and user-friendly design, but also because of the extensive variety of trading instruments they offer.PrimeXBT has earned the top spot as my preferred trading platform. It's not only due to their competitive low commissions and user-friendly design, but also because of the extensive variety of trading instruments they offer."
        },
    ];

    const renderStars = (rating) => {
        const totalStars = 5;
        // Calculate the number of full stars based on the rating
        const fullStars = Math.floor(rating);
        // Check if there is a half star (more than 0.5 means a half star is needed)
        const halfStar = rating % 1 > 0.5 ? 1 : 0;
        // Calculate the number of empty stars
        const emptyStars = totalStars - fullStars - halfStar;

        return (
            <>
                {Array(fullStars).fill().map((_, i) => <img key={`full-${i}`} src={starFilled} alt="Full star" className="star" />)}
                {halfStar === 1 && <img src={starHalf} alt="Half star" className="star half-star" />}
                {Array(emptyStars).fill().map((_, i) => <img key={`empty-${i}`} src={starEmpty} alt="Empty star" className="star" />)}
            </>
        );
    };


    return (
        <section className="client-reviews">
            <div className="wrap-text container">
                <h2>Hear what our <span className='primary-color'>clients</span> have to say</h2>
                <p className="sub-text">We're proud to have helped so many people achieve their financial goals. Here's what some of our clients have to say about us.</p>
            </div>
            <div className="wrap-reviews">
                <Marquee
                    speed={170}
                    pauseOnHover={true}
                >
                    {reviews.map((review, index) => (
                        <div className={`review-${index} review`} key={index}>
                            <div className='wrap-header'>
                                <img src={review.logo} alt="logo" />
                                <div className="stars">
                                    <span>{review.stars.toString().replace('.', ',')}</span>
                                    <div>{renderStars(review.stars)}</div>
                                </div>
                            </div>
                            <p className="review-text">{review.text}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}

export default ClientReviews;
