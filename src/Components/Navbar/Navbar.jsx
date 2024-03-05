import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { useEffect } from 'react';

export default function Navbar() {

    const [sticky, setSticky] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[])


    return (
        <nav className={`container ${sticky? "dark-nav" : ""}`}>
            <img src={logo} alt="" className="logo" />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About Us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className="btn">Contact us</button></li>
            </ul>

        </nav>
    )
}