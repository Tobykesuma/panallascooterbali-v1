import React from 'react'
import './AboutSection.css'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import imageData from '../../../data/imageData'



const AboutSection = ({ aboutClass }) => {

  return (
    <section className='app__about-section' style={aboutClass === 'aboutPage' ? { marginTop: '0px'} 
    : { marginTop: '280px'}}>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className='about__section-content'>
                        <h4 className='section__subtitle'>About Us</h4>
                        <h2 className='section__title'>Welcome to Scooters Rent Service</h2>
                        <p className='section__description'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, assumenda officia eligendi aut dolor, ducimus consequuntur corporis, maiores ratione illo suscipit hic soluta aspernatur aliquid commodi sit! Itaque, eum reprehenderit?
                        </p>

                        <div className='about__section-item d-flex align-items-center'>
                            <p className='section__description d-flex align-items-center gap-2'>
                                {/* icons here react-icons */}
                            </p>
                            <p className='section__description d-flex align-items-center gap-2'>
                                {/* icons here react-icons */}
                            </p>
                        </div>

                        <div className='about__section-item d-flex align-items-center'>
                            <p className='section__description d-flex align-items-center gap-2'>
                                {/* icons here react-icons */}
                            </p>
                            <p className='section__description d-flex align-items-center gap-2'>
                                {/* icons here react-icons */}
                            </p>
                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className='about__images'>
                        {/* array about images */}
                        <img src={imageData.AboutImageHero} alt='' className='w-100 rounded-5' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AboutSection