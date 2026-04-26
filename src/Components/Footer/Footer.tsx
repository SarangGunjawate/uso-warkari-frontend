import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";

function Footer() {
    const phone = "919881186171";

    const message = `नमस्कार, 
मला "माऊलींच्या गोष्टी" हे पुस्तक प्री-बुक करायचे आहे.  
कृपया किंमत, पेमेंट पद्धत आणि डिलिव्हरी माहिती शेअर करा.  
धन्यवाद!`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    return (
        <div>
            <footer className="relative bg-black text-white overflow-hidden">

                {/* Glow */}
                <div className="absolute inset-0 bg-linear-to-r from-purple-900/30 via-pink-900/20 to-orange-900/30 blur-3xl opacity-60"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">

                    <h2
                        data-aos="zoom-in"
                        className="text-2xl md:text-3xl font-bold mb-4"
                    >
                        युएसओ वारकरी
                    </h2>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-gray-400 mb-8"
                    >
                        आम्हाला सोशल मीडियावर फॉलो करा
                    </p>

                    <div className="flex justify-center gap-8 mb-10">

                        <a target="_blank" href="https://www.facebook.com/share/1CkddJWSgc/?mibextid=wwXIfr" data-aos="zoom-in" data-aos-delay="300" className="cursor-pointer p-4 rounded-full bg-white/10 hover:bg-blue-600 transition">
                            <FaFacebookF />
                        </a>

                        <a target="_blank" href="https://www.instagram.com/usowarkari/" data-aos="zoom-in" data-aos-delay="400" className="cursor-pointer p-4 rounded-full bg-white/10 hover:bg-pink-500 transition">
                            <FaInstagram />
                        </a>

                        <a target="_blank" href="https://www.youtube.com/channel/UC0XyNmQuhHYna337humJzPg" data-aos="zoom-in" data-aos-delay="500" className="cursor-pointer p-4 rounded-full bg-white/10 hover:bg-red-500 transition">
                            <FaYoutube />
                        </a>

                    </div>

                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} युएसओ वारकरी • सर्व हक्क राखीव
                    </p>
                </div>

                {/* WhatsApp */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg animate-bounce"
                >
                    <FaWhatsapp className="text-white text-xl" />
                </a>
            </footer>
        </div>
    )
}

export default Footer
