import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!show) return null;

    return (
        <button
            onClick={scrollTop}
            className="fixed bottom-6 left-6 z-50 
                       bg-linear-to-r from-orange-500 to-pink-500 
                       text-white p-3 rounded-full shadow-lg 
                       hover:scale-110 hover:shadow-xl 
                       transition duration-300"
        >
            <FaArrowUp />
        </button>
    );
}