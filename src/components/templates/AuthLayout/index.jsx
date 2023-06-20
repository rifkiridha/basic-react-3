import React from 'react'
import { Link } from 'react-router-dom';
import AppLogin from '../../../pages/login';
import Login from '../../organism/Login';
import Register from '../../organism/Register';
import Reset from '../../organism/Reset';


export default function AuthLayout(props) {
    const { title, desc, type } = props;
    return (
        <>
            <div className='flex-col w-4/5'>
                <h1 className="text-3xl text-gray-800">{title}</h1>
                <p className="text-xs">{desc}</p>
                <LogRegist type={type} />
                <Navigasi type={type} />
            </div>


        </>
    )
}


const Navigasi = ({ type }) => {
    if (type === "register") {
        return (
            <p className="text-sm mt-5 text-center text-gray-800">
                By signing up for Codecademy, you agree to Codecademy's{" "}
                <Link to="/terms" className="text-gray-350 font-bold">
                Terms of Service
                </Link> & <Link to="/policy" className="text-gray-350 font-bold">
                Privacy Policy
                </Link>.
            </p>
        )
    }
}

const LogRegist = ({ type }) => {
    if (type === "login") {
        return (
            <Login />
        )
    } else if (type === "register") {
        return (
            <Register />
        )
    }  else if (type === "reset") {
        return (
            <Reset />
        )
    }
}
