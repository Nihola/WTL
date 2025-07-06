import Image from 'next/image'
import React from 'react'

export const services = [
  {
    img: "/services1.svg",
    title: "Avtomobil tashish",
    desc: "Yuklaringiz uchun ishonchli va samarali avtomobil tashish xizmatlarini taqdim etamiz"
  },
  {
    img: "/services2.svg",
    title: "Yuklar konsolidatsiyasi",
    desc: "Yetkazib berishni optimallashtirish uchun bir nechta kichik yuklar partiyasini birlashtirishz"
  },
  {
    img: "/services3.svg",
    title: "Xitoydan yetkazib berish",
    desc: "Xitoydan yuklarni tez va ishonchli yetkazib berishni tashkil qilamiz"
  },
  {
    img: "/services4.svg",
    title: "Qiyin joylarga yetkazish",
    desc: "Eng uzoq va qiyin hududlarga yetkazib berish xizmatini amalga oshiramiz"
  },
  {
    img: "/services5.svg",
    title: "Ombor xizmatlari",
    desc: "Yuklaringizni saqlash uchun zamonaviy ombor binolarini taqdim etamizz"
  },
]

export default function Services() {
  return (
    <div className="py-20 px-4 md:px-16 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Bizning <span className="text-gray-800">Xizmatlar</span></h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col gap-4 p-6   hover:shadow-lg transition-all duration-300 text-center rounded-xl"
          >
            <Image src={item.img} width={250} height={250} alt={item.title} className="mx-auto mb-4" />
 
            <div className="text-lg font-semibold text-black group-hover:text-blue-700 group-hover:font-semibold group-hover:text-[19px] transition-all duration-300">
              {item.title}
            </div>

            <div className="text-gray-600">{item.desc}</div>
          </div>
        ))}

      </div>

      <div  className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-between'>
        <div className='w-full md:w-1/2 mb-4 md:mb-0 mt-12 md:mt-0'>
          <Image src='/red.png' alt='About Us' width={700} height={800} className='w-[50%] md:w-[90%] h-auto object-contain mx-auto scale-[0.72] transition-transform 0.1 duration-[500ms] ease-out'/>
        </div>
        <div className='about-text md:w-1/2 md:pl-8 pt-4 md:pt-0 p-5'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Xizmatlar</h2>
        <div className='mb-6'><h3 className='text-xl font-semibold text-blue-600 mb-3'>Yig'ma yuklarni yetkazib berish</h3>
        <p className='text-lg text-gray-600 mb-3'>Kichik yuklar va dogruzkalar uchun maxsus xizmat. O'zbekiston, Rossiya va Qozog'iston yo'nalishlarida tezkor va ishonchli yetkazib berish.</p>
        <ul className='list-disc pl-6 text-gray-600 mb-4'>
          <li>Yuk og'irligi: 1 kg dan 10 tonnagacha</li>
        <li>Asosiy yo'nalishlar: O'zbekiston-Rossiya, O'zbekiston-Qozog'iston va teskari yo'nalishlar</li>
        </ul>
        </div>
        <div className='mb-6'>
          <h3 className='text-xl font-semibold text-blue-600 mb-3'>
            Avtomobil yuk tashish</h3>
        <p className='text-lg text-gray-600 mb-3'>Katta yuklar uchun maxsus transport xizmati. O'zbekiston, Rossiya, Qozog'iston, Turkiya va Yevropa bo'ylab yetkazib berish.</p>
        <ul className='list-disc pl-6 text-gray-600 mb-4'><li>Yuk og'irligi: 10 tonnadan 21 tonnagacha</li>
        <li>Yo'nalishlar: O'zbekiston, Rossiya, Qozog'iston, Turkiya va Yevropa</li>
        </ul>
        </div>
        <div className='border-t-2 border-blue-600 my-4'>
          </div>
          <p className='text-lg text-gray-600'>
            Bu tashishlar turli sohalarning ishlashini ta'minlashda muhim rol o'ynaydi va milliy iqtisodiyotning barqarorligini ta'minlaydi.
             Biz har qanday yuklarni 'eshikdan eshikgacha' eng qisqa muddatda va eng yaxshi sifat bilan yetkazib beramiz. Uskunalar yetkazib berish, qurilish va yo'l maxsus texnikasi, qurilish materiallari, mebel, maishiy texnika, ehtiyot qismlar va hatto samolyot - bizning ko'p yillik tajribamiz tashishni tashkil etishda keng imkoniyatlar beradi.</p>
          </div>
      </div>
    </div>
  )
}
