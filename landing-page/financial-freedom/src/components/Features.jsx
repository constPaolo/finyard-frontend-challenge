import { React } from 'react';

import feature2 from '../assets/images/features/features-1.svg';
import feature3 from '../assets/images/features/features-2.svg';
import feature4 from '../assets/images/features/features-3.svg';
import feature5 from '../assets/images/features/features-4.svg';
import feature6 from '../assets/images/features/features-5.svg';
import feature1 from '../assets/images/features/features-6.svg';

const Features = () => {

    const features = [
        {
            image: feature1,
            title: 'Zero commission',
            text: 'Keep more of your profits,<br> trade commission-free.'
        },
        {
            image: feature2,
            title: 'Low costs & fees',
            text: 'Make your money go further,<br> with spreads from 0.1 pips.'
        },
        {
            image: feature3,
            title: 'Flexible leverage',
            text: 'Spend less and trade more,<br> with leverage up to 1000:1.'
        },
        {
            image: feature4,
            title: 'Advanced security',
            text: 'We protect your funds with the<br> latest security protocols.'
        },
        {
            image: feature5,
            title: 'Award-winning platforms',
            text: 'When you trade with us, you get<br> the best in trading tech.'
        },
        {
            image: feature6,
            title: 'Real 24/7 support',
            text: 'Day or night, you’ll be able to<br> get help from real humans.'
        }
    ];

    return (
        <section className="container">
            <div className="features">
                {features.map((feature, index) => (
                    <div className="feature" key={index}>
                        <img src={feature.image} alt={feature.title} />
                        <h3>{feature.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: feature.text }}></p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;