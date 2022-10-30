import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Helmet from '../../components/Helmet/Helmet'
import { ScootersData } from '../../data/scootersData'
import { Container, Row, Col } from 'reactstrap'
import './ScooterPageDetails.css'
import {BsStarFill, BsStarHalf, BsStar, BsBuilding} from 'react-icons/bs'


const ScooterPageDetails = () => {
    const { slug } = useParams();
    const singleScooterItem = ScootersData.find((item) => item.scooterName === slug);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [singleScooterItem]);

  return (
    <Helmet title={singleScooterItem.scooterName}>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <img src={singleScooterItem.image} alt='' className='w-100' />
                    </Col>

                    <Col lg='6'>
                        <div className='app__scooters-info'>
                            <h2 className='section__title'>{singleScooterItem.scooterName}</h2>
                            <div className='d-flex align-items-center gap-5 mb-4 mt-3'>
                                <h6 className='rent__price fw-bold fs-4'>
                                    IDR{singleScooterItem.dayPrice}K Rupiah / Day
                                </h6>
                                <h6 className='rent__price fw-bold fs-4'>
                                    IDR{singleScooterItem.weekPrice}K Rupiah / Week
                                </h6>

                                <span className='d-flex align-items-center gap-2'>
                                    <span style={{ color: '#000'}}>
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarHalf />
                                    </span>
                                    ({singleScooterItem.rating} ratings)
                                </span>
                            </div>

                            <p className='section__description'>
                                {singleScooterItem.description}
                            </p>

                            <div className='d-flex align-items-center mt-3' style={{ columnGap: '4rem'}}>
                                <span className='d-flex align-items-center gap-1 section__description'>
                                    <BsBuilding style={{ color: '#000' }}>{''}{singleScooterItem.companyScooterName}</BsBuilding>
                                </span>
                            </div>
                        </div>
                    </Col>

                    <Col lg='7' className='mt-5'>
                        <div className='booking-info mt-5'>
                            <h5 className='mb-4 fw-bold'>Booking Information</h5>
                            {/* Booking pages file from directory UI */}

                        </div>
                    </Col>

                    <Col lg='5' className='mt-5'>
                        <div className='payment-info mt-5'>
                            <h5 className='mb-4 fw-bold'>Payment Information</h5>
                            {/* Payment pages file from directory UI  */}

                        </div> 
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}

export default ScooterPageDetails