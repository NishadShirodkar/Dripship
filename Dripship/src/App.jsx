import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import About from "./pages/About";
import ProductPage from "./pages/ProductPage"; // ⬅️ import ProductPage
import LoadingScreen from "./components/LoadingScreen";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-smoke-grey">
        <Navbar />
        {/* Loading Screen */}
        {!loadingFinished && <LoadingScreen onFinish={() => setLoadingFinished(true)} />}

        {/* AnimatePresence for page fade-in */}
        <AnimatePresence mode="wait">
          {loadingFinished && (
            <motion.div
              key="pages"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/about" element={<About />} />
                <Route path="/product/:id" element={<ProductPage />} /> {/* ⬅️ new route */}
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
