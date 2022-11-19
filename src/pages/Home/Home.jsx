import React from 'react'
import Helmet from '../../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import {ScootersData} from '../../data/scootersData';
import ScootersItem from '../../components/UI/ScootersItem/ScootersItem';
import './Home.css'
import GoogleMaps from '../../components/UI/GoogleMaps/GoogleMaps';
import AboutSection from '../../components/UI/AboutSection/AboutSection';
import Testimoni from '../../components/UI/Testimoni/Testimoni';
import AboutPage from '../AboutPage/AboutPage';

const Home = () => {

//  const [noOfElement, setnoOfElement] = useState(4);
//  const slice = data.ScootersItem.slice(0, noOfElement);
  // const [items, setItems] = useState([]);
  // const [visible, setVisible] = useState(3);

  // useEffect(() => {
  //   fetch('https://gist.githubusercontent.com/Tobykesuma/e51d6c6c4a608414c894a8fe1560293a/raw/e0f0c6ee95de18ee90d70293b9a120b9ba0409d5/gistfile1.txt').then((res) => res.json()).then((data) => setItems(data));
  // }, []);
  
  
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

      {/* About Section */}
      <AboutSection id='aboutpage'/>

      {/* Testimoni Section */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-4 text-center'>
              <h6 className='testimoni__subtitle'>Our Clients Says</h6>
              <h2 className='testimoni__title'>Testimonials</h2>
            </Col>
            <Testimoni id='testimoni' />

          </Row>
        </Container>
      </section>
      

            {/*  <section className='app__testimoni'>
      <Container>
        <Row>
          <Col lg='12' className='mb-4 text-center'>
            <h6 className='app__testimoni-subtext'>What Our Clients Says</h6>
            <h2 className='app__testimoni-title'>Testimonials</h2>
          </Col> */}
      <GoogleMaps />

    </Helmet>
  )
}

export default Home