/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  ChevronRight, 
  ChevronLeft, 
  Gamepad2, 
  Sword, 
  Map, 
  Target, 
  Car, 
  Users, 
  Ghost,
  MoreHorizontal,
  Calendar,
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Mock Data
const CATEGORIES = [
  { id: 'action', name: 'მოქმედებითი', icon: Sword },
  { id: 'adventure', name: 'სათავგადასავლო', icon: Map },
  { id: 'shooting', name: 'სროლები', icon: Target },
  { id: 'racing', name: 'სარბოლი', icon: Car },
  { id: 'multiplayer', name: 'მულტიპლეიერი', icon: Users },
  { id: 'rpg', name: 'როლური', icon: Ghost },
  { id: 'other', name: 'სხვა', icon: MoreHorizontal },
];

const POPULAR_GAMES = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    price: '79.99',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop',
    platform: 'PC'
  },
  {
    id: 2,
    title: 'God of War Ragnarök',
    price: '89.99',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
    platform: 'PlayStation'
  },
  {
    id: 3,
    title: 'Hogwarts Legacy',
    price: '69.99',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop',
    platform: 'Multi'
  },
  {
    id: 4,
    title: 'Red Dead Redemption 2',
    price: '59.99',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop',
    platform: 'Multi'
  },
  {
    id: 5,
    title: 'The Witcher 3: Wild Hunt',
    price: '39.99',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&auto=format&fit=crop',
    platform: 'Multi'
  },
  {
    id: 6,
    title: 'Baldur\'s Gate 3',
    price: '39.99',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop',
    platform: 'PC'
  }
];

const BLOG_POSTS = [
  {
    id: 1,
    category: 'NEWS',
    title: 'PlayStation Showcase 2024 – ყველა ახალი ანონსი',
    excerpt: 'შეიტყვეთ ყველაფერი იმ თამაშების შესახებ, რომლებიც უახლოეს მომავალში გამოვა...',
    date: '16 მაისი, 2024',
    comments: 12,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'REVIEW',
    title: 'Horizon Forbidden West – სრული მიმოხილვა',
    excerpt: 'ალოის თავგადასავალი გრძელდება. რამდენად გაუმჯობესდა მეორე ნაწილი წინასთან შედარებით?',
    date: '16 მაისი, 2024',
    comments: 8,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'GUIDE',
    title: 'როგორ ავარჩიოთ საუკეთესო სათამაშო კომპიუტერი?',
    excerpt: 'მეგზური მათთვის, ვისაც სურს მაქსიმალური წარმადობა მისაღებ ფასად.',
    date: '12 მაისი, 2024',
    comments: 15,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop'
  }
];

const BRANDS = ['STEAM', 'EPIC GAMES', 'UBISOFT', 'EA', 'ROCKSTAR GAMES', 'BANDAI NAMCO', 'SEGA', 'CD PROJEKT RED'];

