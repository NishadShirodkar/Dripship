import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-charcoal-grey text-white shadow-md z-50">
      <div className="w-full px-4 py-3 flex items-center">
        {/* Logo - flush left */}
        <div className="flex-shrink-0 mr-auto">
          <Link to="/" className="text-2xl font-bold">
            DRIPSHIP.CO
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/collections" className="hover:text-gray-300">Collections</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </div>

        {/* Mobile Hamburger (always far right) */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-2/3 bg-charcoal-grey text-white shadow-lg p-6 md:hidden z-40"
          >
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            <div className="mt-12 flex flex-col space-y-6">
              <Link
                to="/"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/collections"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
