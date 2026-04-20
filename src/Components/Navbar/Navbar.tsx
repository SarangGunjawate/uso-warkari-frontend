import { useState } from "react";
import Logo from "../../assets/Images/logo.jpg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <img src={Logo} alt="logo" className="h-12 w-auto" />

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
                    <a className="relative group cursor-pointer">
                        घर
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a className="relative group cursor-pointer">
                        पुस्तक प्रकाशन
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5"
                >
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-white shadow px-6 py-4 space-y-3">
                    <a className="block px-4 py-2 rounded-lg transition-all duration-300 hover:bg-orange-100 hover:text-orange-500 active:scale-95">
                        घर
                    </a>

                    <a className="block px-4 py-2 rounded-lg transition-all duration-300 hover:bg-orange-100 hover:text-orange-500 active:scale-95">
                        पुस्तक प्रकाशन
                    </a>
                </div>
            </div>
        </nav>
    );
}