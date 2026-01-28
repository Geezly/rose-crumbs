'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const menuItems = [
    { name: 'Order', href: '#order' },
    { name: 'Event', href: '#event' },
    { name: 'Merch', href: '#merch' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#E6D7C0]/70 backdrop-blur-sm shadow-md' : 'bg-[#E6D7C0]'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Menu di Kiri */}
          <div className="flex-1 flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#8B4444] font-medium hover:text-[#A85858] transition-colors duration-300 text-lg relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B4444] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Logo di Tengah */}
          <div className="flex-shrink-0 mx-8">
            <a href="/" className="block transition-transform duration-300 hover:scale-105">
              <div className="relative w-20 h-20">
                <Image
                  src="/images/logokueh.png"
                  alt="Rose Crumbs Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          </div>

          {/* Button Order Now di Kanan */}
          <div className="flex-1 flex justify-end">
            <a
              href="#order"
              className="bg-[#8B4444] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#A85858] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block"
            >
              Order Now
            </a>
          </div>
        </div>
      </nav>

      {/* Decorative border bottom */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#8B4444]/30 to-transparent"></div>
    </header>
  );
}