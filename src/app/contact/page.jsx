import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-blue-800 text-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

       
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ishonchli logistika kerakmi?</h2>
          <p className="text-lg mb-8">
            Bizning zamonaviy avtoparkimiz va logistikadagi tajribamiz sizning biznesingizni qanday rivojlantirishi mumkinligini bilish uchun bugun biz bilan bog'laning.
          </p>

          <div className="space-y-4 text-lg">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-xl mt-1" />
              <span>Toshkent, Sandiqli ko'chasi, 52</span>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-xl mt-1" />
              <span>+998 95 340 19 50</span>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-xl mt-1" />
              <span>waschmittelcompany@mail.ru</span>
            </div>
            <div className="flex items-start gap-3">
              <FaClock className="text-xl mt-1" />
              <span>Du-Sha 9:00 dan 18:00 gacha</span>
            </div>
          </div>
        </div>
 
        <div className="w-full h-[400px]">
          <iframe
            title="LLC WASCHMITTEL Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.696648733052!2d69.26893487669852!3d41.3149982020616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4d96b366aad%3A0x11e70c33e5c3c31f!2sLLC%20WASCHMITTEL!5e0!3m2!1sen!2s!4v1720319692343!5m2!1sen!2s"
            className="w-full h-full rounded-xl shadow-xl border-2 border-white"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
