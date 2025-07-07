import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaHome,
  FaInfoCircle,
  FaTruck,
  FaListAlt,
  FaFeatherAlt
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

 
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold flex items-center gap-2 text-blue-500 mb-4">
            <FaHome /> Bosh sahifa
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
              <FaInfoCircle /> Biz haqimizda
            </li>
            <li className="flex items-center gap-2 hover:text-blue-300 transition">
              <FaListAlt /> Bizning afzalliklarimiz
            </li>
            <li className="flex items-center gap-2 hover:text-blue-300 transition">
              <FaFeatherAlt /> Xizmatlar
            </li>
            <li className="flex items-center gap-2 hover:text-blue-300 transition">
              <FaTruck /> Tashishlar
            </li>
            <li className="flex items-center gap-2 hover:text-blue-300 transition">
              <FaPhoneAlt /> Biz bilan bog'laning
            </li>
          </ul>
        </div>

 
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold flex items-center gap-2 text-blue-500 mb-4">
            <FaPhoneAlt /> Kontaktlar
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +998 95 340 19 50
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> waschmittelcompany@mail.ru
            </li>
            <li className="flex items-center gap-2">
              <FaClock /> Du-Sha 9:00 dan 18:00 gacha
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Toshkent, Sandiqli ko'chasi, 52
            </li>
          </ul>
 
          <div className="flex items-center gap-5 mt-6 text-2xl text-white">
            <FaTelegramPlane className="hover:text-blue-400 cursor-pointer transition" />
            <FaWhatsapp className="hover:text-green-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer transition" />
          </div>
        </div>
      </div>
 
      <div className="text-center text-sm text-gray-400 mt-8">
        © 2025 Barcha huquqlar himoyalangan
      </div>
    </footer>
  );
}
