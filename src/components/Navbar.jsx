import { useState } from "react";

function Navbar() {
    return (
        <nav className = "flex items-center justify-center bg-transparent text-white fixed top-0 left-0 w-full z-50">
            <ul className = "flex w-full justify-between max-w-3xl">
                <li><a href="#about" className = "hover:text-orange-300 transition-colors duration-300">About</a></li>
                <li><a href="#recent Projects" className = "hover:text-orange-300 transition-colors duration-300">Recent Projects</a></li>
                <li><a href="#collaborations" className = "hover:text-orange-300 transition-colors duration-300">Collaborations</a></li>
                <li><a href="#contact" className = "hover:text-orange-300 transition-colors duration-300">Contact</a></li>
            </ul>

            
        </nav>
    )
}

export default Navbar;