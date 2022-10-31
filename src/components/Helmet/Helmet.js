import React from 'react'

const Helmet = (props) => {
    document.title = props.title + ' - Panalla Scooter Bali - Sewa Motor Murah Di Bali';
  return <div className='w-100'>{props.children}</div>
};

export default Helmet