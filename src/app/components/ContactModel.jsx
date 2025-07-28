import React from "react";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-[#0f172a] text-white w-[90%] md:w-[500px] p-6 rounded-xl relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Biz bilan bog'laning</h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1">Ismingiz</label>
            <input
              type="text"
              placeholder="Ismingizni kiriting"
              className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Telefon raqamingiz</label>
            <input
              type="tel"
              placeholder="+998 90 123 45 67"
              className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Elektron pochtangiz</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Yuk yo'nalishi</label>
            <input
              type="text"
              placeholder="Masalan: Toshkent - Andijon"
              className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded-md"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
}
