import React from 'react'
import { 
    Routes,
    Route,
} from 'react-router-dom'
import AboutPage from '../pages/AboutPage/AboutPage'
import Home from '../pages/Home/Home'
import ScooterPage from '../pages/ScootersPage/ScooterPage'
import ServicesPage from '../pages/ServicesPage/ServicesPage'
import GalleryPage from '../pages/GalleryPage/GalleryPage'
import TestimonialsPage from '../pages/TestimonialsPage/TestimonialsPage'
import NotFoundPage from '../pages/NotFound/NotFound' 
import ScooterPageDetails from '../pages/ScootersPageDetails/ScooterPageDetails'
import RentalRequirements from '../components/UI/RentalRequirements/RentalRequirements'


const routers = () => {


  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/scooters' element={<ScooterPage />} />
          <Route path='/scooters/:slug' element={<ScooterPageDetails />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/testimonials' element={<TestimonialsPage />} />
          <Route path='/rental-requirements' element={<RentalRequirements />} />
          <Route path='*' element={<NotFoundPage />} />

      </Routes>
  )
}

export default routers