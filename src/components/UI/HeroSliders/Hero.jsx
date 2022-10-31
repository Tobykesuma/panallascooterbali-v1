import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import Slider from 'react-slick'




const Hero = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed : 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };

    return (
        <Slider {...settings} className='hero__slider'>
            <div className='slider__item slider__item-01 mt0'>
                <Container>
                    <div className='slider__content'>
                        <h4 className='text-light mb-3'></h4>
                        <h1 className='text-light mb-4'>Booking Now</h1>
                        <button className='btn reserve__btn mt-4'>
                            <Link to='/scooters'>Check Now</Link>
                        </button>
                    </div>
                </Container>
            </div>
        </Slider>
  )
}

export default Hero