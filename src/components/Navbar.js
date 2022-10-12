import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
import avatar from '../images/avatar.png'

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    handleShow(false);
                } else handleShow(true);
            });
        };

    }, []);

    return (
        <div className={`navbar ${show && "navbar-black"}`}>
            <img className='logo' src={logo} alt='Netflix Logo'></img>

            <img className='avatar' src={avatar} alt='Netflix Avatar'></img>
        </div>
    )
}

export default Navbar