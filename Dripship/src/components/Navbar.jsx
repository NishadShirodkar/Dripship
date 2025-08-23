import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-transparent text-white z-50">
      <Link to="/" className="flex items-center gap-2">
        <img 
          src="/Dripship_logo.png" 
          alt="Dripship Logo" 
          className="h-10 w-10 md:h-14 md:w-14 object-contain" 
        />
      </Link>

      <div className="flex gap-8 text-lg font-semibold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/collections" className="hover:underline">Collections</Link>
        <Link to="/about" className="hover:underline">About Us</Link>
      </div>
    </nav>
  );
}
