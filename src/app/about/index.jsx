import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-[#f9fafb] min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10 space-y-8">

        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Biz haqimizda</h1>
        <p className="text-gray-700 text-lg">
          Yuk tashish bozorida 5 yildan ortiq faoliyat yuritayotgan dinamik rivojlanayotgan kompaniya.
          Bizning yo'nalishimiz - Yevropa, Rossiya, Turkiya va MDH mamlakatlarida avtomobil transportida yuk tashish.
        </p>

        {/* Advantages */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Bizning afzalliklarimiz</h2>
          <ul className="space-y-3 text-gray-700 text-base">
            {[
              "1 tonnadan 22 tonnagacha yuk mashinalari.",
              "Haqiqatan ham dolzarb tariflar. Har qanday murakkablikdagi yuklarni tashish va ekspeditsiya qilish.",
              "Yuklash/tushirish paytida maslahat yordami.",
              "Bojxona brokeri yordami.",
              "Yuridik shaxslar va yakka tartibdagi tadbirkorlar bilan ishlaymiz.",
              "Har qanday to'lov shakli.",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheck className="text-blue-500 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="bg-blue-50 p-5 rounded-lg text-gray-700 space-y-4">
          <p>
            Tranzit yetkazib berish (konsolidatsiyalangan tashish) har doim tejamkorlikdir.
            Mijoz butun mashinaning yurishi uchun emas, balki faqat bir tomonga yetkazib berish uchun to'laydi.
            Yetkazib berish narxining -30%.
          </p>
          <p>
            Shu bilan birga, yirik transport kompaniyasining afzalliklari saqlanib qoladi:
            ishonchli transport, tajribali haydovchilar, sinovdan o'tgan yo'nalishlar va mulkingizning kafolatlangan xavfsizligi.
          </p>
          <p>
            Shoshilinch buyurtmalar bo'lsa ham, doimo bo'sh joyi bo'lgan transport mavjud.
          </p>
        </div>
 
        <div className="bg-gray-50 p-5 rounded-lg text-gray-700 space-y-4">
          <p>
            Yetkazib berishning barcha bosqichlarini nazorat qilib, biz yukning qayerda ekanligini,
            uning muddati va yakuniy nuqtaga yetib kelish sanasini aniq bilamiz.
          </p>
          <p>
            Biz bozorda ishonchli hamkor sifatida obro' qozondik.
          </p>
          <p>
            Bizga ishonishingiz mumkin.
          </p>
        </div>

        
              <div className="bg-blue-50 p-5 rounded-lg text-gray-700 border-l-4 border-blue-500">
                  Aniq narxni bilish, ma'lum bir sanada yetkazib berish imkoniyatini aniqlash yoki paydo bo'lgan
                  har qanday savollar bo'yicha maslahat olish uchun veb-saytda so'rov qoldiring yoki shunchaki qo'ng'iroq qiling.
              </div>


      </div>
    </div>
  );
}
