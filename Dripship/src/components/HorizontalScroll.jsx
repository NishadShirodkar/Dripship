// HorizontalScrollSection.jsx
"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  const cards = [
    { icon: "🎨", title: "Premium Quality", desc: "Every piece is crafted with the finest materials for comfort and durability." },
    { icon: "🔥", title: "Luxury Streetwear", desc: "Bold street style fused with high-end fashion to stand out." },
    { icon: "⏱️", title: "Exclusivity", desc: "Limited runs. Once it’s gone, it’s gone—making your fit unique." },
    { icon: "🌎", title: "Global Inspiration", desc: "Inspired by iconic streetwear scenes worldwide for fresh, elevated style." },
    { icon: "✅", title: "Authenticity Guaranteed", desc: "No shortcuts, no compromises—just real streetwear at its highest level." },
  ];

  useEffect(() => {
    const horizontalElement = horizontalRef.current;
    const sectionElement = sectionRef.current;

    const totalWidth = horizontalElement.scrollWidth - window.innerWidth;

    gsap.to(horizontalElement, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: sectionElement,
        start: "top top",
        end: () => `+=${horizontalElement.scrollWidth}`, // scroll distance equals horizontal width
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-screen overflow-hidden bg-ivory-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-deep-navy mb-12 text-center pt-12 sticky top-0 z-10 bg-ivory-white">
        Why Shop With Us?
      </h2>

      <div ref={horizontalRef} className="flex h-full">
        {cards.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-screen flex flex-col items-center justify-center px-6"
          >
            <div className="text-6xl mb-4">{item.icon}</div>
            <h3 className="text-3xl font-bold text-royal-burgundy mb-2 text-center">{item.title}</h3>
            <p className="text-deep-navy text-lg md:text-xl text-center max-w-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
