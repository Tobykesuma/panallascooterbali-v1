import React from 'react'
import './BookingForm.css'
import { Form, FormGroup } from 'reactstrap'

const BookingForm = () => {
    const submitHandler = (event) => {
        event.preventDefault();
    };
    return (
        <Form onSubmit={submitHandler}>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type='text' placeholder='First Name' />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type='text' placeholder='Last Name' />
            </FormGroup>

            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type='email' placeholder='Your Email' />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type='number' placeholder='Phone Number' />
            </FormGroup>
        </Form>
  )
}

export default BookingForm