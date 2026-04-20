import { useState } from "react";
import Logo from "../../assets/Images/logo.jpg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navClass = ({ isActive }: { isActive: boolean }) =>
        `relative group ${isActive ? "text-orange-500" : "text-gray-800"}`;

    const underlineClass = ({ isActive }: { isActive: boolean }) =>
        `absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
        }`;

    return (
        <nav className="fixed top-0 left-0 w-full bg-linear-to-r from-orange-200 via-pink-100 to-yellow-100 backdrop-blur-md border-b border-white/30 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <img src={Logo} alt="logo" className="h-12 w-auto" />

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-medium">
                    <NavLink to="/" className={navClass}>
                        {({ isActive }) => (
                            <>
                                घर
                                <span className={underlineClass({ isActive })}></span>
                            </>
                        )}
                    </NavLink>
                    <NavLink to="/granthved" className={navClass}>
                        {({ isActive }) => (
                            <>
                                पुस्तक प्रकाशन
                                <span className={underlineClass({ isActive })}></span>
                            </>
                        )}
                    </NavLink>
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5"
                >
                    <span className={`block w-6 h-0.5 bg-black ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-black ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-black ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-white shadow px-6 py-4 space-y-3">

                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block px-4 py-2 rounded-lg transition-all duration-300 ${isActive
                                ? "bg-orange-100 text-orange-500"
                                : "hover:bg-orange-100 hover:text-orange-500"
                            }`
                        }
                    >
                        घर
                    </NavLink>

                    <NavLink
                        to="/granthved"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block px-4 py-2 rounded-lg transition-all duration-300 ${isActive
                                ? "bg-orange-100 text-orange-500"
                                : "hover:bg-orange-100 hover:text-orange-500"
                            }`
                        }
                    >
                        पुस्तक प्रकाशन
                    </NavLink>

                </div>
            </div>
        </nav>
    );
}