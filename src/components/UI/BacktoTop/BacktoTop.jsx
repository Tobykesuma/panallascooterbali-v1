import React, { useState } from 'react'
import { FaChevronCircleUp } from 'react-icons/fa';
import './BacktoTop.css';

function BacktoTop () {
    const [visible, setVisible] = useState(false);
    window.addEventListener('scroll', () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });
  return (
    <div className='app__scrolltop'>
        <a href='#' className={`${visible ? 'scroll-block' : 'scroll-none'}`}>
            <FaChevronCircleUp />
        </a>
    </div>
  )
}

export default BacktoTop