import Image from 'next/image'
import React from 'react'
// FeatureCards.jsx
import { FaUsers, FaHeadset, FaGlobe, FaTruck } from "react-icons/fa";
import DeliverySlider from '../components/DeliverySlider';
 
const features = [
  {
    title: "Tajribali jamoa",
    description: "Bizning jamoamiz yuqori darajadagi xizmat va qo‘llab-quvvatlashni taqdim etishga tayyor tajribali mutaxassislardan iborat.",
    icon: <FaUsers />,
    bg: "from-[#dbeafe] to-[#93c5fd]", // light blue
    hoverBg: "from-blue-600 to-blue-900",
  },
  {
    title: "Mijozlarni qo‘llab-quvvatlash",
    description: "Biz har doim sizning savollaringiz yoki takliflaringizga yordam berishga tayyormiz, 24/7 sifatli yordam taqdim etamiz.",
    icon: <FaHeadset />,
    bg: "from-[#dbeafe] to-[#93c5fd]",
    hoverBg: "from-blue-600 to-blue-900",
  },
  {
    title: "Global tarmoq",
    description: "Bizning tarmog‘imiz ko‘plab mamlakatlarni qamrab oladi, bu bizga moslashuvchan va samarali yetkazib berish yechimlarini taqdim etish imkonini beradi.",
    icon: <FaGlobe />,
    bg: "from-[#dbeafe] to-[#93c5fd]",
    hoverBg: "from-blue-600 to-blue-900",
  },
  {
    title: "Tez yetkazib berish",
    description: "Tez va ishonchli yetkazib berish, tajribali jamoa va 24/7 qo‘llab-quvvatlash.",
    icon: <FaTruck />,
    bg: "from-[#dbeafe] to-[#93c5fd]",
    hoverBg: "from-blue-600 to-blue-900",
  },
];
 
export default function Advantages() {
 
  return (
    <div  className="py-24">
      <div className='container mx-auto px-4'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold mb-8 flex flex-col md:flex-row items-center justify-center gap-2'>
            <span className='text-blue-500'>Bizning yetkazib berish </span>
            <span className='text-black'> Sizning afzalligingiz</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>Kompaniyaning asosiy maqsadi biznesni yuqori sifatli logistika, Yevropa va MDHning istalgan nuqtasiga yuklarni eng qulay va ishonchli tashish bilan ta'minlashdan iborat.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-6xl mx-auto'>
          <div className='flex flex-col items-center'>
            <div className='relative mb-8 group'>
              <div className='w-44 h-44 md:w-52 md:h-52 rounded-full bg-white shadow-xl flex items-center justify-center relative overflow-hidden'>
                <div className='absolute inset-2 rounded-full bg-gray-50'>
                </div>
                <Image src="/calendar.png" alt='2020 yildan tajriba' width={28} height={28} className='w-28 h-28 md:w-36 md:h-36 object-contain relative z-10' />
              </div>
              <div className='absolute -right-4 top-1/2 transform -translate-y-1/2'>
                <div className='w-2 h-2 bg-blue-400 rounded-full mb-1.5'></div>
                <div className='w-2 h-2 bg-blue-400 rounded-full mb-1.5'></div>
                <div className='w-2 h-2 bg-blue-400 rounded-full'></div></div>
            </div><div className='text-center max-w-[280px]'>
              <h3 className='text-xl font-bold mb-3 text-gray-800'>2020 yildan tajriba</h3>
              <p className='text-gray-600 leading-relaxed'>2020 yildan beri avtomobil yuk tashish sohasida</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='relative mb-8 group'>
              <div className='w-44 h-44 md:w-52 md:h-52 rounded-full bg-white shadow-xl flex items-center justify-center relative overflow-hidden'>
                <div className='absolute inset-2 rounded-full bg-gray-50'>
                </div>
                <Image src="/delivery.png" alt='Yuqori darajadagi xizmat' width={28} height={28} className='w-28 h-28 md:w-36 md:h-36 object-contain relative z-10' />
              </div><div className='absolute -right-4 top-1/2 transform -translate-y-1/2'><div className='w-2 h-2 bg-blue-400 rounded-full mb-1.5'>
              </div><div className='w-2 h-2 bg-blue-400 rounded-full mb-1.5'>
                </div><div className='w-2 h-2 bg-blue-400 rounded-full'>
                </div>
              </div>
            </div>
            <div className='text-center max-w-[280px]'>
              <h3 className='text-xl font-bold mb-3 text-gray-800'>Yuqori darajadagi xizmat</h3>
              <p className='text-gray-600 leading-relaxed'>Professional xizmat va har bir mijozga kompleks yondashuv</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='relative mb-8 group'>
              <div className='w-44 h-44 md:w-52 md:h-52 rounded-full bg-white shadow-xl flex items-center justify-center relative overflow-hidden'>
                <div className='absolute inset-2 rounded-full bg-gray-50'>
                </div>
                <Image src="/rating.png" width={28} height={28}  alt='Eng yuqori ball' className='w-28 h-28 md:w-36 md:h-36 object-contain relative z-10' />
              </div>
              <div className='absolute -right-4 top-1/2 transform -translate-y-1/2'>
                <div className='w-2 h-2 bg-blue-400 rounded-full mb-1.5'>
                </div>
                <div className='w-2 h-2 bg-blue-400 rounded-full mb-1.5'>
                </div><div className='w-2 h-2 bg-blue-400 rounded-full'>
                </div>
              </div>
            </div>
            <div className='text-center max-w-[280px]'>
              <h3 className='text-xl font-bold mb-3 text-gray-800'>Eng yuqori ball</h3>
              <p className='text-gray-600 leading-relaxed'>WTL hamjamiyatining ishonchlilik reytingida eng yuqori ball (5 yulduz).</p>
            </div>
          </div>
        </div>
      </div>
      

      <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-center mb-4">Ishonchlilik va xavfsizlik</h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Biz zamonaviy texnologiyalar va sinovdan o‘tgan usullar yordamida sizning yuklaringizni
            ishonchli va xavfsiz yetkazib berishni kafolatlaymiz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 text-center shadow-md transition-all duration-300 bg-gradient-to-br ${item.bg} hover:${item.hoverBg} hover:text-white group`}
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center text-3xl bg-transparent border-[2px] border-white px-4 group-hover:bg-white text-blue-700 rounded-full shadow-md mb-4 transition-transform duration-300 group-hover:rotate-[90deg]">

                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 group-hover:text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      
      <div className="container mx-auto px-4 py-8">
      <DeliverySlider/>
      </div>
 
     
    </div>
  )
}
