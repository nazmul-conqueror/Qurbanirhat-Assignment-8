"use client";

import { useState } from "react";
import toast from "react-hot-toast";


const BookingModal = ({ animalName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.address) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success(`Booking confirmed for ${animalName} 🎉`);

    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
    });

    setIsOpen(false); // close modal
  };

  return (
    <>
      {/* 🔘 Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-all"
      >
        Book Now
      </button>

      {/* 🪟 Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          
          <div className="bg-white rounded-xl w-full max-w-md p-6 relative animate-fadeIn">
            
            {/* ❌ Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">
              Book {animalName}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
              />

              <textarea
                name="address"
                placeholder="Your Address"
                value={form.address}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;