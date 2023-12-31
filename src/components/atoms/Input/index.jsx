import React from 'react'

export default function Input(props) {
    const {type,placeholder,name} = props;
  return (
    <input 
    type={type}
    className="w-full border py-2 px-3 text-grey-darkest md:mr-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
    placeholder={placeholder}
    name={name}
    id={name}
    />
  )
}
