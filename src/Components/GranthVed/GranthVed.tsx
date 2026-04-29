import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ArtboardImage from "../../assets/Images/Artboard 1.jpg.jpeg";
import PageMeta from "../PageMeta";

const GranthVed = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const scrollTextRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particlesArray: Particle[] = [];

        // ✅ FIX: Use devicePixelRatio for accuracy
        const setCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            ctx.scale(dpr, dpr);
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedY: number;
            color: string;

            constructor(canvas: HTMLCanvasElement) {
                this.x = Math.random() * canvas.clientWidth;
                this.y = Math.random() * canvas.clientHeight;
                this.size = Math.random() * 2 + 0.2;
                this.speedY = Math.random() * 1 + 0.3;
                this.color = `rgba(212,175,55,${Math.random()})`;
            }

            update(canvas: HTMLCanvasElement) {
                this.y -= this.speedY;
                if (this.y < 0) this.y = canvas.clientHeight;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particlesArray = [];
            for (let i = 0; i < 80; i++) {
                particlesArray.push(new Particle(canvas));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach((p) => {
                p.update(canvas);
                p.draw(ctx);
            });
            requestAnimationFrame(animate);
        };

        setCanvasSize();
        init();
        animate();

        const handleResize = () => {
            setCanvasSize();
            init();
        };

        const handleScroll = () => {
            const scroll = window.scrollY;
            if (scrollTextRef.current) {
                scrollTextRef.current.style.transform = `translateX(${scroll * 0.4}px)`;
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const phone = "919881186171";

    const message = `नमस्कार, 
मला "माऊलींच्या गोष्टी" हे पुस्तक प्री-बुक करायचे आहे.  
कृपया किंमत, पेमेंट पद्धत आणि डिलिव्हरी माहिती शेअर करा.  
धन्यवाद!`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <div className="bg-black text-[#FFFFF0] font-serif overflow-x-hidden">
            <PageMeta
                title="Pustak Prakashan"
                description="Pustak Prakashan."
            />

            {/* Background */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000_100%)] -z-10"></div>

            {/* Parallax Text */}
            <div
                ref={scrollTextRef}
                className="fixed top-[20%] left-[-10%] text-[20vw] font-black text-[#D4AF37]/5 whitespace-nowrap select-none -z-10"
            >
                विठ्ठल विठ्ठल विठ्ठल
            </div>

            {/* Canvas */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-0"
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 overflow-hidden">

                {/* HERO */}
                <section className="min-h-80 flex flex-col justify-center items-center text-center px-4">

                    <p
                        data-aos="fade-down"
                        className="text-[#D4AF37] uppercase text-sm md:text-base"
                    >
                        🚩॥ राम कृष्ण हरी ॥🚩
                    </p>

                    <h1
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        className="text-4xl sm:text-5xl md:text-7xl font-bold mt-4 bg-linear-to-r from-[#D4AF37] via-white to-[#FF4500] text-amber-200 bg-clip-text leading-tight"
                    >
                        संत विचारांचा <br /> महासंकल्प
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="text-[#D4AF37] mt-4 text-sm md:text-lg"
                    >
                        १ मे २०२६ | भव्य प्रकाशन
                    </p>
                </section>

                {/* BOOK */}
                <section className="flex flex-wrap items-center justify-around gap-12 my-10">
                    <div data-aos="fade-right" className="relative w-[320px] h-112.5 rounded-xl border border-[#D4AF37]/30 bg-white/5 overflow-hidden">
                        <div className="absolute inset-0 bg-[conic-gradient(transparent,#D4AF37,transparent)] animate-spin-slow"></div>

                        <div className="absolute bg-white inset-1 rounded-xl flex flex-col items-center justify-center">
                            <img src={ArtboardImage} alt="Book" className="w-[80%]" />
                            <div className="text-black p-3 text-sm">
                                भक्ती मार्गाचा आधुनिक वारसा
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left" className="flex-1 min-w-70">
                        <h2 className="text-3xl text-[#D4AF37]">
                            प्री-बुकिंग
                        </h2>

                        <p className="my-5 text-gray-300 leading-relaxed text-lg">
                            वारकरी संप्रदायातील अनमोल संतरत्नं आणि त्यांचे विचार प्रथमच एका भव्य स्वरूपात.
                        </p>
                    </div>
                </section>

                {/* STORY */}
                <section className="my-18 relative">

                    {/* Soft Background Glow */}
                    <div
                        data-aos="fade-in"
                        className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF37/10,transparent_70%)] -z-10"
                    ></div>

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2
                            data-aos="fade-up"
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mt-4 bg-linear-to-r from-[#D4AF37] via-white to-[#FF4500] text-amber-200 bg-clip-text leading-tight"
                        >
                            माऊलींच्या गोष्टी
                        </h2>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="mt-4 text-gray-400 italic text-lg"
                        >
                            खास तुमच्या चिमुरड्यांसाठी – प्रेम, धाडस आणि भक्तीच्या गोष्टी
                        </p>
                    </div>

                    {/* Layout */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* LEFT – Story Flow */}
                        <div className="space-y-10">

                            <div
                                data-aos="fade-right"
                                data-aos-delay="100"
                                className="border-l-2 border-[#D4AF37] pl-6"
                            >
                                <h3 className="text-xl text-[#D4AF37] mb-2">✨ सुरुवात</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    खूप वर्षांपूर्वी, ज्ञानाच्या गोष्टी कठीण होत्या…
                                    पण <span className="text-white font-semibold">ज्ञानेश्वर माऊलींनी </span>
                                    त्या अगदी सोप्या करून आपल्या मराठीत सांगितल्या.
                                </p>
                            </div>

                            <div
                                data-aos="fade-right"
                                data-aos-delay="200"
                                className="border-l-2 border-[#D4AF37] pl-6"
                            >
                                <h3 className="text-xl text-[#D4AF37] mb-2">👩‍👧 आईसारखी माया</h3>
                                <p className="text-gray-300">
                                    जशी आई आपल्याला प्रेम देते, तशीच माऊली आजही आपली काळजी घेतात.
                                </p>
                            </div>

                            <div
                                data-aos="fade-right"
                                data-aos-delay="300"
                                className="border-l-2 border-[#D4AF37] pl-6"
                            >
                                <h3 className="text-xl text-[#D4AF37] mb-2">📖 पुस्तकात काय आहे?</h3>
                                <ul className="text-gray-300 space-y-2">
                                    <li>• गोड चरित्र</li>
                                    <li>• धाडसी गोष्टी</li>
                                    <li>• पसायदान</li>
                                    <li>• प्रेमाचा संदेश</li>
                                </ul>
                            </div>

                        </div>

                        {/* RIGHT – Floating Info Card */}
                        <div
                            data-aos="zoom-in-left"
                            data-aos-delay="200"
                            className="relative"
                        >

                            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-[#D4AF37]/30 shadow-[0_0_60px_rgba(212,175,55,0.15)]">

                                <h3 className="text-2xl text-[#D4AF37] mb-6 text-center">
                                    📘 पुस्तकाची माहिती
                                </h3>

                                <div className="space-y-3 text-gray-300 text-center">
                                    <p>लेखक: ह.भ.प. अनिकेत महाराज मोरे देहूकर, <br />पूनम ताई खंडागळे</p>
                                    <p>यु.एस.ओ. वारकरी निर्मित</p>
                                    <p>प्रकाशन: गाथा पब्लिकेशन्स</p>
                                    <p>किंमत: ₹250</p>
                                </div>

                                {/* Divider */}
                                <div className="my-6 h-px bg-linear-to-r from-transparent via-[#D4AF37] to-transparent"></div>

                                {/* Offer */}
                                <div className="text-center">
                                    <p className="text-[#D4AF37] text-lg">🎉 खास ऑफर</p>
                                    <p className="text-3xl font-bold text-white mt-2">
                                        ₹200
                                    </p>
                                    <p className="text-gray-400 text-sm">Pre-booking price</p>
                                </div>

                            </div>

                            {/* Floating Glow */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/20 blur-3xl rounded-full"></div>

                        </div>

                    </div>

                    {/* Bottom Message */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="mt-20 text-center max-w-3xl mx-auto"
                    >
                        <p className="text-gray-300 text-lg leading-relaxed">
                            👨‍👩‍👧‍👦 आपल्या मुलांना आपल्या संस्कृतीची आणि माऊलींच्या विचारांची
                            ओळख करून देण्यासाठी हे एक सुंदर पुस्तक आहे.
                        </p>

                        <p className="mt-5 text-[#D4AF37] font-semibold text-xl">
                            आजच तुमच्या छोट्या दोस्तांसाठी हे पुस्तक घरी आणा!
                        </p>
                    </div>

                </section>

                {/* CTA */}
                <div data-aos="fade-up" className="my-20 text-center">
                    <button className="px-10 py-4 cursor-pointer bg-[#D4AF37] text-black rounded-lg hover:scale-105 transition">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            आत्ताच बुकिंग करा
                        </a>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default GranthVed;