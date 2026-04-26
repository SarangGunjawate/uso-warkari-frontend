import { useState } from "react";
import Logo from "../../assets/Images/logo.jpg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // This matches your original NavLink logic
    const navClass = ({ isActive }: { isActive: boolean }) =>
        `relative group text-lg font-medium transition-colors duration-300 ${isActive ? "text-orange-600" : "text-gray-800 hover:text-orange-500"
        }`;

    // This matches your original underline logic but adds a small glow for the "attractive" look
    const underlineClass = ({ isActive }: { isActive: boolean }) =>
        `absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300 ${isActive ? "w-full shadow-[0_0_8px_rgba(249,115,22,0.6)]" : "w-0 group-hover:w-full"
        }`;

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            {/* The "Attractive" Background: Glassmorphism with a subtle warm tint */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <img src={Logo} alt="logo" className="h-12 w-auto hover:scale-105 transition-transform duration-300" />

                {/* Desktop Menu - Using your NavLink structure */}
                <div className="hidden md:flex items-center gap-10">
                    <NavLink to="/" className={navClass}>
                        {({ isActive }) => (
                            <>
                                घर
                                <span className={underlineClass({ isActive })}></span>
                            </>
                        )}
                    </NavLink>
                    <NavLink to="/pustak-prakashan" className={navClass}>
                        {({ isActive }) => (
                            <>
                                पुस्तक प्रकाशन
                                <span className={underlineClass({ isActive })}></span>
                            </>
                        )}
                    </NavLink>
                </div>

                {/* Hamburger (Your logic, updated colors) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5 z-10"
                >
                    <span className={`block w-6 h-0.5 bg-orange-900 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-orange-900 transition-all ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-orange-900 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>

            {/* Mobile Menu (Your logic, improved styling) */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-white/95 backdrop-blur-lg shadow-lg px-6 py-4 space-y-3 border-t border-orange-50">
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isActive
                                ? "bg-orange-50 text-orange-600"
                                : "hover:bg-orange-50 hover:text-orange-500"
                            }`
                        }
                    >
                        मुखपृष्ठ
                    </NavLink>

                    <NavLink
                        to="/pustak-prakashan"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isActive
                                ? "bg-orange-50 text-orange-600"
                                : "hover:bg-orange-50 hover:text-orange-500"
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