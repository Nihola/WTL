import Image from 'next/image'
import React from 'react'

export default function Advantages() {
  return (
    <div id='advantages' className="py-24">
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
    </div>
  )
}
