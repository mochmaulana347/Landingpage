import React from 'react';
import { ShoppingCart, MessageCircle, CheckCircle, Smartphone } from 'lucide-react'; // Install: lucide-react

const LandingPagePro = () => {
  const whatsappNumber = "628123456789"; // Nanti ganti pake nomor client

  const formatOrder = (produk) => {
    const teks = `Halo Admin, saya mau order *${produk}*. Mohon info detailnya ya!`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(teks)}`;
  };

  return (
    <div className="bg-[#FAFAFA] text-slate-900 selection:bg-blue-100">
      
      {/* --- HEADER / NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg z-[999] border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="font-black text-2xl tracking-tighter text-blue-600">PRODUK.KU</div>
        <a href="#kontak" className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition">
          Hubungi Kami
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Bikin Bisnis Kamu Jadi <span className="text-blue-600">Luar Biasa.</span>
          </h1>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed">
            Tingkatkan kepercayaan pelanggan dengan website yang cepat, modern, dan profesional. Fokus jualan, biar kami yang urus teknologinya.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#produk" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2">
              <ShoppingCart size={20} /> Lihat Katalog
            </a>
          </div>
        </div>
      </section>

      {/* --- FEATURE HIGHLIGHTS (Biar Kelihatan Pro) --- */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Smartphone /></div>
            <div><h4 className="font-bold">Mobile Friendly</h4><p className="text-sm text-slate-500">Nyaman dibuka dari HP pelanggan.</p></div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl"><CheckCircle /></div>
            <div><h4 className="font-bold">Order Langsung</h4><p className="text-sm text-slate-500">Klik produk langsung nyambung ke WA.</p></div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><MessageCircle /></div>
            <div><h4 className="font-bold">Support 24/7</h4><p className="text-sm text-slate-500">Tim kami siap bantu update data.</p></div>
          </div>
        </div>
      </section>

      {/* --- KATALOG PRODUK --- */}
      <section id="produk" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-12">Koleksi Terpopuler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Card Produk 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-square bg-slate-200 rounded-3xl mb-4 overflow-hidden shadow-inner relative">
               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600">BEST SELLER</div>
               {/* <img src="link-gambar.jpg" className="object-cover h-full w-full group-hover:scale-105 transition duration-500" /> */}
            </div>
            <h3 className="font-bold text-xl mb-1 text-slate-800">Minimalist Coffee Mug</h3>
            <p className="text-blue-600 font-black mb-4">Rp 85.000</p>
            <a href={formatOrder("Minimalist Coffee Mug")} target="_blank" className="block text-center border-2 border-slate-900 py-3 rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition">
              Beli via WhatsApp
            </a>
          </div>
          {/* Ulangi card untuk produk lain... */}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Mulai Online-kan Bisnis Kamu?</h2>
        <p className="text-slate-400 mb-10">Dapatkan harga promo khusus bulan ini!</p>
        <a href={formatOrder("Info Pembuatan Web")} className="bg-green-500 text-white px-10 py-4 rounded-2xl font-bold text-lg inline-block shadow-xl shadow-green-500/20">
          Chat Admin Sekarang
        </a>
      </footer>

    </div>
  );
};

export default LandingPagePro;
