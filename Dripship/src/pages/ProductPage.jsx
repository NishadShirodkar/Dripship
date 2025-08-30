"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { items } from "../data/products"; // your product data
import OrderModal from "../components/OrderModal"; // modal component
import emailjs from "@emailjs/browser"; // email sending

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by id
  const product = items.find((p) => p.id.toString() === id);
  if (!product) return <p>Product not found</p>;

  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false); // modal state
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  const images = product.images || [product.img];
  const sizes = ["S", "M", "L", "XL"];

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Track carousel width for proper animation
  useEffect(() => {
    if (!carouselRef.current) return;
    const updateWidth = () => setCarouselWidth(carouselRef.current.offsetWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Function to handle sending email
  const sendOrderEmail = (customer) => {
    const templateParams = {
      product_name: product.name,
      size,
      quantity,
      customer_name: customer.name,
      customer_email: customer.email,
      customer_phone: customer.phone,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-white p-6 pt-32 md:pt-24">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 text-gray-600 hover:text-black z-20"
      >
        <X size={28} />
      </button>

      {/* Responsive layout */}
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Carousel */}
        <div className="relative md:w-1/2">
          <div ref={carouselRef} className="overflow-hidden rounded-xl w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
            <motion.div
              className="flex h-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -100) nextImage();
                else if (info.offset.x > 100) prevImage();
              }}
              animate={{ x: -current * carouselWidth }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full h-full flex justify-center items-center"
                  style={{ flex: "0 0 100%" }}
                >
                  <img src={img} alt={`Slide ${i}`} className="max-h-full object-contain" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Thumbnails */}
          <div className="flex justify-center gap-2 mt-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setCurrent(i)}
                className={`w-14 h-14 object-cover rounded-md cursor-pointer border-2 ${
                  i === current ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.desc}</p>

          {/* Price */}
          <p className="text-2xl font-bold text-deep-navy mb-4">{product.price}</p>

          {/* Sizes */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Select Size</h3>
            <div className="flex gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 rounded-lg border ${
                    size === s ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded-lg"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border rounded-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => setShowModal(true)} // open modal
            className="w-full py-3 bg-black text-white rounded-xl shadow hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Order Modal */}
        <OrderModal
        product={product}
        size={size}
        quantity={quantity}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        />
    </div>
  );
}
