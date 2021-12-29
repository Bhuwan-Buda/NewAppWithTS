import React from 'react'
import "./style.css";

const Footer = () => {
    console.log("Footer loaded");
    return (
        <div className='footer bg-black text-white text-center'>
            <p className='para'>All Rights Reserved. &copy; New App</p>
        </div>
    )
}

export default Footer