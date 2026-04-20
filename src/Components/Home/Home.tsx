import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Poster from "../../assets/Images/poster-img.jpeg";
import Img1 from "../../assets/Images/img1.jpeg";
import Img2 from "../../assets/Images/img2.jpeg";
import Img3 from "../../assets/Images/img3.jpeg";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div className="w-full overflow-hidden pt-20">

            {/* ================= HERO ================= */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center bg-linear-to-br px-6">

                <h1
                    data-aos="zoom-in"
                    className="text-5xl md:text-7xl font-bold text-gray-700"
                >
                    युएसओ वारकरी
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="mt-4 text-2xl text-gray-500"
                >
                    श्री विठ्ठल भक्ती
                </p>

                <button
                    data-aos="flip-up"
                    data-aos-delay="400"
                    className="mt-8 px-8 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:scale-105 hover:bg-orange-600 transition"
                >
                    आमच्याबद्दल
                </button>

                {/* CTA */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="mt-12"
                >
                    <h2 className="text-2xl font-semibold">
                        फक्त वारकरी गुरुकुलम
                    </h2>

                    <button className="mt-4 px-6 py-3 bg-yellow-400 rounded-full shadow hover:bg-yellow-500 hover:scale-105 transition">
                        📩 गुरुकुलम प्रवेश अर्ज
                    </button>
                </div>
            </section>

            {/* ================= ABOUT ================= */}
            <section
                data-aos="fade-right"
                className="py-20 px-6 bg-white"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">
                        गुरुकुल वारकरी
                    </h2>

                    <p className="text-gray-600 text-justify leading-8 text-lg border-l-4 border-orange-400 pl-4">
                        युएसओ वारकरी येथे , देहूचे जगप्रसिद्ध संत जगद्गुरू तुकाराम महाराज यांचे ११ वे वंशज श्री. अनिकेत महाराज मोरे देहूकर यांच्या नेतृत्वाखाली, युवकांना आध्यात्मिक ज्ञानाने सक्षम करणे, सामाजिक बदलासाठी प्रेरणा देणे आणि आपला सांस्कृतिक वारसा जतन करणे हे आमचे ध्येय आहे. आमच्या सर्वांगीण दृष्टिकोनातून, एक असा सुसंवादी समाज निर्माण करण्याचे आमचे उद्दिष्ट आहे, जिथे व्यक्ती आध्यात्मिकरित्या प्रगती करतील, इतरांच्या कल्याणासाठी सक्रियपणे योगदान देतील आणि एका शाश्वत व करुणामय भविष्यासाठी कार्य करतील. आत्मशोध, समाजसेवा आणि पर्यावरण संवर्धनाच्या या परिवर्तनशील प्रवासात आमच्यासोबत सामील व्हा. एकत्र मिळून, आपण महाराष्ट्रात आणि त्यापलीकडेही एक मोठा बदल घडवू शकतो.
                    </p>
                </div>
            </section>

            {/* ================= POSTER ================= */}
            <section
                data-aos="zoom-in-up"
                className="py-16 px-6 md:px-0 flex justify-center bg-gray-50"
            >
                <img
                    src={Poster}
                    alt="poster"
                    className="w-full max-w-md rounded-xl shadow-xl hover:scale-105 transition duration-500"
                />
            </section>

            {/* ================= CTA STRIP ================= */}
            <section
                data-aos="fade-up"
                className="py-16 bg-white border-t"
            >
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">

                    {/* Left Content */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">
                            अधिक जाणून घ्या
                        </h3>

                        <p className="text-gray-600">
                            युएसओ वारकरी गुरुकुल आणि कार्यक्रमांमध्ये सहभागी होऊन आध्यात्मिक प्रगती करा.
                        </p>
                    </div>

                    {/* Right Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end">

                        <button className="px-6 py-3 bg-green-500 text-white rounded-xl shadow hover:scale-105 hover:bg-green-600 transition">
                            गुरुकुल माहिती →
                        </button>

                        <button className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:scale-105 hover:bg-blue-600 transition">
                            कार्यक्रम →
                        </button>

                    </div>
                </div>
            </section>

            {/* ================= GALLERY ================= */}
            <section className="bg-black text-white py-20 px-6">

                {/* Heading */}
                <p
                    data-aos="fade-left"
                    data-aos-delay="200"
                    className="text-lg text-gray-400 mb-5"
                >
                    युएसओ वारकरी कार्यशाळा
                </p>
                <h2
                    data-aos="fade-left"
                    className="text-4xl font-bold mb-12"
                >
                    आठवणी...
                </h2>

                {/* Gallery */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {[Img1, Img2, Img3].map((img, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 200}
                            className="overflow-hidden rounded-xl shadow-lg"
                        >
                            <img
                                src={img}
                                alt="gallery"
                                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                            />
                        </div>
                    ))}
                </div>

                {/* ================= TESTIMONIAL ================= */}
                <div
                    data-aos="fade-up"
                    className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-10 shadow-xl text-center"
                >

                    {/* Title */}
                    <h3 className="text-2xl font-semibold mb-6 text-orange-400">
                        अभिप्राय
                    </h3>

                    {/* Quote */}
                    <p className="text-gray-200 leading-8 mb-6 text-lg italic">
                        दुरितांचेर जावो | विश्व स्वधर्मसूर्ये पहा | <br />
                        जो जे वांछील तो लाहो | प्राणीजात ||
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 leading-7 mb-6">
                        कसलीही भेदाभेद न करता, कसलीही बेस नता, माऊलींनी अखंड विश्वाच्या
                        कल्याणासाठी प्रसादस्वरूपी एक दान मागितलं ते म्हणजे पसायदान.
                        या पेटतं आईचं ममत्व दल एका, ज्ञानाईं प्रतिचा कळवळा लाभा.
                        आणि अवघ्या विश्वासाठी अगदी हाचं कळवळा आज मला USO वारकरी
                        कार्यशाळेत गेलात.
                    </p>

                    {/* Author */}
                    <p className="text-sm text-gray-400">
                        – सौरभ आहेर, नाशिक
                    </p>

                </div>

            </section>

            {/* ================= FOOTER ================= */}
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

                        <a data-aos="zoom-in" data-aos-delay="300" className="p-4 rounded-full bg-white/10 hover:bg-blue-600 transition">
                            <FaFacebookF />
                        </a>

                        <a data-aos="zoom-in" data-aos-delay="400" className="p-4 rounded-full bg-white/10 hover:bg-pink-500 transition">
                            <FaInstagram />
                        </a>

                        <a data-aos="zoom-in" data-aos-delay="500" className="p-4 rounded-full bg-white/10 hover:bg-red-500 transition">
                            <FaYoutube />
                        </a>

                    </div>

                    <p className="text-sm text-gray-500">
                        © २०२५ युएसओ वारकरी • सर्व हक्क राखीव
                    </p>
                </div>

                {/* WhatsApp */}
                <a className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg animate-bounce">
                    <FaWhatsapp className="text-white text-xl" />
                </a>

            </footer>
        </div>
    );
}