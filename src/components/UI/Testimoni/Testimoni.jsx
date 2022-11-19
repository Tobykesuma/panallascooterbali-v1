import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../../assets/2022/testimonials/client1.jpeg';
import ava02 from '../../../assets/2022/testimonials/client2.jpeg';
import ava03 from '../../../assets/2022/testimonials/client3.jpeg';
import ava04 from '../../../assets/2022/testimonials/client4.jpeg';
import ava05 from '../../../assets/2022/testimonials/client5.jpeg';
import './Testimoni.css';

const Testimoni = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3500,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive : [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoints: 576,
                settings : {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ], 
    };

  return (
    <>
    </>
        
  )
}

export default Testimoni