import React from 'react'
import Slider from 'react-slick'
import { Container, Row, Col } from 'reactstrap'
import { TestimonialsData } from '../../../data/testimonials'
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
    <section className='app__testimoni'>
      <Container>
        <Row>
          <Col lg='12' className='mb-4 text-center'>
            <h6 className='app__testimoni-subtext'>What Our Clients Says</h6>
            <h2 className='app__testimoni-title'>Testimonials</h2>
          </Col>

          <Slider {...settings}>
            {/* <div className='testimoni py-4 px-3'>
                        <p className='app__testimoni-desc'>
                            {TestimonialsData.comment}
                        </p>
                        <div className='mt-3 d-flex align-items-center gap-4'>
                            <img src={TestimonialsData.image} alt='' className='w-25 h-25 rounded-2' />
                        </div>

                        <div>
                            <h6 className='mb-0 mt-3'>{TestimonialsData.name}</h6>
                            <p className='app__testimoni-desc'>{TestimonialsData.customer}</p>
                            <span className='icons__testimoni'>
                                {TestimonialsData.icon}
                            </span>
                        </div>
                    </div> */}

            <div className='testimoni py-4 px-3'>
              <p className='app__testimoni-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                cum minus quos in facere voluptas consequuntur dolorum nesciunt
                ducimus provident. Debitis sint, ea natus veniam perspiciatis
                culpa magni molestiae quasi?
              </p>
              <div className='mt-3 d-flex align-items-center gap-4'>
                <img src={ava01} alt='' className='w-25 h-25 rounded-2' />

                <div>
                  <h6 className='mb-0 mt-3'>Tobi Kesuma</h6>
                  <p className='app__testimoni-desc'>Customer</p>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                </div>
              </div>
            </div>

            <div className='testimonia py-4 px-3'>
              <p className='app__testimonia-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                cum minus quos in facere voluptas consequuntur dolorum nesciunt
                ducimus provident. Debitis sint, ea natus veniam perspiciatis
                culpa magni molestiae quasi?
              </p>
              <div className='mt-3 d-flex align-items-center gap-4'>
                <img src={ava02} alt='' className='w-25 h-25 rounded-2' />

                <div>
                  <h6 className='mb-0 mt-3'>Tobi Kesuma</h6>
                  <p className='app__testimonia-desc'>Customer</p>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                </div>
              </div>
            </div>

            <div className='testimonia py-4 px-3'>
              <p className='app__testimonia-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                cum minus quos in facere voluptas consequuntur dolorum nesciunt
                ducimus provident. Debitis sint, ea natus veniam perspiciatis
                culpa magni molestiae quasi?
              </p>
              <div className='mt-3 d-flex align-items-center gap-4'>
                <img src={ava03} alt='' className='w-25 h-25 rounded-2' />

                <div>
                  <h6 className='mb-0 mt-3'>Tobi Kesuma</h6>
                  <p className='app__testimoni-desc'>Customer</p>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                </div>
              </div>
            </div>

            {/* <div className='testimonia py-4 px-3'>
              <p className='app__testimonia-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                cum minus quos in facere voluptas consequuntur dolorum nesciunt
                ducimus provident. Debitis sint, ea natus veniam perspiciatis
                culpa magni molestiae quasi?
              </p>
              <div className='mt-3 d-flex align-items-center gap-4'>
                <img src={ava03} alt='' className='w-25 h-25 rounded-2' />

                <div>
                  <h6 className='mb-0 mt-3'>Tobi Kesuma</h6>
                  <p className='app__testimoni-desc'>Customer</p>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                  <i class='ri-star-fill'></i>
                </div>
              </div>
            </div> */}

            


          </Slider>
        </Row>
      </Container>
    </section>
  );
}

export default Testimoni