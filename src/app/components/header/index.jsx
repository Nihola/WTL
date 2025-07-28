'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContactModal from '../ContactModel'; // ✅ Make sure filename matches exactly

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const navLinks = [
    { label: 'Asosiy', href: '#main' },
    { label: 'Biz haqimizda', href: '#about' },
    { label: 'Xizmatlar', href: '#services' },
    { label: 'Tashishlar', href: '#cardimensions' },
    { label: 'Afzalliklar', href: '#advantages' },
    { label: 'Aloqa', href: '#contact' },
  ];

  return (
    <header className='header'>
      {/* ✅ Modal rendered outside nav so it works on all screen sizes */}
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      <nav className='navbar fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b border-blue-100'>
        <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo */}
            <Link href="/" className='flex items-center gap-4 text-black hover:text-gray-800 transition-colors duration-300 min-w-fit' aria-label="WTL home">
              <span className='text-2xl font-bold tracking-wider text-blue-600'>WTL</span>
              <div className='h-8 w-px bg-gray-300'></div>
              <span className='text-sm max-w-[200px]'>
                Transport-expeditsiya kompaniyasi
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className='hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-end'>
              <div className='flex items-center gap-4 lg:gap-6'>
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-gray-700 relative group px-3 py-2 rounded-lg font-medium tracking-wide transition-all duration-300 transform hover:scale-110 hover:translate-y-1 hover:text-blue-600 whitespace-nowrap ${pathname === link.href ? 'text-blue-600 font-semibold' : ''}`}
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>

              {/* ✅ Desktop Modal Button */}
              <button
                className='text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap ml-4'
                onClick={() => setModalOpen(true)}
              >
                Biz bilan bog'laning
              </button>
            </div>

            {/* Right: Language + Toggle */}
            <div className='flex items-center gap-4 ml-4'>
              {/* Language Buttons */}
              <div className='hidden md:block'>
                <div className='flex items-center gap-2'>
                  {['/uz.jpg', '/ru.png', '/en.jpeg'].map((src, i) => (
                    <button key={i} aria-label={`Til ${i + 1}`} className='w-8 h-8 rounded-full overflow-hidden border-2 border-blue-500 hover:opacity-75 transition-opacity'>
                      <img src={src} alt="Lang" className='w-full h-full object-cover' />
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Toggle */}
              <button
                className="block md:hidden text-gray-700 hover:text-blue-500"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-sm md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setMenuOpen(false)}
          >
            <div
              className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className='p-4 border-b border-gray-100 flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  {['/uz.jpg', '/ru.png', '/en.jpeg'].map((src, i) => (
                    <button key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue-500 hover:opacity-75 transition-opacity" aria-label={`Til ${i + 1}`}>
                      <img src={src} alt="Lang" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                <button
                  className='text-gray-700 hover:text-blue-500'
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Links */}
              <div className='py-4'>
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors duration-300 ${pathname === link.href ? 'font-semibold text-blue-600' : ''}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* ✅ Mobile Modal Button */}
              <div className='px-6 py-3'>
                <button
                  className="w-full text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  onClick={() => {
                    setMenuOpen(false);
                    setModalOpen(true);
                  }}
                >
                  Biz bilan bog'laning
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
