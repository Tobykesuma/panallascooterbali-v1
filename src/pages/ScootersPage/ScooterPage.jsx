import React from 'react'
import CommonSection from '../../components/UI/CommonSection/CommonSection';
import Helmet from '../../components/Helmet/Helmet';
import {ScootersData} from '../../data/scootersData';
import { 
  Container,
  Row,
  Col 
} from 'reactstrap';
import {BsSortUp} from 'react-icons/bs';
import ScootersItem from '../../components/UI/ScootersItem/ScootersItem'
import './ScooterPage.css'


const ScooterPage = () => {
  


  return (
    <Helmet title='Scooters'>
      <CommonSection title='Scooters Listing' />
      
      <section className='app__scooters-listing' id='scooters__listing'>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='d-flex align-items-center gap-3 mb-5'>
                <span className='d-flex align-items-center gap-2'>
                  <BsSortUp /> Sort By
                </span>

                <select>
                  <option value='selected'>Select</option>
                  <option value='low'>Low to High</option>
                  <option value='high'>High to Low</option>
                </select>
              </div>
            </Col>
            {
              ScootersData.map((item) => (
                <ScootersItem item={item} key={item.id} />
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ScooterPage