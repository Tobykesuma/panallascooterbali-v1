import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  './Header.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import imageData from '../../data/imageData'


const Header = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'app__header app__header-bg' : 'app__header'} id='navbar'>
        <nav className='app__navbar'>
            {/* Logo Navbar */}
            <Link to='/' className='app__navbar-logo'>
                <img src={imageData.mainlogo} alt='' />
            </Link>
            {/* Hamburger Navbar */}
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{color: '#fff'}} />)
                    : (<FaBars size={30} style={{color: '#fff'}} />)
                }
            </div>
            {/* Menu Navbar */}
            <ul className={click ? 'nav-menu active' :  'nav-menu'}>
                <li className='nav-items'>
                    <Link to='/' onClick={closeMenu}>Home</Link>
                </li>
                <li className='nav-items'>
                    <Link to='/about-us' onClick={closeMenu}>About</Link>
                </li>
                <li className='nav-items'>
                    <Link to='/scooters' onClick={closeMenu}>Rent Scooters</Link>
                </li>
                <li className='nav-items'>
                    <Link to='/services' onClick={closeMenu}>Services</Link>
                </li>
                <li className='nav-items'>
                    <Link to='/gallery' onClick={closeMenu}>Gallery</Link>
                </li>
                <li className='nav-items'>
                    <Link to='/testimonials' onClick={closeMenu}>Testimonials</Link>
                </li>

                {/* Button Contact Apis WA */}
                <button  className='btn-book'>
                    <a href='https://wa.me/6287862121513?text=Hello%20Panalla%20Scooters%20Bali%20I%20want%20to%20rent%20scooter.%20Please%20give%20your%20scooter%20recomendations.'>BOOK NOW</a>
                </button>
            </ul>
        </nav>
    </div>
  )
}

export default Header