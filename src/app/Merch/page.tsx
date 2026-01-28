'use client';

import Header from '../../Components/Header';
import Image from 'next/image';

export default function MerchPage() {
  const allMerch = [
    { id: 1, name: 'LOVE ALWAYS CREWNECK', price: 'Rp 450.000', tags: ['LTD. EDITION', 'NEW'], image: '/images/crewneck-love.png' },
    { id: 2, name: 'GLASS MUGS', price: 'Rp 150.000', tags: ['LTD. EDITION', 'NEW'], image: '/images/glass-mug.png' },
    { id: 3, name: 'ROSE FADED CREW NECK', price: 'Rp 550.000', tags: ['LTD. EDITION', 'NEW'], image: '/images/crewneck-rose.png' },
    { id: 4, name: 'ROSE FADED SWEATPANTS', price: 'Rp 400.000', tags: ['LTD. EDITION', 'NEW'], image: '/images/pants-rose.png' },
    { id: 5, name: 'ROSE APRON', price: 'Rp 200.000', tags: ['NEW'], image: '/images/apron.png' },
    { id: 6, name: 'COOKIE TOTEBAG', price: 'Rp 120.000', tags: ['NEW'], image: '/images/totebag.png' },
  ];

  // Objek Style sesuai permintaanmu
  const cardStyle = {
    width: "260px", 
    borderRadius: "20px",
    padding: "20px",
    textAlign: "center" as const,
    textDecoration: "none",
    backgroundColor: "#ffffff", // Palet Cream Beige
    color: "#000",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0]">
      <Header />

      {/* Spacer agar tidak tertutup Header */}
      <div className="h-40 md:h-48"></div>

      <main className="flex-grow container mx-auto max-w-[1300px] px-6 pb-24">
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-[#333] tracking-tighter uppercase leading-none">
            Our <br /> Merch
          </h1>
          <p className="text-[#A85858] mt-4 text-xl italic font-light">Koleksi eksklusif Rosé Crumbs</p>
        </div>

        {/* Container Grid: Menggunakan flex agar ukuran cardStyle.width (260px) tetap terjaga */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-16">
          {allMerch.map((item) => (
            <div key={item.id} style={cardStyle} className="group transition-transform duration-300 hover:scale-105">
              
              {/* Container Image */}
              <div className="relative aspect-square bg-[#F5E6D3] rounded-xl overflow-hidden mb-6 shadow-inner">
                {/* Bagian Tags */}
                <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-black text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="260px"
                />
              </div>

              {/* Info Produk */}
              <div className="space-y-1">
                <h3 className="font-black text-xs text-[#333] uppercase tracking-wide group-hover:text-[#8B4444] transition-colors leading-tight">
                  {item.name}
                </h3>
                <p className="text-lg font-bold text-[#555]">{item.price}</p>
              </div>

              {/* Tombol Tambahan biar makin keren */}
              <button className="mt-4 w-full py-2 bg-[#8B6B4B] text-white rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-12 px-6 bg-[#E6D7C0]">
        <div className="container mx-auto text-center">
          <p className="text-[#8B4444] font-medium mb-2">Rosé Crumbs</p>
          <p className="text-[#8B4444]/70 text-sm italic font-serif">A Little Love in Every Crumbs ❤️</p>
        </div>
      </footer>
    </div>
  );
}