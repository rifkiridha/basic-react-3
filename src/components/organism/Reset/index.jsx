import React from 'react'
import InputForm from '../../molecules/InputForm';
import Button from '../../atoms/Button';

export default function Reset() {
    return (
        <div className='flex-col'>
                <InputForm label="Please Enter Your Password" name="email" type="text" placeholder="Your Email or Username" />
            <Button>Request Password Reset</Button>
            </div>     
    )
}

