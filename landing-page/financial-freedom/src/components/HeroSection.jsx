import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles for core and required modules
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import image files
import HeroImage1 from '../assets/images/slider/Hero1.webp';
import HeroImage2 from '../assets/images/slider/Hero2.webp';
import HeroImage3 from '../assets/images/slider/Hero3.webp';
import HeroImage4 from '../assets/images/slider/Hero4.webp';
import HeroImageMobile1 from '../assets/images/slider/Hero1-mobile.webp';
import HeroImageMobile2 from '../assets/images/slider/Hero2-mobile.webp';
import HeroImageMobile3 from '../assets/images/slider/Hero3-mobile.webp';
import HeroImageMobile4 from '../assets/images/slider/Hero4-mobile.webp';
import Logo from '../assets/Logo.svg';
import HeroOverlay from '../assets/images/slider/Overlay1.png';


const HeroSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [rotateDeg, setRotateDeg] = useState(Math.floor(Math.random() * (90 - 70 + 1)) + 70); // Genera un numero casuale tra 70 e 90

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Aggiorna l'angolo di rotazione ogni volta che lo slide cambia
        setRotateDeg(Math.floor(Math.random() * (90 - 70 + 1)) + 70);
    }, [activeSlide]);

    const overlayPositions = [
        { top: '-450px', left: '-960px' },
        { top: '-230px', left: '-870px' },
        { top: '-370px', left: '-810px' },
        { top: '-330px', left: '-870px' },
    ];

    const overlayPositionsMobile = [
        { top: '-801px', left: '208px' },
        { top: '-819px', left: '208px' },
        { top: '-790px', left: '208px' },
        { top: '-801px', left: '208px' },
    ];

    const getOverlayStyle = useCallback(() => {
        const positions = isMobile ? overlayPositionsMobile : overlayPositions;
        const translate = `translate(${positions[activeSlide].left}, ${positions[activeSlide].top})`;
        const scaleRotate = `scale(1) rotate(${rotateDeg}deg)`;

        return {
            transform: isMobile ? `${translate} ${scaleRotate}` : translate
        };
    }, [activeSlide, isMobile]);

    const heroSectionProps = [
        {
            img: isMobile ? HeroImageMobile1 : HeroImage1,
            titolo: `
                <span class="primary-color">
                Financial freedom means</span>
                having more
                time to do what you love`,
            testo: `Whatever financial freedom means to you, you can earn it with
                PrimeXBT! <b>Invest in Crypto and trade 100+ global markets</b> on
                our easy-to-use app and webtrader.`,
            testoBtn: 'Invest Now',
            link: 'https://www.xbprime.com/',
            subText: 'Capital is at risk. '
        },
        {
            img: isMobile ? HeroImageMobile2 : HeroImage2,
            titolo: `
                <span class="primary-color">
                Financial freedom means</span>
                only working when you want to`,
            testo: `Whatever financial freedom means to you, you can earn it with
                PrimeXBT! <b>Invest in Crypto and trade 100+ global markets</b> on
                our easy-to-use app and webtrader.`,
            testoBtn: 'Invest Now',
            link: 'https://www.xbprime.com/',
            subText: 'Capital is at risk. '
        },
        {
            img: isMobile ? HeroImageMobile3 : HeroImage3,
            titolo: `
                <span class="primary-color">
                Financial freedom means</span>
                having more
                time to do what you love`,
            testo: `Whatever financial freedom means to you, you can earn it with
                PrimeXBT! <b>Invest in Crypto and trade 100+ global markets</b> on
                our easy-to-use app and webtrader.`,
            testoBtn: 'Invest Now',
            link: 'https://www.xbprime.com/',
            subText: 'Capital is at risk. '
        },
        {
            img: isMobile ? HeroImageMobile4 : HeroImage4,
            titolo: `
                <span class="primary-color">
                Financial freedom means</span>
                only working when you want to`,
            testo: `Whatever financial freedom means to you, you can earn it with
                PrimeXBT! <b>Invest in Crypto and trade 100+ global markets</b> on
                our easy-to-use app and webtrader.`,
            testoBtn: 'Invest Now',
            link: 'https://www.xbprime.com/',
            subText: 'Capital is at risk. '
        },
    ];

    const SlideContent = React.memo(({ slide }) => (
        <div className="slide-background" style={{ backgroundImage: `url(${slide.img})` }}>
            <div className="slide-content container">
                <div className="header-hero container">
                    <img src={Logo} alt="PrimeXBT Logo" className="logo" />
                    <a href="https://portal.xbprime.com/login" className="btn-secondary">Login</a>
                </div>
                <strong>
                    <h2 dangerouslySetInnerHTML={{ __html: slide.titolo }}></h2>
                </strong>
                <p dangerouslySetInnerHTML={{ __html: slide.testo }}></p>
                <a href={slide.link} className="btn-primary">{slide.testoBtn}</a>
                <small className="subtext">{slide.subText}</small>
            </div>
        </div>
    ));



    return (
        <div className="hero-container">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                spaceBetween={0}
                pagination={{ clickable: true }}
                slidesPerView={1}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 150000,
                    disableOnInteraction: false // Continue autoplay when the swiper is interacted with
                }}
                speed={1000}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            >
                {heroSectionProps.map((slide, index) => (
                    <SwiperSlide key={index} className={`slide-${index}`}>
                        <img src={HeroOverlay} alt="Hero Overlay"
                            className="hero-overlay"
                            style={getOverlayStyle()}

                        />
                        <SlideContent slide={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSection;
