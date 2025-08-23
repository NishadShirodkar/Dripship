import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  { id: 1, name: "Classic White Tee", collection: "Basics", img: "https://via.placeholder.com/300x400" },
  { id: 2, name: "Denim Jacket", collection: "Outerwear", img: "https://via.placeholder.com/300x400" },
  { id: 3, name: "Summer Dress", collection: "Summer", img: "https://via.placeholder.com/300x400" },
  { id: 4, name: "Black Hoodie", collection: "Outerwear", img: "https://via.placeholder.com/300x400" },
  { id: 5, name: "Chinos", collection: "Basics", img: "https://via.placeholder.com/300x400" },
  { id: 6, name: "Floral Shirt", collection: "Summer", img: "https://via.placeholder.com/300x400" },
];

export default function Collections() {
  const [filter, setFilter] = useState("All");
  const collections = ["All", ...new Set(items.map(item => item.collection))];
  const filteredItems = filter === "All" ? items : items.filter(i => i.collection === filter);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Collections</h1>

      {/* Filter */}
      <div className="flex justify-center gap-4 mb-8">
        {collections.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === c ? "bg-black text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredItems.map(item => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-white"
          >
            <div className="relative group">
              <img src={item.img} alt={item.name} className="w-full h-80 object-cover transition duration-300 group-hover:opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black bg-opacity-40">
                <p className="text-white font-semibold text-lg">{item.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
