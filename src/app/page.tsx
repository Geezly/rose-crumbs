import Header from '../Components/Header';

export default function Home() {
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

      {/* Merch Section */}
      <section id="merch" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#8B4444] text-center mb-12 font-serif">
            🛍️ Merch
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#8B4444]/80 text-center mb-8">
              Dapatkan merchandise eksklusif Rosé Crumbs untuk melengkapi koleksi Anda!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {['Tote Bag', 'Mug', 'Apron'].map((item) => (
                <div key={item} className="bg-[#E6D7C0]/30 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-[#8B4444] mb-2">{item}</h3>
                  <p className="text-[#A85858]">Coming Soon</p>
                </div>
              ))}
            </div>
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