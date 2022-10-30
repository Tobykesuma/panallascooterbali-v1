import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Router from '../../routers/routers'
import BacktoTop from '../UI/BacktoTop/BacktoTop'
import Footer from '../Footer/Footer'



function Layout () {
  return (
    <Fragment>
        <Header />
        <div>
            <BacktoTop />
            <Router />
        </div>
        <Footer />
    </Fragment>
  )
}

export default Layout