import React from 'react'
import './Footer.css'
import imageData from '../../data/imageData'
import { Link } from 'react-router-dom'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import {MdCopyright} from 'react-icons/md'
import {ImLocation2} from 'react-icons/im'
import {BsFillTelephoneOutboundFill} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import {IoIosTime} from 'react-icons/io'


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const quickLinksFooter = [
    {
      path: '/',
      display: 'Home',
    },
    {
      path: '/about-us',
      display: 'About',
    },
    {
      path: '/services',
      display: 'Services',
    },
    {
      path: '/testimonials',
      display: 'Testimonials',
    },
  ];

  const quickLinksFooter2 = [
    {
      path: '/https://wa.me/6287862121513?text=Hello%20Panalla%20Scooters%20Bali%20I%20want%20to%20rent%20scooter.%20Please%20give%20your%20scooter%20recomendations.',
      display: 'Contact us',
    },
    {
      path: '/rental-requirements',
      display: 'Rental Requirements',
    },
    {
      path: '/scooters',
      display: 'Rental Scooters',
    },
    
  ]

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' md='4' sm='12'>
            <div className='app__footer-logo'>
              <Link to='/' className='d-flex align-items-center gap-2'>
                <img src={imageData.mainlogo} alt='' />
              </Link>
            </div>
            <p className='app__footer-desc'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, iusto non, consectetur incidunt necessitatibus eum obcaecati cumque minima accusamus illo sed, deserunt est. Sequi ratione enim in quo eius molestiae.
            </p>
          </Col>

          <Col lg='2' md='4' sm='6'>
            <div className='mb-4 pt-5'>
              <h5 className='app__footer-title'>Quick Links</h5>
                <ListGroup>
                  {
                    quickLinksFooter.map((item, index) =>  (
                      <ListGroupItem key={index} className='p-0  mt-4  quick__links'>
                        <Link to={item.path}>{item.display}</Link>
                      </ListGroupItem>
                    ))
                  }
                </ListGroup>
            </div>
          </Col>
          
          <Col lg='2' md='4' sm='5'>
            <div className='mb-4 pt-5'>
              <h5 className='app__footer-title'>Rent Scooters</h5>
              <ListGroup>
                {
                  quickLinksFooter2.map((item, index) => (
                    <ListGroupItem key={index} className='p-0 mt-4 quick__links'>
                      <a href={item.path}>{item.display}</a>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </div>
          </Col>

          <Col lg='4' md='4' sm='6'>
            <div className='mb-4 pt-5'>
              <h5 className='app__footer-title'>Head Office</h5>
              <p className='app__footer-info'>
                <a href='https://goo.gl/maps/vzGjfiBPe4BRUwPu5' target='__blank'>
                  {/* React Icons */}<ImLocation2 />
                  Jl. Benesari No.01 Kuta, Badung - Bali
                </a>
              </p>
              <p className='app__footer-info'>
                <a href='https://wa.me/6287862121513?text=Hello%20Panalla%20Scooters%20Bali%20I%20want%20to%20rent%20scooter.%20Please%20give%20your%20scooter%20recomendations.' target='__blank'>
                  {/* React Icons */}<BsFillTelephoneOutboundFill />
                  +62 878 6212 1513
                </a>
              </p>

              <p className='app__footer-info'>
                <a href='mailto:panallascooterbali@gmail.com' target='__blank'>
                  {/* React Icons */}<TfiEmail />
                  panallascootersbali@gmail.com
                </a>
              </p>

              <p className='app__footer-info'>
                <a href='https://goo.gl/maps/vzGjfiBPe4BRUwPu5' target='__blank'>
                  {/* React Icons */}<IoIosTime />
                  09:00 AM - 21:00 PM
                </a>
              </p>

            </div>
          </Col>

          <div className='footer__border-top'>
          <Col lg='12' md='4' sm='12'>
            <div className='app__footer-bottom align-items-center justify-content-between'>
              <p className='app__footer-desc-btm align-items-center gap-1 justify-content-between'>
                <MdCopyright />PANALLA SCOOTERS RENTAL BALI {year} 
              </p>

              <p className='app__footer-desc-btm  align-items-center gap-1'>
                DESIGN AND DEVELOPED BY <a href='https://www.instagram.com/itstobikesuma/' target='__blank' >TOBI KESUMA</a>
              </p>
            </div>
          </Col>
          </div>

        </Row>
        </Container>
    </footer>
  )
}

export default Footer