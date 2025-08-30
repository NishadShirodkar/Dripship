"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function OrderModal({ product, size, quantity, isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      product: product.name,
      size,       // selected size
      quantity,   // selected quantity
      name,
      email,
      phone,
      image_url: product.img,
    };

    emailjs
      .send(
        "service_zyzvrbm",
        "template_l0zjykq",
        templateParams,
        "Xy2XW_E0NTCZ6LTRA"
      )
      .then(() => {
        alert("Order sent!");
        onClose();
        setName("");
        setEmail("");
        setPhone("");
      })
      .catch((err) => {
        alert("Error: " + err.text);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        className="bg-white p-6 rounded-lg w-full max-w-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4">Order {product.name}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-3 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-3 py-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="px-3 py-2 border rounded"
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Send Order
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
