import Header from '../Components/Header';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = [
    { 
      id: 1, 
      name: 'VALENTINE COOKIE TIN', 
      price: 'Rp 350.000', 
      tags: ['LIMITED EDITION'], 
      image: '🎁',
      color: '#FFB4C8'
    },
    { 
      id: 2, 
      name: 'CLASSIC ASSORTMENT', 
      price: 'Rp 275.000', 
      tags: ['BEST SELLER'], 
      image: '🍪',
      color: '#A8D8EA'
    },
    { 
      id: 3, 
      name: 'PREMIUM GIFT BOX', 
      price: 'Rp 425.000', 
      tags: ['PREMIUM'], 
      image: '💝',
      color: '#C9B8E8'
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      <Header />
      
      {/* Hero Section - Inspired by reference but unique layout */}
      <section className="relative pt-28 pb-20 px-6 overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #8B4444 0px, #8B4444 2px, transparent 2px, transparent 10px)`,
          }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-[#0F1B3D] mb-6 leading-[0.95] tracking-tight">
                Say More<br/>With Cookies
              </h1>
              
              <p className="text-lg lg:text-xl text-[#4A5568] mb-10 leading-relaxed max-w-xl">
                Kaleng cookie edisi terbatas Valentine's Day kami adalah hadiah sempurna untuk persahabatan, hubungan, dan segala yang ada di antaranya.
              </p>

              <Link 
                href="#products" 
                className="inline-block bg-[#0033A0] text-white px-12 py-5 rounded-full font-bold text-base hover:bg-[#002080] transition-all duration-300 transform hover:scale-105 shadow-2xl uppercase tracking-widest"
              >
                Shop All Cookies
              </Link>
            </div>

            {/* Right Visual - Gift boxes stack inspired by reference */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-square max-w-[550px] mx-auto">
                {/* Star Badge - positioned at top-right corner */}
                <div className="absolute -top-8 -right-8 z-30 animate-float">
                  <div className="relative">
                    <svg width="140" height="140" viewBox="0 0 140 140" className="transform -rotate-12 drop-shadow-2xl">
                      <path d="M70,10 L90,50 L130,50 L100,75 L115,115 L70,90 L25,115 L40,75 L10,50 L50,50 Z" 
                            fill="#A8D8EA" stroke="#1A1A2E" strokeWidth="3"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center -mt-2">
                        <div className="text-[11px] font-black text-[#1A1A2E] tracking-tight leading-tight">
                          LIMITED<br/>EDITION<br/>TIN!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main red background card - now can contain images */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4757] via-[#FF6B7A] to-[#FF8FA3] rounded-[3rem] shadow-2xl transform rotate-2 overflow-hidden">
                  {/* Optional: Add background image here */}
                  {/* <img 
                    src="/images/hero-background.jpg" 
                    alt="Background" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  /> */}
                  
                  {/* Pink striped floor */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden rounded-b-[3rem]">
                    <div className="absolute inset-0 bg-[#FFD4DD]"></div>
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="stripes" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(-20)">
                          <line x1="0" y1="0" x2="0" y2="40" stroke="#FF9AAA" strokeWidth="3"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#stripes)"/>
                    </svg>
                  </div>

                  {/* Gift boxes stack - Images can be replaced */}
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="relative w-full h-full">
                      
                      {/* Blue box - back left (Can add image) */}
                      <div className="absolute top-[15%] left-[8%] w-[38%] aspect-square bg-[#0033A0] rounded-2xl shadow-xl transform -rotate-6 border-4 border-white overflow-hidden">
                        {/* Option 1: Use background image */}
                        {/* <img 
                          src="/images/blue-gift.jpg" 
                          alt="Blue Gift" 
                          className="absolute inset-0 w-full h-full object-cover"
                        /> */}
                        
                        {/* Option 2: Keep decorative elements */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[80%] h-1 bg-white"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center rotate-90">
                          <div className="w-[80%] h-1 bg-white"></div>
                        </div>
                        <div className="absolute top-[15%] right-[15%] w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl transform rotate-12">
                          🎀
                        </div>
                      </div>

                      {/* Pink box - back right (Can add image) */}
                      <div className="absolute top-[12%] right-[10%] w-[35%] aspect-square bg-[#FFB4D2] rounded-2xl shadow-xl transform rotate-12 border-4 border-white overflow-hidden">
                        {/* Option 1: Use background image */}
                        {/* <img 
                          src="/images/pink-tin.jpg" 
                          alt="Pink Tin" 
                          className="absolute inset-0 w-full h-full object-cover"
                        /> */}
                        
                        {/* Option 2: Pattern inside */}
                        <div className="absolute inset-4 grid grid-cols-3 gap-2">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-[#FF6B9D] rounded-lg"></div>
                          ))}
                        </div>
                      </div>

                      {/* White basket - center front (Can add image) */}
                      <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[45%] aspect-square bg-white rounded-3xl shadow-2xl border-4 border-white z-10 overflow-hidden">
                        {/* Option 1: Use background image */}
                        {/* <img 
                          src="/images/cookie-basket.jpg" 
                          alt="Cookie Basket" 
                          className="absolute inset-0 w-full h-full object-cover"
                        /> */}
                        
                        {/* Option 2: Basket weave pattern */}
                        <div className="absolute inset-0">
                          <div className="absolute inset-4 grid grid-cols-6 gap-1">
                            {[...Array(36)].map((_, i) => (
                              <div key={i} className={`${i % 2 === 0 ? 'bg-[#FFE4E9]' : 'bg-white'} rounded-sm`}></div>
                            ))}
                          </div>
                        </div>
                        {/* Cookies inside */}
                        <div className="absolute inset-0 flex items-center justify-center text-6xl z-10">
                          🍪
                        </div>
                      </div>

                      {/* Small blue gift - front (Can add image) */}
                      <div className="absolute bottom-[15%] left-[12%] w-[28%] aspect-square bg-[#4A90E2] rounded-2xl shadow-xl transform -rotate-12 border-4 border-white z-20 overflow-hidden">
                        {/* Option 1: Use background image */}
                        {/* <img 
                          src="/images/small-gift.jpg" 
                          alt="Small Gift" 
                          className="absolute inset-0 w-full h-full object-cover"
                        /> */}
                        
                        {/* Option 2: Decorative ribbon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[70%] h-1 bg-white"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center rotate-90">
                          <div className="w-[70%] h-1 bg-white"></div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-lg">
                          🎀
                        </div>
                        {/* Cookie logo */}
                        <div className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs">
                          🍪
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-24 px-6 bg-gradient-to-b from-[#FFF8F3] to-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0F1B3D] mb-4 tracking-tight">
              What's New
            </h2>
            <p className="text-xl text-[#8B4444] italic">Koleksi spesial untuk orang-orang terkasih</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                {/* Product Card */}
                <div 
                  className="relative aspect-square rounded-[2.5rem] overflow-hidden mb-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{ backgroundColor: item.color }}
                >
                  {/* Tag */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-black text-white text-[10px] font-bold px-4 py-2 rounded-lg tracking-widest uppercase shadow-lg">
                      {item.tags[0]}
                    </span>
                  </div>
                  
                  {/* Product Visual */}
                  <div className="w-full h-full flex items-center justify-center relative">
                    <div className="text-[11rem] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-out">
                      {item.image}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="px-2">
                  <h3 className="font-black text-base text-[#0F1B3D] uppercase tracking-wide mb-2 group-hover:text-[#8B4444] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xl font-bold text-[#4A5568]">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/products" 
              className="inline-block bg-white border-3 border-[#0F1B3D] text-[#0F1B3D] px-12 py-5 rounded-full font-bold text-base hover:bg-[#0F1B3D] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-widest"
            >
              Lihat Lainnya
            </Link>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-24 px-6 bg-[#FFF5F0]">
        <div className="container mx-auto max-w-[1100px]">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-[#0F1B3D] mb-4">
              Pesan Sekarang
            </h2>
            <p className="text-lg text-[#4A5568]">
              Pilih rasa favorit Anda dan buat momen spesial lebih manis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Classic Chocolate Chip', price: 'Rp 65.000', emoji: '🍫' },
              { name: 'Red Velvet Heart', price: 'Rp 75.000', emoji: '❤️' },
              { name: 'Butter Vanilla Dream', price: 'Rp 60.000', emoji: '🌟' }
            ].map((flavor) => (
              <div 
                key={flavor.name} 
                className="bg-white p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-300 border-3 border-[#0F1B3D] hover:-translate-y-2 cursor-pointer group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {flavor.emoji}
                </div>
                <h3 className="text-xl font-black text-[#0F1B3D] mb-3 uppercase tracking-wide">
                  {flavor.name}
                </h3>
                <p className="text-2xl font-bold text-[#8B4444]">{flavor.price}</p>
                <p className="text-sm text-[#4A5568] mt-2">per box</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section id="event" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-[1100px]">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-[#0F1B3D] mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-[#4A5568]">
              Ikuti workshop dan event spesial kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#FFE4E9] to-[#FFD4DD] p-10 rounded-3xl border-3 border-[#0F1B3D] hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-black text-[#0F1B3D] mb-4 uppercase">
                Cookie Decorating Workshop
              </h3>
              <p className="text-[#4A5568] mb-4 leading-relaxed">
                Belajar menghias cookie dengan teknik profesional. Cocok untuk pemula!
              </p>
              <p className="text-sm font-bold text-[#8B4444]">📅 Setiap Sabtu | ⏰ 10:00 - 12:00</p>
            </div>

            <div className="bg-gradient-to-br from-[#D4E9FF] to-[#B8DAFF] p-10 rounded-3xl border-3 border-[#0F1B3D] hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-2xl font-black text-[#0F1B3D] mb-4 uppercase">
                Valentine's Day Special
              </h3>
              <p className="text-[#4A5568] mb-4 leading-relaxed">
                Pre-order sekarang dan dapatkan free greeting card & special packaging!
              </p>
              <p className="text-sm font-bold text-[#8B4444]">📅 14 Februari 2026 | 🎁 Limited Stock</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-[#FFF8F3]">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-[#0F1B3D] mb-4">
              Mengapa Rosé Crumbls?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: '👩‍🍳', 
                title: 'Handcrafted dengan Cinta', 
                desc: 'Setiap cookie dibuat dengan tangan menggunakan resep keluarga yang telah teruji' 
              },
              { 
                icon: '🌟', 
                title: 'Bahan Premium', 
                desc: 'Hanya menggunakan butter Prancis, cokelat Belgia, dan bahan pilihan terbaik' 
              },
              { 
                icon: '🎁', 
                title: 'Packaging Cantik', 
                desc: 'Kemasan eksklusif yang siap dijadikan hadiah untuk orang terkasih' 
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-300 border-3 border-[#0F1B3D] text-center hover:-translate-y-2"
              >
                <div className="text-7xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-black text-[#0F1B3D] mb-4 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-[#4A5568] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#8B4444] to-[#A85858]">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Make Someone's Day Sweeter?
          </h2>
          <p className="text-xl text-white/95 mb-10 leading-relaxed">
            Jangan lewatkan koleksi edisi terbatas kami. Order sekarang dan rasakan kebahagiaan dalam setiap gigitan!
          </p>
          <Link 
            href="#order" 
            className="inline-block bg-white text-[#8B4444] px-14 py-6 rounded-full font-black text-lg hover:bg-[#0F1B3D] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl uppercase tracking-widest"
          >
            Pesan Sekarang
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#0F1B3D]">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-3 italic tracking-tight">
              Rosé Crumbls
            </h3>
            <p className="text-white/80 text-lg font-medium">A Little Love in Every Crumbs ❤️</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 text-center text-white/70 text-sm max-w-4xl mx-auto mb-10">
            <div>
              <p className="font-bold mb-3 text-white text-base uppercase tracking-wider">Hubungi Kami</p>
              <p className="mb-1">📧 hello@rosecrumbls.com</p>
              <p>📱 +62 812-3456-7890</p>
            </div>
            <div>
              <p className="font-bold mb-3 text-white text-base uppercase tracking-wider">Jam Operasional</p>
              <p className="mb-1">Senin - Jumat: 09:00 - 18:00</p>
              <p>Sabtu - Minggu: 10:00 - 16:00</p>
            </div>
            <div>
              <p className="font-bold mb-3 text-white text-base uppercase tracking-wider">Follow Us</p>
              <p className="mb-1">📷 @rosecrumbls</p>
              <p>🎵 @rosecrumbls</p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/20 text-center text-white/60 text-sm">
            <p>© 2026 Rosé Crumbls. All rights reserved. Made with ❤️ in Jakarta</p>
          </div>
        </div>
      </footer>
    </div>
  );
}