import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { items } from "../data/products"; // ⬅️ shared products array

export default function Collections() {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const collections = ["All", ...new Set(items.map(item => item.collection))];
  const filteredItems = filter === "All" ? items : items.filter(i => i.collection === filter);

  const handleItemClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="p-8 pt-24">
      {/* Heading */}
      <motion.h1
        className="text-4xl font-extrabold text-center mb-2 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Collections
      </motion.h1>
      <motion.h2
        className="text-center text-gray-600 text-lg sm:text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        All items are unisex
      </motion.h2>

      {/* Filter Buttons */}
      <motion.div
        className="flex justify-center flex-wrap gap-3 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {collections.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-5 py-2 rounded-full text-sm font-medium shadow-md transition ${
              filter === c ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {c}
          </button>
        ))}
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredItems.map((item, i) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleItemClick(item.id)}
            className="rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-white group relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i, duration: 0.6 }}
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
  );
}
