import React from 'react'
import CommonSection from '../../components/UI/CommonSection/CommonSection';
import Helmet from '../../components/Helmet/Helmet';
import '../AboutPage/AboutPage.css';
import { Container, Row, Col } from 'reactstrap';
import imageData from '../../data/imageData';
import AboutSection from '../../components/UI/AboutSection/AboutSection';


const AboutPage = () => {
  return (
    <Helmet title='About Us'>
        <CommonSection title='About Us' />
    <AboutSection aboutClass='aboutPage' />
        <section className='about__page-section'>
          <Container>
            <Row>
              <Col lg='6' md='6' sm='12'>
                <div className='about__page-img'>
                  <img src={imageData.AboutBg} alt='' className='w-100 rounded-5' />
                </div>
              </Col>

              <Col lg='6' md='6' sm='12'>
                <div className='about__page-content'>
                  <h2 className='section__title'>
                    We Are Committed To Provide Safe Ride Solutions
                  </h2>

                  <p className='section__description'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis adipisci velit omnis ducimus temporibus eveniet deleniti molestias eaque atque, dicta, iste minima nostrum! Numquam tempore expedita, architecto nemo fugit libero?
                  </p>

                  <p className='section__description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium commodi exercitationem recusandae officiis dolores, excepturi ad obcaecati enim assumenda maiores, rem ab, praesentium consequuntur repellat explicabo iusto laborum numquam!
                  </p>

                  <div className='d-flex align-items-center gap-3 mt-4'>
                    <span className='fs-4'>
                      {/* React Icons Phones */}
                    </span>

                    <div>
                      <h6 className='section__subtitle'>
                        Need Any Help ?
                      </h6>
                      <a href=''>
                        <h4>081338814444</h4>
                      </a>
                    </div>

                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default AboutPage