import React from 'react'
import './Footer.css'
import imageData from '../../data/imageData'
import { Link } from 'react-router-dom'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className='app__footer-top'>
        <div className='footer-row'>

          <div className='footer-column'>
            <div className='footer-column-content'>
              {/* <Link to=''>
              <img src={imageData.mainlogo} alt='' />
              </Link>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum error quasi, fugit, incidunt blanditiis quae autem delectus ducimus commodi quis quaerat labore ratione facilis consectetur nemo voluptas quisquam debitis dolorum!
              </p> */}
            </div>
          </div>

        </div>  
      </div> 
    </footer>
  )
}

export default Footer