import React from 'react'
import './PaymentMenthod.css'

const PaymentMenthod = () => {
  return (
    <>
        <div className='payment'>
            <label htmlFor='' className='d-flex align-items-center gap-2'>
                <input type='radio' /> Direct Bank Transfer
            </label>
        </div>

        <div className='payment mt-3'>
            <label htmlFor='' className='d-flex align-items-center gap-2'>
                <input type='radio' /> Cash on Delivery
            </label>
        </div>

        <div className='payment text-end mt-5'>
            <button>
                <a href=''>
                    Reserve Now
                </a>
            </button>
        </div>
    </>
  )
}

export default PaymentMenthod