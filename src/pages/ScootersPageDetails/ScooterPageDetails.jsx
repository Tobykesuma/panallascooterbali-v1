import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Helmet from '../../components/Helmet/Helmet'
import { ScootersData } from '../../data/scootersData'
import { Container, Row, Col } from 'reactstrap'

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

                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}

export default ScooterPageDetails