import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-lg">
      <h2 className="text-2xl font-extrabold tracking-wide">
        <Link to="/">Clothing Store</Link>
      </h2>
      <div className="flex gap-8 text-lg font-semibold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/collections" className="hover:underline">Collections</Link>
        <Link to="/about" className="hover:underline">About Us</Link>
      </div>
    </nav>
  );
}
