import React, {Fragment} from 'react'
import './GoogleMaps.css'
import {ImLocation2} from 'react-icons/im'
import {BsFillTelephoneOutboundFill} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import {IoIosTime} from 'react-icons/io'



const GoogleMaps = () => {
  return (
        <section className='app__googlemaps'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.97099313448456!2d115.17156766871099!3d-8.713572752740026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246c751cbab57%3A0x4ffa79274dcc8de8!2sSuparta%20home%20stay!5e0!3m2!1sid!2sid!4v1668335377000!5m2!1sid!2sid" width="800"
            height="600" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div className='map'>
                <div className='address'>
                    <h3>OUR OFFICE</h3>
                    <div className='address-info'>
                        <ul>
                            <li><a href='https://goo.gl/maps/vzGjfiBPe4BRUwPu5' target='__blank'><ImLocation2 />Jl. Benesari No 01, Kec. Kuta, Badung, Bali, 80361</a></li>
                            <li><a href='https://wa.me/6287862121513?text=Hello%20Panalla%20Scooters%20Bali%20I%20want%20to%20rent%20scooter.%20Please%20give%20your%20scooter%20recomendations.' target='__blank'><BsFillTelephoneOutboundFill />+62 878 6212 1513</a></li>
                            <li className='maps__email'><a href='mailto:panallascooterbali@gmail.com' target='__blank'><TfiEmail />panallascootersbali@gmail.com</a></li>
                            <li><a href='https://goo.gl/maps/vzGjfiBPe4BRUwPu5' target='__blank'><IoIosTime />Mon - Sun : 9:00 AM - 21:00 PM</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default GoogleMaps