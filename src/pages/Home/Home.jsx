import React from 'react'
import Helmet from '../../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import {ScootersData} from '../../data/scootersData';
import ScootersItem from '../../components/UI/ScootersItem/ScootersItem';
import './Home.css'


const Home = () => {
  
  return (
    <Helmet title='Home'>
      {/* Hero Section */}
      <section className='p-0 hero__slider-section'>
        
      </section>

      {/* Scooters Offer Section */}
      <section className='app__scooters-offer-section ' id='scooters item'>
        <Container>
          <Row>
            <Col lg='12' className='pt-5 text-center mb-5 scooters__offers-section'>
              <h6 className='section__subtitle'>Come with</h6>
              <h2 className='section__title'>Hot Offers</h2>
            </Col>

            {
              ScootersData.slice(0, 12).map((item) => (
                <ScootersItem item={item} key={item.id} />
              ))
            }

          </Row>
        </Container>
      </section>


    </Helmet>
  )
}

export default Home