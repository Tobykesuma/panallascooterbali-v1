import React from 'react'
import CommonSection from '../../components/UI/CommonSection/CommonSection';
import Helmet from '../../components/Helmet/Helmet';
import '../AboutPage/AboutPage.css';

const AboutPage = () => {
  return (
    <Helmet title='About Us'>
        <CommonSection title='About Us' />
    </Helmet>
  )
}

export default AboutPage