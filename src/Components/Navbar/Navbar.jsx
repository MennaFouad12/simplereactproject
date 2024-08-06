import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="ournav bg-slate-700 text-white">
            <div className="container mx-auto md:px-24 py-5">
                <div className="flex flex-col md:flex-row md:items-center">
                    {/* Header and Toggle Button Wrapper */}
                    <div className="flex justify-between items-center w-full mb-4 md:mb-0">
                        {/* Title */}
                        <h1 className="font-extrabold text-2xl me-6">START FRAMEWORK</h1>

                        {/* Toggle Button for Mobile Menu */}
                        <button 
                            onClick={toggleMenu} 
                            className="md:hidden text-2xl focus:outline-none"
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <ul className={`flex flex-col md:flex-row md:items-center md:gap-8 font-medium ${isOpen ? 'block' : 'hidden'} md:flex`}>
                        <li className="mb-2 md:mb-0"><NavLink to={'/'}>Home</NavLink></li>
                        <li className="mb-2 md:mb-0"><NavLink to={'/about'}>About</NavLink></li>
                        <li className="mb-2 md:mb-0"><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
                        <li className="mb-2 md:mb-0"><NavLink to={'/contact'}>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
