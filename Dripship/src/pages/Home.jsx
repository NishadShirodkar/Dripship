"use client";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { items } from "../data/products"; // your products array
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="w-full bg-ivory-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[80vh]"
        style={{ backgroundImage: "url('/Dripship_alt.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/40 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-ivory-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Elevate Your Style
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-ivory-white mb-6 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Discover timeless fits & seasonal drops made just for you.
          </motion.p>
          <motion.button
            className="px-10 py-4 bg-black text-white text-lg md:text-xl font-semibold rounded-full shadow-lg transition"
            whileHover={{ scale: 1.05, boxShadow: "0 0 12px 3px rgba(212, 175, 55, 0.7)" }} // same glow as hover:shadow-gold
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => navigate(`/collections`)}
          >
            Shop Now
          </motion.button>

        </div>
      </div>

      
      {/* Latest Drops Grid */}
      <div className="p-8 pt-24 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-left mb-2 tracking-tight">
            Latest Drops
          </h1>
          <h2 className="text-gray-600 text-lg sm:text-xl">
            All items are unisex
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleItemClick(item.id)}
              className="rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-white group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-80 object-cover transition duration-500 group-hover:brightness-90"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-gray-200">{item.collection} • {item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>



      {/* Brand Story / Why Us */}
      <div className="py-16 px-6 max-w-6xl mx-auto md:flex md:items-center md:gap-12 text-center md:text-left">
        <div className="md:w-1/2">
          <img
            src="/brand_story_img.jpeg"
            alt="Brand Story"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-deep-navy mb-6">Why Shop With Us?</h2>
          <ul className="text-charcoal-grey space-y-3 text-lg">
            <li>✅ Curated collections with premium fabrics</li>
            <li>✅ Timeless designs for everyday wear</li>
            <li>✅ Sustainable & quality-focused production</li>
          </ul>
        </div>
      </div>

      {/* Newsletter Signup */}
<div className="bg-charcoal-grey text-ivory-white py-16 text-center px-6">
  <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
  <p className="mb-6">Get exclusive offers & new drops straight to your inbox.</p>
  <div className="flex justify-center max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <input
      type="email"
      placeholder="Enter your email"
      className="px-4 py-2 flex-1 focus:outline-none bg-ivory-white text-deep-navy placeholder-gray-500"
    />
    <button className="px-6 py-2 bg-champagne-gold text-deep-navy font-semibold hover:bg-royal-burgundy hover:text-ivory-white transition">
      Subscribe
    </button>
  </div>
</div>

    {/* Footer */}
     <footer className="bg-charcoal-grey text-ivory-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand / Logo */}
          <div className="flex flex-col items-start md:items-start">
            <h3 className="text-xl font-bold mb-2">DRIPSHIP</h3>
            <p className="text-gray-400">Unisex Streetwear. Limited Drops.</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p>Email: <a href="mailto:info@dripship.com" className="hover:text-champagne-gold">info@dripship.com</a></p>
            <p>Phone: <a href="tel:+911234567890" className="hover:text-champagne-gold">+91 12345 67890</a></p>

            {/* Social Links */}
            <div className="flex gap-4 mt-2 justify-start md:justify-end">
              <a
                href="https://www.instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne-gold flex items-center gap-1"
              >
                <Instagram size={20} /> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 mt-8">
          © {new Date().getFullYear()} Dripship. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
