import React, { useState } from 'react'
import './WhatsAppBackTop.css'
import {IoLogoWhatsapp} from 'react-icons/io'


function WhatsAppBackTop () {
    const [visibleWA, setVisibleWA] = useState(false);
    window.addEventListener('scroll', () => {
        window.pageYOffset > 100 ? setVisibleWA(true) : setVisibleWA(false);
    });
  return (
    <div className='app__whatsapptop'>
        <a href='https://wa.me/6287862121513?text=Hello%20Panalla%20Scooters%20Bali%20I%20want%20to%20rent%20scooter.%20Please%20give%20your%20scooter%20recomendations.' target='__blank' className={`${visibleWA ? 'scroll-block' : 'scroll-none'}`}>
            <IoLogoWhatsapp />
        </a>
    </div>
  )
}

export default WhatsAppBackTop