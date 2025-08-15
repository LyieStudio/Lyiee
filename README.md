import { useState } from "react";
import { ShoppingBag, Instagram, Mail, Sparkles, ArrowRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function LyieCoSite() {
  const [email, setEmail] = useState("");

  const products = [
    { id: 1, title: "Soft Linen Dress", price: "RM129", tag: "New", img: "https://picsum.photos/seed/lyie1/600/750" },
    { id: 2, title: "Pearl Hoop Earrings", price: "RM59", tag: "Best Seller", img: "https://picsum.photos/seed/lyie2/600/750" },
    { id: 3, title: "Velvet Matte Lip", price: "RM39", tag: "Vegan", img: "https://picsum.photos/seed/lyie3/600/750" },
    { id: 4, title: "Classic Tote", price: "RM149", tag: "Restocked", img: "https://picsum.photos/seed/lyie4/600/750" },
    { id: 5, title: "Silk Scarf", price: "RM79", tag: "Limited", img: "https://picsum.photos/seed/lyie5/600/750" },
    { id: 6, title: "Glow Highlighter", price: "RM45", tag: "Cruelty‑Free", img: "https://picsum.photos/seed/lyie6/600/750" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f4f0] text-stone-800 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#f7f4f0]/80 backdrop-blur border-b border-stone-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-stone-200/60 shadow-sm">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="tracking-[0.18em] text-lg sm:text-xl font-serif">LYIE & CO.</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#shop" className="hover:opacity-70">Shop</a>
            <a href="#collections" className="hover:opacity-70">Collections</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href="#shop" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-stone-900 text-stone-100 shadow-sm hover:opacity-90 transition">
            <ShoppingBag className="h-4 w-4" />
            <span className="text-sm">Shop Now</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_30%_20%,#d6ccc2_0,transparent_40%),radial-gradient(circle_at_70%_60%,#eae0d5_0,transparent_45%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid lg:grid-cols-2 items-center gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-stone-600">
              <Sparkles className="h-4 w-4" /> curated clothing • accessories • makeup
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Effortless style with a gentle glow
            </h1>
            <p className="mt-4 text-stone-600 max-w-xl">
              A boutique by <span className="font-semibold">Lyie</span> — modern looks, soft palettes, and everyday luxury. Discover pieces that fit your mood and your feed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#shop" className="rounded-2xl px-5 py-3 bg-stone-900 text-stone-50 inline-flex items-center gap-2 shadow hover:opacity-90">
                Shop the Edit <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#collections" className="rounded-2xl px-5 py-3 border border-stone-300 inline-flex items-center gap-2 hover:bg-white/60">
                View Collections
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl bg-white">
              <img src="https://picsum.photos/seed/lyie-hero/1000/1250" alt="Lyie & Co." className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Clothing", img: "https://picsum.photos/seed/lyiec/800/900" },
            { title: "Accessories", img: "https://picsum.photos/seed/lyiea/800/900" },
            { title: "Beauty", img: "https://picsum.photos/seed/lyieb/800/900" },
          ].map((c, i) => (
            <motion.a
              key={c.title}
              href="#shop"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-[2rem] overflow-hidden shadow-md"
            >
              <img src={c.img} alt={c.title} className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-stone-900/0" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <h3 className="text-stone-50 font-serif text-xl tracking-wide">{c.title}</h3>
                <ArrowRight className="h-5 w-5 text-stone-50" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-serif text-3xl">Shop the latest</h2>
            <p className="text-stone-600">Fresh drops every week — limited quantities.</p>
          </div>
          <button className="hidden sm:inline-flex rounded-2xl px-4 py-2 border border-stone-300 hover:bg-white/70">Filter</button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} className="rounded-[2rem] overflow-hidden bg-white shadow">
              <div className="relative">
                <img src={p.img} alt={p.title} className="h-80 w-full object-cover" />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-stone-900 text-stone-50 px-2 py-1 rounded-full">{p.tag}</span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">{p.title}</p>
                  <p className="text-stone-600 text-sm">{p.price}</p>
                </div>
                <button className="rounded-xl px-3 py-2 border border-stone-300 hover:bg-stone-50 inline-flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  <span className="text-sm">Add</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-[2rem] bg-white p-8 sm:p-12 shadow">
          <h2 className="font-serif text-3xl mb-3">About Lyie & Co.</h2>
          <p className="text-stone-600 leading-relaxed">
            We believe in calm colors, kind fabrics, and confidence that feels natural. Every piece in our edit is
            selected to mix, match, and glow together — so you can get ready fast and look put‑together even faster.
          </p>
        </div>
      </section>

      {/* Instagram */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16" id="contact">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-[2rem] bg-white p-8 shadow flex flex-col justify-center">
            <h3 className="font-serif text-2xl">Let’s be friends on Instagram</h3>
            <p className="text-stone-600 mt-2">See new arrivals, styling tips, and giveaways.</p>
            <a
              href="https://www.instagram.com/lyie_studio"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-stone-300 hover:bg-stone-50 w-fit"
            >
              <Instagram className="h-4 w-4" />
              <span className="tracking-wide">instagram.com/lyie_studio</span>
            </a>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow">
            <h3 className="font-serif text-2xl">Join the list</h3>
            <p className="text-stone-600 mt-2">Get 10% off your first order and early access to drops.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Thanks! We'll email ${email} soon ✨`);
                setEmail("");
              }}
              className="mt-4 flex gap-3"
            >
              <input
                required
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-2xl border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-900/10"
              />
              <button className="rounded-2xl px-5 py-3 bg-stone-900 text-stone-50 hover:opacity-90 inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200/60 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="tracking-[0.18em] font-serif">LYIE & CO.</p>
          <div className="flex gap-6 text-sm text-stone-600">
            <a href="#" className="hover:opacity-70">Shipping & Returns</a>
            <a href="#" className="hover:opacity-70">Privacy</a>
            <a href="#" className="hover:opacity-70">Terms</a>
          </div>
          <p className="text-sm text-stone-500">© {new Date().getFullYear()} Lyie & Co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
