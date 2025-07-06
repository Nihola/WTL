import React from 'react'
import Header from './components/header'
import Services from './services/page'
import CarDimensions from './cardimensions/page'
import Advantages from './advantages/page'
import Contact from './contact/page'
import Footer from './components/footer'
import About from './about'

export default function Home() {
  return (
    <div className='bg-gray-50'>
      <div>
        <Header />
      </div>
      <div className='overflow-hidden'>
        <div className='flex flex-col w-full'>
          <div
            id="main"
            className="flex justify-center items-center min-h-screen p-2 md:p-8
            bg-[url('/bg-hero.jpg')] bg-cover bg-center bg-fixed relative"
          >
            <div className="container py-24 flex justify-between items-center w-full z-10">
              <div className="left-content flex-1 text-left text-white p-10 bg-black opacity-55 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500">
                <h1 className="text-3xl font-extrabold md:text-7xl   leading-tight mb-6">
                  Biz tez va xavfsiz yetkazib berishni kafolatlaymiz!
                </h1>
                <div className="w-48 h-1 bg-gradient-to-r from-blue-800 to-blue-900 mb-8"></div>
                <p className="text-2xl opacity-800 b-80 max-w-2xl mx-auto">
                  Bizning parkimiz o‘z sinfidagi eng yaxshi yuk mashinalaridan iborat bo‘lib, yuklaringizni qayerga bo‘lmasin tez, xavfsiz va o‘z vaqtida yetkazib beradi.
                </p>
                <button className="px-6 py-3 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 to-blue-900 text-white font-semibold text-xl rounded-full shadow-xl hover:scale-110 transition-all duration-300 transform hover:from-blue-600 hover:to-blue-700">
                  Biz bilan boshlang
                </button>
              </div>
            </div>
          </div>

          <div id='services'>
            <Services />
          </div>
          <div id='about'>
            <About />
          </div>          
          <div id='cardimensions'>
            <CarDimensions />
          </div>
          <div id='advantages'>
            <Advantages />
          </div>
          <div id='contact'>
            <Contact />
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