export default function App() {
  const [activeTab, setActiveTab] = useState('მთავარი');

  return (
    <div className="min-h-screen bg-[#030712] font-sans selection:bg-primary-500 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <nav className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Gamepad2 className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">
                ALLGAMES<span className="text-indigo-500">.GE</span>
              </span>
            </div>

            <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-400">
              {['მთავარი', 'ახალი თამაშები', 'კატეგორიები', 'შეთავაზებები', 'სიახლეები', 'ფორუმი'].map((item) => (
                <li 
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`cursor-pointer hover:text-white transition-colors relative ${activeTab === item ? 'text-white' : ''}`}
                >
                  {item}
                  {activeTab === item && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-[31px] left-0 right-0 h-[2px] bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
            <div className="relative p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-gray-400" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-indigo-600 rounded-full text-[10px] flex items-center justify-center font-bold">2</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600/10 border border-indigo-500/20 rounded-lg text-sm font-medium hover:bg-indigo-600/20 transition-all duration-300">
              <User className="w-4 h-4 text-indigo-400" />
              <span>შესვლა</span>
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1920&auto=format&fit=crop" 
              alt="Elden Ring Hero"
              className="w-full h-full object-cover opacity-60 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/20 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="text-indigo-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Featured Game</span>
            <h1 className="text-7xl md:text-8xl font-display font-black leading-none mb-4 tracking-tighter text-glow">
                ELDEN RING
              </h1>
              <h2 className="text-3xl md:text-4xl text-gray-400 font-display font-bold mb-8 items-center flex gap-4 uppercase">
                Shadow of the Erdtree
              </h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
                ელდენ რინგის ახალი DLC უკვე გამოსულია. შეუერთდით ახალ თავგადასავალს და აღმოაჩინეთ ახალი სამყარო!
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-3 px-8 py-4 bg-indigo-600 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-95">
                  <ShoppingCart className="w-5 h-5" />
                  <span>ყიდვა 89.99 ₾</span>
                </button>
                <button className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-bold text-lg hover:bg-white/10 transition-all group active:scale-95">
                  <span>დეტალურად</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Slider Pagination */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${i === 1 ? 'w-10 bg-indigo-500' : 'w-4 bg-white/20'}`} 
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <button className="p-4 glass rounded-lg hover:bg-indigo-600/20 group transition-all">
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </button>
            <button className="p-4 glass rounded-lg hover:bg-indigo-600/20 group transition-all">
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-bold">კატეგორიები</h2>
            <button className="flex items-center gap-2 text-indigo-400 text-sm font-bold group">
              ყველა კატეგორია <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group p-6 glass rounded-2xl cursor-pointer hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all text-center flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:text-white group-hover:bg-indigo-500 transition-all duration-300">
                  <cat.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Popular Games Section */}
        <section className="py-12 max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-bold">პოპულარული თამაშები</h2>
            <button className="flex items-center gap-2 text-indigo-400 text-sm font-bold group">
              ყველა თამაში <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {POPULAR_GAMES.map((game, idx) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-white/5 group-hover:border-indigo-500/50 transition-all">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-3 bg-indigo-600 rounded-xl shadow-lg hover:scale-110 transition-transform">
                      <ShoppingCart className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <h3 className="font-bold text-sm mb-1 truncate">{game.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-400 font-bold">{game.price} ₾</span>
                  <div className="flex items-center gap-2">
                     <button className="p-1 hover:bg-white/10 rounded">
                        <ShoppingCart className="w-4 h-4 text-gray-500" />
                     </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Blog / News Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-bold">ახალი ამბები</h2>
            <button className="flex items-center gap-2 text-indigo-400 text-sm font-bold group">
              ყველა სიახლე <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-white/5 group-hover:border-indigo-500/50 transition-all">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-indigo-600 rounded-lg text-[10px] font-bold tracking-widest">
                    {post.category}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-6 text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-12 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-8 py-4">
              {BRANDS.map((brand) => (
                <span key={brand} className="text-xl font-display font-black tracking-tighter text-gray-600 hover:text-gray-300 cursor-default transition-all duration-300">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Gamepad2 className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">
                ALLGAMES<span className="text-indigo-500">.GE</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              მოგესალმებით საქართველოში ნომერ პირველ თამაშების მაღაზიაში. ჩვენთან ნახავთ ყველაზე ექსკლუზიურ შეთავაზებებს.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">მაღაზია</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">ახალი თამაშები</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">პოპულარული</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">შეთავაზებები</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">წინასწარი შეკვეთები</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">მხარდაჭერა</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">დახმარება</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">ანგარიშის მართვა</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">შეკვეთის სტატუსი</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">დაბრუნება და ანაზღაურება</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">გამოიწერეთ სიახლეები</h4>
            <p className="text-sm text-gray-400 mb-6">მიიღეთ ინფორმაცია ახალი თამაშებისა და ფასდაკლებების შესახებ.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email მისამართი" 
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="p-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <p>© 2024 AllGames.ge. ყველა უფლება დაცულია.</p>
          <div className="flex items-center gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">წესები და პირობები</span>
            <span className="hover:text-white cursor-pointer transition-colors">კონფიდენციალურობა</span>
            <span className="hover:text-white cursor-pointer transition-colors">კონტაქტი</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

