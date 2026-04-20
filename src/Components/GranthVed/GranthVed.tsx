import { useEffect, useRef } from "react";
import PosterImage from "../../assets/Images/poster-img.jpeg"

const GranthVed = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const scrollTextRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particlesArray: Particle[] = [];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // class Particle {
        //     x: number;
        //     y: number;
        //     size: number;
        //     speedY: number;
        //     color: string;

        //     constructor() {
        //         this.x = Math.random() * canvas.width;
        //         this.y = Math.random() * canvas.height;
        //         this.size = Math.random() * 2 + 0.1;
        //         this.speedY = Math.random() * 1 + 0.2;
        //         this.color = `rgba(212,175,55,${Math.random()})`;
        //     }

        //     update() {
        //         this.y -= this.speedY;
        //         if (this.y < 0) this.y = canvas.height;
        //     }

        //     draw() {
        //         ctx.fillStyle = this.color;
        //         ctx.beginPath();
        //         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        //         ctx.fill();
        //     }
        // }
        class Particle {
            x: number;
            y: number;
            size: number;
            speedY: number;
            color: string;
            ctx: CanvasRenderingContext2D;

            constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
                this.ctx = ctx;
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.1;
                this.speedY = Math.random() * 1 + 0.2;
                this.color = `rgba(212,175,55,${Math.random()})`;
            }

            update(canvas: HTMLCanvasElement) {
                this.y -= this.speedY;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                this.ctx.fillStyle = this.color;
                this.ctx.beginPath();
                this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        const init = () => {
            particlesArray = [];
            for (let i = 0; i < 100; i++) {
                particlesArray.push(new Particle(ctx, canvas));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach((p) => {
                p.update(canvas);
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const handleScroll = () => {
            const scroll = window.scrollY;
            if (scrollTextRef.current) {
                scrollTextRef.current.style.transform = `translateX(${scroll * 0.5}px)`;
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-black text-[#FFFFF0] font-serif overflow-x-hidden">
            {/* Background Gradient */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000_100%)] -z-10"></div>

            {/* Parallax Text */}
            <div
                ref={scrollTextRef}
                className="fixed top-[20%] left-[-10%] text-[20vw] font-black text-[#D4AF37]/5 whitespace-nowrap select-none -z-10"
            >
                विठ्ठल विठ्ठल विठ्ठल
            </div>

            {/* Canvas Particles */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-0"
            />

            <div className="relative z-10 max-w-275 mx-auto px-5 py-12">
                {/* Hero Section */}
                <section className="h-[90vh] flex flex-col justify-center items-center text-center">
                    <p className="text-[#D4AF37] tracking-[5px] uppercase">
                        🚩॥ राम कृष्ण हरी ॥🚩
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold mt-3 leading-relaxed md:leading-tight bg-linear-to-r from-[#D4AF37] via-white to-[#FF4500] text-transparent bg-clip-text">
                        संत विचारांचा <br /> महासंकल्प
                    </h1>

                    <p className="text-[#D4AF37] tracking-[5px] uppercase">
                        १ मे २०२६ | भव्य प्रकाशन
                    </p>

                    <div className="mt-6 text-gray-500">खाली स्क्रोल करा ↓</div>
                </section>

                {/* Book Section */}
                <section className="flex flex-wrap items-center justify-around gap-12 my-24">
                    {/* Book Card */}
                    <div className="relative w-[320px] h-112.5 rounded-xl border border-[#D4AF37]/30 backdrop-blur-md bg-white/5 overflow-hidden group">
                        {/* Glow */}
                        <div className="absolute w-[150%] h-[150%] bg-[conic-gradient(transparent,#D4AF37,transparent)] animate-spin-slow"></div>

                        <div className="absolute inset-0.75 bg-black rounded-xl flex flex-col items-center justify-center z-10">
                            <img
                                src={PosterImage}
                                alt="Book"
                                className="w-[80%]"
                            />
                            <div className="text-center p-3 text-sm">
                                भक्ती मार्गाचा <br /> आधुनिक वारसा
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-75">
                        <h2 className="text-3xl text-[#D4AF37]">
                            पवित्र ग्रंथ प्री-बुकिंग
                        </h2>

                        <p className="my-5 text-gray-300 leading-relaxed text-lg">
                            वारकरी संप्रदायातील अनमोल संतरत्नं आणि त्यांच्या विचारांची
                            गोळाबेरीज प्रथमच एका भव्य स्वरूपात. केवळ वाचकांसाठी नाही,
                            तर हा प्रत्येक घराचा 'अध्यात्मिक ठेवा' असेल.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
                            <div className="bg-white/5 p-6 rounded-xl border-l-4 border-[#D4AF37] hover:bg-[#D4AF37]/10 transition">
                                <h3 className="text-lg font-semibold">५००+ अभंग</h3>
                                <p className="text-gray-400">अर्थासहित संकलन</p>
                            </div>

                            <div className="bg-white/5 p-6 rounded-xl border-l-4 border-[#D4AF37] hover:bg-[#D4AF37]/10 transition">
                                <h3 className="text-lg font-semibold">दुर्मिळ चित्रे</h3>
                                <p className="text-gray-400">भक्तीचा दृश्यानुभव</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <div className="mt-12 text-center bg-[#D4AF37]/10 p-10 rounded-3xl border border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                    <h2 className="mb-5 text-2xl">
                        तुमची प्रत आजच राखून ठेवा
                    </h2>

                    <p className="mb-6 text-gray-400">
                        प्री-बुकिंग करणाऱ्या पहिल्या ५०० वाचकांना लेखकाची स्वाक्षरी असलेले पुस्तक मिळेल.
                    </p>

                    <a
                        href="#"
                        className="inline-block px-12 py-5 bg-[#D4AF37] text-black font-bold text-lg rounded-lg shadow-[0_0_20px_#D4AF37] transition hover:-translate-y-1 hover:scale-105 hover:bg-white hover:shadow-[0_0_40px_white]"
                    >
                        आत्ताच नाव नोंदवा
                    </a>

                    <p className="mt-5 text-[#D4AF37]">॥ राम कृष्ण हरी ॥</p>
                </div>
            </div>
        </div>
    );
};

export default GranthVed;