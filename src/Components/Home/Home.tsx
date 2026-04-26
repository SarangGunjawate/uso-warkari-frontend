/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Poster from "../../assets/Images/poster-img.jpeg";
import Img1 from "../../assets/Images/img1.jpeg";
import Img2 from "../../assets/Images/img2.jpeg";
import Img3 from "../../assets/Images/img3.jpeg";
import EventImage1 from "../../assets/Images/event-img1.jpeg";
import EventImage2 from "../../assets/Images/event-img2.jpeg";
import EventImage3 from "../../assets/Images/event-img3.jpeg";
import EventImage4 from "../../assets/Images/event-img4.jpeg";
import EventImage5 from "../../assets/Images/event-img5.jpeg";
import EventImage6 from "../../assets/Images/event-img6.jpeg";
import EventImage7 from "../../assets/Images/event-img7.jpeg";
import EventImage8 from "../../assets/Images/event-img8.jpeg";
import PageMeta from "../PageMeta";

export default function Home() {
    const images = [EventImage1, EventImage2, EventImage3, EventImage4, EventImage5, EventImage6, EventImage7, EventImage8];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000); // change every 4 sec

        return () => clearInterval(interval);
    }, [images])

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div className="w-full overflow-hidden">
            <PageMeta
                title="Home Page"
                description="View and manage home information."
            />

            {/* ================= HERO ================= */}
            {/* <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden pt-20">

                <picture>
                    <source media="(max-width: 768px)" srcSet={VitthalImg1} />
                    <img
                        src={VitthalImg}
                        alt="Vitthal"
                        className="absolute inset-0 w-full h-full object-cover scale-105"
                    />
                </picture>

                <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-black/80"></div>

                <div className="relative z-10 max-w-3xl">
                    <h1
                        data-aos="zoom-in"
                        className="text-4xl md:text-7xl font-bold text-white leading-tight drop-shadow-xl"
                    >
                        युएसओ वारकरी
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="mt-4 text-lg md:text-2xl text-gray-200"
                    >
                        श्री विठ्ठल भक्ती
                    </p>
                </div>

            </section> */}

            <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden pt-20">

                {/* Slider Images */}
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="Vitthal"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100 animate-kenburns" : "opacity-0"
                            }`} />
                ))}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/40 to-black/40"></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl">
                    <h1
                        data-aos="zoom-in"
                        className="text-4xl md:text-7xl font-bold text-white leading-tight drop-shadow-xl"
                    >
                        युएसओ वारकरी
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="mt-4 text-lg md:text-2xl text-gray-200"
                    >
                        श्री विठ्ठल भक्ती
                    </p>
                </div>

            </section>

            {/* ================= ABOUT ================= */}
            <section
                data-aos="fade-right"
                className="py-20 px-6 bg-white"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">
                        वारकरी गुरुकुलम्
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
            {/* <section
                data-aos="fade-up"
                className="py-16 bg-white border-t"
            >
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">

                    <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">
                            अधिक जाणून घ्या
                        </h3>

                        <p className="text-gray-600">
                            युएसओ वारकरी गुरुकुल आणि कार्यक्रमांमध्ये सहभागी होऊन आध्यात्मिक प्रगती करा.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end">

                        <button className="px-6 py-3 bg-green-500 text-white rounded-xl shadow hover:scale-105 hover:bg-green-600 transition">
                            गुरुकुल माहिती →
                        </button>

                        <button className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:scale-105 hover:bg-blue-600 transition">
                            कार्यक्रम →
                        </button>

                    </div>
                </div>
            </section> */}

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
                        -अभिप्राय-
                    </h3>

                    {/* Quote */}
                    <p className="text-gray-200 leading-8 mb-6 text-lg italic">
                        दुरितांचे तिमीर जावो | विश्व स्वधर्मसूर्ये पाहो | <br />
                        जो जे वांछील तो ते लाहो | प्राणीजात ||
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 leading-7 mb-6">
                        कसलाही भेदाभेद न करता , कसलीही कक्षा न ठरवता , माऊलींनी अखंड विश्वच्या कल्याणासाठी प्रसादस्वरूपी एक दान मागितलं ते म्हणजे पसायदान .
                        या मागणीतं एका आईचं ममत्व दिसून येते , ज्ञानाईचा लेकरांप्रतिचा कळवळा दिसून येतो.
                        आणि अवघ्या विश्वासाठी अगदी हाचं कळवळा आज मला USO वारकरी कार्यशाळेत जाणवला .
                    </p>

                    {/* Author */}
                    <p className="text-sm text-gray-400">
                        – सौरभ आहेर, नाशिक
                    </p>

                </div>

            </section>
        </div>
    );
}