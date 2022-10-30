import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Router from '../../routers/routers'

const Layout = () => {
  return (
    <Fragment>
        <Header />
        <div>
            <Router />
        </div>
        
    </Fragment>
  )
}

export default Layout