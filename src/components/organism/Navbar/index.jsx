import React from 'react'
import Header from '../Header'
import Footer from '../Footer'


export default function Navbar ({ type }) {
    if (type === "header") {
        return (
            <Header/>
        )
    } else {
        return (
            <Footer/>
        )
    }
}