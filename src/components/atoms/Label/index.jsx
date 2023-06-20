import React from 'react'

export default function Label(props) {
    const {htmlFor,children} = props;
  return (
    <label htmlFor={htmlFor} className='text-lg text-left mb-2 tracking-wide text-grey-darkest text-black font-sans font-normal'>
        {children}
    </label>
  )
}
