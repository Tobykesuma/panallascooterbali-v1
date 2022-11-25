import React from 'react'
import './RentalRequirements.css'
import { 
    Container,
    Row,
    Col
} from 'reactstrap'
import Helmet from '../../Helmet/Helmet'
import CommonSection from '../CommonSection/CommonSection'



const RentalRequirements = () => {
  return (
    <Helmet title='Rental Requirements'>
        <CommonSection title='Rental Requirements'>
            <section className='rental__requirements-section'>
                
            </section>
        </CommonSection>
    </Helmet>
  )
}

export default RentalRequirements
