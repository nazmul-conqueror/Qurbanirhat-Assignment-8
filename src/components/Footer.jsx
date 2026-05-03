"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid  grid-cols-1 md:grid-cols-3 gap-8">

        {/* About  section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Qurbani<span className="text-green-500">Haat</span>
          </h2>
          <p className="text-sm leading-relaxed">
            QurbaniHaat is A trusted online marketplace for buying and selling
            cows and goats for Eid-ul-Adha. We connect farmers and buyers in a
            safe, reliable, and halal way.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>📍 Dhaka, Bangladesh</li>
            <li>📞 +880 1234-567890</li>
            <li>✉️ support@qurbanihub.com</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-green-500 transition">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-green-500 transition">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-green-500 transition">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-green-500 transition">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} QurbaniHaat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;