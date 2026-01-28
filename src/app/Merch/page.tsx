'use client';

import { useState, useRef, useEffect } from 'react';
import Header from '../../Components/Header';
import Image from 'next/image';

export default function MerchPage() {
  // 1. Data Produk
  const allProducts = [
    { id: 1, name: 'LOVE ALWAYS CREWNECK', price: 'Rp 450.000', tags: ['LTD. EDITION', 'NEW'], category: 'BAJU', image: '/images/crewneck-love.png' },
    { id: 2, name: 'GLASS MUGS', price: 'Rp 150.000', tags: ['LTD. EDITION', 'NEW'], category: 'MUG', image: '/images/glass-mug.png' },
    { id: 3, name: 'ROSE FADED CREW NECK', price: 'Rp 550.000', tags: ['LTD. EDITION', 'NEW'], category: 'BAJU', image: '/images/crewneck-rose.png' },
    { id: 4, name: 'ROSE FADED SWEATPANTS', price: 'Rp 400.000', tags: ['LTD. EDITION', 'NEW'], category: 'BAJU', image: '/images/pants-rose.png' },
    { id: 5, name: 'ROSE APRON', price: 'Rp 200.000', tags: ['NEW'], category: 'AKSESORI', image: '/images/apron.png' },
    { id: 6, name: 'COOKIE TOTEBAG', price: 'Rp 120.000', tags: ['NEW'], category: 'AKSESORI', image: '/images/totebag.png' },
    { id: 7, name: 'CLASSIC ROSE CAP', price: 'Rp 150.000', tags: [], category: 'TOPI', image: '/images/cap.png' },
  ];

  // 2. State Management
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 3. Fungsi Slider Logic
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  // 4. Filter Logic
  const newArrivals = allProducts.filter(p => p.tags.includes('NEW'));
  const filteredProducts = activeFilter === 'ALL' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0]">
      <Header />

      {/* BANNER UTAMA (Full Width, No Rounded) */}
      <section className="w-full pt-20">
        <div className="relative w-full h-[400px] md:h-[550px] bg-[#EE215A] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#EE215A] to-[#8B4444] opacity-95"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10 text-white">
            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none mb-4">LOVE ALWAYS</h2>
            <p className="text-lg md:text-xl font-bold uppercase tracking-[0.4em] mb-8">Available Now</p>
            <button className="bg-white text-black px-10 py-3 rounded-full font-bold uppercase hover:scale-105 transition-transform shadow-lg">
              Shop Now!
            </button>
          </div>
        </div>
      </section>

      <main className="flex-grow container mx-auto max-w-[1300px] px-6 py-16">
        
        {/* SECTION 1: WHAT'S NEW (Slider Horizontal) */}
        <section className="mb-24 relative">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-[#333] tracking-tighter uppercase leading-none">What's <br /> New</h2>
              <p className="text-[#A85858] mt-2 italic">Koleksi terbaru bulan ini</p>
            </div>

            {/* Tombol Navigasi Slider */}
            <div className="flex gap-3 mb-2">
              <button 
                onClick={() => scroll('left')}
                className={`w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center active:scale-90
                  ${canScrollLeft ? 'bg-black text-white border-black' : 'bg-white text-gray-300 border-gray-200'}
                  hover:bg-black hover:text-white hover:border-black`}
              >
                <span className="text-xl">{"<"}</span>
              </button>
              <button 
                onClick={() => scroll('right')}
                className={`w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center active:scale-90
                  ${canScrollRight ? 'bg-black text-white border-black' : 'bg-white text-gray-300 border-gray-200'}
                  hover:bg-black hover:text-white hover:border-black`}
              >
                <span className="text-xl">{">"}</span>
              </button>
            </div>
          </div>
          
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 pb-4"
          >
            {newArrivals.map((item) => (
               <div key={item.id} className="snap-start flex-shrink-0">
                 <ProductCard item={item} />
               </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: ALL MERCH (Grid + Filter) */}
        <section id="all-merch">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-t pt-16 border-[#8B4444]/10">
            <h2 className="text-5xl md:text-6xl font-black text-[#333] tracking-tighter uppercase leading-none">All <br /> Merch</h2>

            <div className="flex flex-wrap gap-2 bg-[#E6D7C0]/30 p-2 rounded-2xl">
              {['ALL', 'BAJU', 'TOPI', 'MUG', 'AKSESORI'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeFilter === cat ? 'bg-[#8B4444] text-white shadow-md' : 'text-[#8B4444] hover:bg-[#E6D7C0]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            {filteredProducts.map((item) => (
               <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 bg-[#E6D7C0] text-center">
        <p className="font-black text-[#8B4444] uppercase tracking-widest">Rosé Crumbs Merch</p>
      </footer>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

// Komponen Card Terpisah
function ProductCard({ item }: any) {
  return (
    <div className="w-[260px] p-5 rounded-[20px] bg-white shadow-sm group transition-all duration-300 hover:translate-y-[-10px] hover:shadow-xl">
      <div className="relative aspect-square bg-[#F5E6D3] rounded-xl overflow-hidden mb-6">
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {item.tags.map((tag: string) => (
            <span key={tag} className="bg-black text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-widest">{tag}</span>
          ))}
        </div>
        <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="text-center">
        <h3 className="font-black text-xs text-[#333] uppercase mb-1 leading-tight min-h-[32px]">{item.name}</h3>
        <p className="text-lg font-bold text-[#555]">{item.price}</p>
      </div>
    </div>
  );
}