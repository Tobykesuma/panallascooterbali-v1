import React from 'react'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './ScootersItem.css'
import {BsBuilding} from 'react-icons/bs'
import {FaUserCheck} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'


const ScootersItem = (props) => {

    const { image, dayPrice, weekPrice, scooterName, whatsapp, companyScooterName, type, seatType, } = props.item;


    return (
        <Col lg='4' md='4' sm='6' className='mb-5'>
            <div className='app__scooter-items'>
                <div className='scooter__image'>
                    <img src={image} alt='' className='w-100' />
                </div>

                <div className='app__scooter-item-content mt-4'>
                    <h4 className='section__title text-center'>{scooterName}</h4>
                    <div className='app__border-radius' />
                    <h6 className='rent__price text-start mt-'>
                        IDR {dayPrice}K Rupiah <span>/ Day</span>
                    </h6>
                    <h6 className='rent__price text-start mt-'>
                        IDR {weekPrice}K Rupiah <span>/ Week</span>
                    </h6>

                    <div className='scooters__item-info d-flex align-items-center justify-content-between mt-3 mb-4'>
                        <span className='d-flex align-items-center gap-1'>
                            <BsBuilding /> {companyScooterName}
                        </span>
                        <span className='d-flex align-items-center gap-1'>
                            <FiSettings /> {type}
                        </span>
                        <span className='d-flex align-items-center gap-1'>
                            <FaUserCheck /> {seatType}
                        </span>
                    </div>

                    <button className='w-50 scooters__item-btn scooter__btn-rent'>
                        <a href={whatsapp}>Rent</a>
                    </button>

                    <button className='w-50 scooters__item-btn scooter__btn-details'>
                        <Link to={`/scooters/${scooterName}`}>Details</Link>
                    </button>
                </div>
                
            </div>
        </Col>
  )
}

export default ScootersItem