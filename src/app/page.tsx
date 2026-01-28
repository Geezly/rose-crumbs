import Header from '../Components/Header';
import Link from 'next/link';

export default function Home() {
  // Data untuk pratinjau di halaman awal (tampilkan 3-4 saja)
  const merchPreview = [
    { id: 1, name: 'LOVE ALWAYS CREWNECK', price: 'Rp 450.000', tags: ['LTD. EDITION', 'NEW'], image: '/images/crewneck-love.png' },
    { id: 2, name: 'GLASS MUGS', price: 'Rp 150.000', tags: ['LTD. EDITION', 'NEW'], image: '/images/glass-mug.png' },
    { id: 3, name: 'ROSE FADED CREW NECK', price: 'Rp 550.000', tags: ['LTD. EDITION', 'NEW'], image: '/images/crewneck-rose.png' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] to-[#FFE4D6]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-[#8B4444] mb-4 font-serif">
            Rosé Crumbs
          </h1>
          <p className="text-2xl text-[#A85858] mb-8 italic">
            A Little Love in Every Crumbs
          </p>
          <p className="text-lg text-[#8B4444]/80 max-w-2xl mx-auto">
            Selamat datang di Rosé Crumbs! Kami menyajikan cookies homemade yang dibuat dengan cinta dan bahan-bahan pilihan terbaik. 
            Setiap gigitan adalah pengalaman manis yang tak terlupakan.
          </p>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#8B4444] text-center mb-12 font-serif">
            🍪 Order
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#8B4444]/80 text-center mb-8">
              Pesan cookies spesial kami sekarang! Tersedia berbagai pilihan rasa yang menggugah selera.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {['Classic Chocolate Chip', 'Red Velvet Heart', 'Butter Vanilla'].map((flavor) => (
                <div key={flavor} className="bg-[#E6D7C0]/30 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-[#8B4444] mb-2">{flavor}</h3>
                  <p className="text-[#A85858]">Rp 50.000</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section id="event" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#8B4444] text-center mb-12 font-serif">
            🎉 Event
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#8B4444]/80 text-center mb-8">
              Ikuti event dan workshop baking kami untuk belajar membuat cookies yang lezat!
            </p>
            <div className="bg-[#E6D7C0]/30 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-[#8B4444] mb-4">Upcoming Events</h3>
              <ul className="space-y-4 text-[#8B4444]/80">
                <li>✨ Workshop Baking - Setiap Sabtu jam 10.00</li>
                <li>✨ Valentine Special - 14 Februari 2026</li>
                <li>✨ Cookie Decorating Class - Coming Soon</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- MERCH PREVIEW SECTION (MODIFIED) --- */}
      <section id="merch" className="py-24 px-6 min-h-screen flex flex-col bg-[#FFF8F0]">
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-6xl md:text-7xl font-black text-[#333] tracking-tighter uppercase leading-none">
                What's New
              </h2>
              <p className="text-[#A85858] mt-4 italic">Koleksi merchandise terbaru dari Rosé Crumbs</p>
            </div>
            
            <Link href="/Merch" className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-[#8B4444] transition-all transform hover:scale-105 shadow-lg uppercase tracking-wider text-sm">
              Lihat Lainnya
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {merchPreview.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-square bg-[#F5E6D3] rounded-[2.5rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-md tracking-widest uppercase">
                      {item.tags}
                    </span>
                  </div>
                  
                  {/* Icon/Image Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-700 ease-out">
                    {item.image}
                  </div>
                </div>

                {/* Text Info */}
                <div className="px-2">
                  <h3 className="font-black text-sm text-[#333] uppercase tracking-wide group-hover:text-[#8B4444] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-lg font-medium text-[#555]">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#E6D7C0]">
        <div className="container mx-auto text-center">
          <p className="text-[#8B4444] font-medium mb-2">Rosé Crumbs</p>
          <p className="text-[#8B4444]/70 text-sm">A Little Love in Every Crumbs ❤️</p>
        </div>
      </footer>
    </div>
  );
}