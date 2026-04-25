/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
  Youtube,
  Menu,
  X,
  Home,
  LayoutGrid,
  Star,
  Lock,
  Settings,
  LogOut,
  Package,
  ShieldAlert,
  PlusCircle,
  BarChart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { CATEGORIES, POPULAR_GAMES, ALL_GAMES } from './data';

const HERO_SLIDES = [
  {
    id: 1,
    title: 'ELDEN RING',
    subtitle: 'Shadow of the Erdtree',
    description: 'ელდენ რინგის ახალი DLC უკვე გამოსულია. შეუერთდით ახალ თავგადასავალს და აღმოაჩინეთ ახალი სამყარო!',
    price: '89.99',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2778580/library_hero.jpg'
  },
  {
    id: 2,
    title: 'CYBERPUNK 2077',
    subtitle: 'Phantom Liberty',
    description: 'დაბრუნდით Night City-ში ახალი შპიონური თრილერის დამატებით. გადაარჩინეთ NUSA-ს პრეზიდენტი.',
    price: '79.99',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2138330/library_hero.jpg'
  },
  {
    id: 3,
    title: 'GHOST OF TSUSHIMA',
    subtitle: 'Director\'s Cut',
    description: 'განიცადეთ ფეოდალური იაპონიის სილამაზე და იბრძოლეთ ცუშიმას დასაცავად.',
    price: '119.99',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/library_hero.jpg'
  },
  {
    id: 4,
    title: 'RED DEAD REDEMPTION 2',
    subtitle: 'Outlaws for Life',
    description: 'ამერიკის დაუნდობელი გულში გადარჩენის ეპიკური ისტორია. განიცადეთ არტურ მორგანის თავგადასავალი.',
    price: '59.99',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/library_hero.jpg'
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

function GameDetails({ game, onBack, onAddToCart }: { game: any; onBack: () => void; onAddToCart: (game: any) => void }) {
  if (!game) return null;
  return (
    <div className="py-8 lg:py-12 max-w-7xl mx-auto px-4 md:px-8">
      {/* Back Button */}
      <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 md:mb-10 transition-colors group">
        <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </div>
        <span className="font-medium">უკან დაბრუნება</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-8 lg:gap-16">
        <div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[3/4] mb-6 sticky top-28">
            <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-black mb-4 uppercase tracking-tighter">{game.title}</h1>
          <div className="flex flex-wrap items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
            <span className="bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">{game.genre}</span>
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full">{game.platform}</span>
            <div className="flex items-center gap-1.5 bg-yellow-500/10 px-3 py-1.5 rounded-full">
               <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
               <span className="text-xs font-bold text-yellow-500">{game.rating}</span>
               <span className="text-[10px] text-yellow-500/70 ml-1">({game.reviewsCount} შეფასება)</span>
            </div>
          </div>
          <p className="text-gray-300 text-sm lg:text-lg leading-relaxed mb-10 pb-10 border-b border-white/10">
            {game.title} არის ერთ-ერთი ყველაზე პოპულარული და მოთხოვნადი თამაში თავის ჟანრში. განიცადეთ დაუვიწყარი თავგადასავალი, აღმოაჩინეთ ახალი სამყაროები და შეებრძოლეთ უამრავ მტერს საოცარი გრაფიკისა და გეიმფლეის თანხლებით. ეს არ არის უბრალოდ თამაში, ეს არის გამოცდილება, რომელიც დაგამახსოვრდებათ.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-10">
            <div>
               <h3 className="text-lg font-bold mb-4 font-display flex items-center gap-2 text-white">
                 <Settings className="w-5 h-5 text-indigo-400" />
                 სისტემური მოთხოვნები
               </h3>
               <div className="bg-white/5 p-5 lg:p-6 rounded-2xl border border-white/10 space-y-4 text-sm text-gray-400">
                 <p className="flex flex-col gap-1"><strong className="text-gray-300 text-xs uppercase tracking-wider">OS</strong> Windows 10/11 64-bit</p>
                 <p className="flex flex-col gap-1"><strong className="text-gray-300 text-xs uppercase tracking-wider">Processor</strong> Intel Core i5-8400 / AMD Ryzen 3 3300X</p>
                 <p className="flex flex-col gap-1"><strong className="text-gray-300 text-xs uppercase tracking-wider">Memory</strong> 12 GB RAM</p>
                 <p className="flex flex-col gap-1"><strong className="text-gray-300 text-xs uppercase tracking-wider">Graphics</strong> NVIDIA GeForce GTX 1060 / AMD Radeon</p>
                 <p className="flex flex-col gap-1"><strong className="text-gray-300 text-xs uppercase tracking-wider">Storage</strong> 60 GB SSD</p>
               </div>
            </div>
            <div>
               <h3 className="text-lg font-bold mb-4 font-display flex items-center gap-2 text-white">
                 <MessageSquare className="w-5 h-5 text-indigo-400" />
                 ბოლო შეფასებები
               </h3>
               <div className="space-y-4">
                 {[1, 2].map((i) => (
                   <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/10">
                     <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <User className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-sm text-gray-200">Gamer_GE_{Math.floor(Math.random() * 1000)}</span>
                        </div>
                        <div className="flex">
                            {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
                        </div>
                     </div>
                     <p className="text-sm text-gray-400 leading-relaxed">
                         ნამდვილად საოცარი გამოცდილებაა, გრაფიკა და გეიმფლეი უმაღლეს დონეზეა. რეკომენდაციას ვუწევ ყველას!
                     </p>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-10 p-6 lg:p-8 bg-indigo-900/20 border border-indigo-500/30 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <span className="text-4xl lg:text-5xl font-black text-white font-display z-10">{game.price} <span className="text-indigo-400 text-2xl lg:text-3xl">₾</span></span>
            <button 
              onClick={() => onAddToCart(game)}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 py-4 lg:py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl lg:rounded-2xl font-bold text-lg transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] z-10"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>კალათაში დამატება</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AllGamesView({ onBack, onGameClick, onAddToCart }: { onBack: () => void; onGameClick: (id: number) => void; onAddToCart: (game: any) => void }) {
  return (
    <div className="py-8 lg:py-12 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
          <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </div>
          <span className="font-medium">მთავარზე დაბრუნება</span>
        </button>
      </div>
      
      <div className="mb-10 block">
        <h1 className="text-3xl lg:text-5xl font-display font-black uppercase tracking-tight text-white mb-2">ყველა თამაში</h1>
        <p className="text-gray-400">აღმოაჩინეთ საუკეთესო თამაშები ჩვენს უზარმაზარ კოლექციაში. (სულ: {ALL_GAMES.length})</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
        <AnimatePresence mode="popLayout">
          {ALL_GAMES.map((game, idx) => (
            <motion.div
              key={game.id}
              layoutId={`game-all-${game.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="group relative cursor-pointer"
              onClick={() => onGameClick(game.id)}
            >
              <div className="relative aspect-[3/4] rounded-xl lg:rounded-2xl overflow-hidden mb-3 lg:mb-4 border border-white/5 group-hover:border-indigo-500/50 transition-all">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
                
                <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(game);
                    }}
                    className="p-3 bg-indigo-600 rounded-xl shadow-lg hover:scale-110 transition-transform"
                  >
                    <ShoppingCart className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onGameClick(game.id);
                    }}
                    className="p-3 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:scale-110 hover:bg-white/20 transition-all"
                  >
                    <span className="text-xs font-bold px-2">დეტალები</span>
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-[10px] lg:text-sm mb-1 truncate">{game.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-indigo-400 font-bold text-xs lg:text-base">{game.price} ₾</span>
                <div className="flex items-center gap-2">
                   <button 
                     onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(game);
                     }}
                     className="p-1 hover:bg-white/10 rounded lg:hidden"
                   >
                      <ShoppingCart className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500 hover:text-indigo-400 transition-colors" />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('მთავარი');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('ყველა');
  const [selectedGenre, setSelectedGenre] = useState('ყველა');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
  const [isAllGamesPage, setIsAllGamesPage] = useState(false);

  // Auth state
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [currentUser, setCurrentUser] = useState<{username: string, role: 'admin' | 'user'} | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginUsername.trim().length === 0) {
      setLoginError('შემოიყვანეთ მომხმარებლის სახელი');
      return;
    }
    
    const role = loginUsername.toLowerCase() === 'admin' ? 'admin' : 'user';
    setCurrentUser({ 
      username: loginUsername, 
      role: role 
    });
    if (role === 'admin') {
      setActiveTab('მართვის პანელი');
    }
    setIsLoginOpen(false);
    setLoginError('');
    setLoginUsername('');
    setLoginPassword('');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsProfileOpen(false);
    if (activeTab === 'მართვის პანელი') {
      setActiveTab('მთავარი');
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const platforms = ['ყველა', 'PC', 'PlayStation', 'Multi'];
  const genres = ['ყველა', 'Action', 'RPG', 'Adventure', 'Racing', 'Sports', 'Shooting'];

  const searchResults = ALL_GAMES.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const filteredGames = ALL_GAMES.filter(game => {
    const matchPlatform = selectedPlatform === 'ყველა' || game.platform === selectedPlatform;
    const matchGenre = selectedGenre === 'ყველა' || game.genre === selectedGenre;
    const matchSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchPlatform && matchGenre && matchSearch;
  });

  const addToCart = (game: any) => {
    setCartItems(prev => [...prev, { ...game, cartId: Math.random() }]);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId: number) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const cartTotal = cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

  const catMap: Record<string, string> = {
    'მოქმედებითი': 'Action',
    'სათავგადასავლო': 'Adventure',
    'როლური': 'RPG',
    'სროლები': 'Shooting',
    'სარბოლი': 'Racing',
    'მულტიპლეიერი': 'Multiplayer',
    'სპორტი': 'Sports'
  };

  const handleCategoryClick = (catName: string) => {
    const englishGenre = catMap[catName] || 'ყველა';
    setSelectedGenre(englishGenre);
    setSelectedPlatform('ყველა');
    document.getElementById('popular-games')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030712] font-sans selection:bg-primary-500 selection:text-white pb-20 lg:pb-0">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 lg:h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-12">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-400" />
            </button>
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Gamepad2 className="text-white w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <span className="text-lg lg:text-2xl font-display font-bold tracking-tighter">
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

          <div className="flex items-center gap-2 lg:gap-4">
            <div className="relative hidden sm:block">
              <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1.5 focus-within:border-indigo-500 focus-within:bg-white/10 transition-all">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="ძიება..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  className="bg-transparent text-sm text-white focus:outline-none w-32 focus:w-48 transition-all"
                />
              </div>
              
              <AnimatePresence>
                {isSearchFocused && searchQuery.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-12 right-0 w-80 bg-[#0a0f1c] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    {searchResults.length > 0 ? (
                      <div className="max-h-96 overflow-y-auto p-2">
                        {searchResults.map(game => (
                          <div 
                            key={game.id} 
                            className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors" 
                            onClick={() => {
                              setSelectedGameId(game.id);
                              setSearchQuery('');
                              setIsSearchFocused(false);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                          >
                            <img src={game.image} alt={game.title} className="w-10 h-14 object-cover rounded" />
                            <div>
                              <h4 className="text-sm font-bold text-white mb-0.5">{game.title}</h4>
                              <p className="text-xs text-indigo-400 font-bold">{game.price} ₾</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-sm text-gray-400">
                        თამაში ვერ მოიძებნა
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div 
              className="relative p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5 text-gray-400" />
              {cartItems.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-indigo-600 rounded-full text-[10px] flex items-center justify-center font-bold">
                  {cartItems.length}
                </span>
              )}
            </div>
            {currentUser ? (
              <button 
                onClick={() => setIsProfileOpen(true)}
                className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-indigo-600/10 border border-indigo-500/20 rounded-lg text-xs lg:text-sm font-medium hover:bg-indigo-600/20 transition-all duration-300"
              >
                <User className="w-4 h-4 text-indigo-400" />
                <span className="hidden sm:inline">{currentUser.username}</span>
              </button>
            ) : (
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-indigo-600/10 border border-indigo-500/20 rounded-lg text-xs lg:text-sm font-medium hover:bg-indigo-600/20 transition-all duration-300"
              >
                <User className="w-4 h-4 text-indigo-400" />
                <span className="hidden sm:inline">შესვლა</span>
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-80 bg-[#070b14] z-[70] p-6 flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <Gamepad2 className="text-white w-5 h-5" />
                  </div>
                  <span className="text-xl font-display font-bold tracking-tighter">
                    ALLGAMES
                  </span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-white/5 rounded-full">
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="space-y-6 flex-1 overflow-y-auto">
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">ნავიგაცია</h4>
                  <ul className="space-y-2">
                    {['მთავარი', 'ახალი თამაშები', 'კატეგორიები', 'შეთავაზებები', 'სიახლეები', 'ფორუმი'].map((item) => (
                      <li 
                        key={item}
                        className={`text-lg font-medium p-3 rounded-xl transition-all cursor-pointer ${activeTab === item ? 'bg-indigo-600/10 text-white' : 'text-gray-400 hover:bg-white/5'}`}
                        onClick={() => { setActiveTab(item); setIsMenuOpen(false); }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">ანგარიში</h4>
                  {currentUser ? (
                    <button 
                      onClick={() => { setIsMenuOpen(false); setIsProfileOpen(true); }}
                      className="w-full flex items-center gap-3 p-4 bg-white/5 rounded-xl text-gray-300 hover:bg-white/10 transition-all"
                    >
                      <User className="w-5 h-5 text-indigo-400" />
                      <span>{currentUser.username} {currentUser.role === 'admin' ? '(Admin)' : ''}</span>
                    </button>
                  ) : (
                    <button 
                      onClick={() => { setIsMenuOpen(false); setIsLoginOpen(true); }}
                      className="w-full flex items-center gap-3 p-4 bg-white/5 rounded-xl text-gray-300 hover:bg-white/10 transition-all"
                    >
                      <User className="w-5 h-5 text-indigo-400" />
                      <span>შესვლა</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                 <div className="flex items-center justify-center gap-6">
                    <Facebook className="w-5 h-5 text-gray-400 cursor-pointer" />
                    <Instagram className="w-5 h-5 text-gray-400 cursor-pointer" />
                    <Twitter className="w-5 h-5 text-gray-400 cursor-pointer" />
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:w-96 bg-[#070b14] z-[70] p-6 flex flex-col shadow-2xl border-l border-white/5"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-xl font-display font-bold">კალათა</h2>
                  <span className="bg-indigo-600/20 text-indigo-400 py-0.5 px-2 rounded-full text-xs font-bold">
                    {cartItems.length}
                  </span>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/5 rounded-full">
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-4">
                    <ShoppingCart className="w-12 h-12 opacity-20" />
                    <p>კალათა ცარიელია</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.cartId} className="flex gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
                      <img src={item.image} alt={item.title} className="w-16 h-20 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h4 className="font-bold text-sm mb-1 line-clamp-1">{item.title}</h4>
                        <p className="text-indigo-400 font-bold text-sm mb-2">{item.price} ₾</p>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-xs text-red-400 hover:text-red-300 transition-colors"
                        >
                          წაშლა
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="pt-6 mt-6 border-t border-white/5">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400">ჯამი:</span>
                    <span className="text-2xl font-bold font-display">{cartTotal} <span className="text-indigo-400 text-lg">₾</span></span>
                  </div>
                  <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all active:scale-[0.98]">
                    ყიდვა
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoginOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#0a0f1c] z-[90] p-6 lg:p-8 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-display font-bold">ავტორიზაცია</h2>
                <button onClick={() => setIsLoginOpen(false)} className="p-2 hover:bg-white/5 rounded-full">
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                {loginError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium">
                    {loginError}
                  </div>
                )}
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-400">მომხმარებელი</label>
                  <input 
                    type="text" 
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="admin ან user"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-400">პაროლი</label>
                  <input 
                    type="password" 
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="admin123 ან user123"
                  />
                </div>

                <div className="text-xs text-gray-500 pt-2 flex flex-col gap-1">
                  <span>ჩაწერეთ ნებისმიერი სახელი და პაროლი შესასვლელად.</span>
                  <span>ადმინის პანელისთვის ჩაწერეთ: <strong>admin</strong></span>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all active:scale-[0.98] mt-4"
                >
                  შესვლა
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Profile/Admin Panel Drawer */}
      <AnimatePresence>
        {isProfileOpen && currentUser && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsProfileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:w-96 bg-[#070b14] z-[90] p-6 flex flex-col shadow-2xl border-l border-white/5"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600/20 rounded-full flex items-center justify-center">
                    {currentUser.role === 'admin' ? (
                      <ShieldAlert className="w-5 h-5 text-indigo-400" />
                    ) : (
                      <User className="w-5 h-5 text-indigo-400" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">{currentUser.username}</h2>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                      {currentUser.role === 'admin' ? 'ადმინისტრატორი' : 'მომხმარებელი'}
                    </span>
                  </div>
                </div>
                <button onClick={() => setIsProfileOpen(false)} className="p-2 hover:bg-white/5 rounded-full">
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2">
                {currentUser.role === 'admin' ? (
                  <>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">მართვის პანელი</h3>
                    <button 
                      onClick={() => {
                        setIsProfileOpen(false);
                        setActiveTab('მართვის პანელი');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full flex items-center justify-between p-3 lg:p-4 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                        <BarChart className="w-5 h-5 text-indigo-400" />
                        <span className="font-medium text-sm">სტატისტიკა და მართვა</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 lg:p-4 rounded-xl hover:bg-white/5 transition-colors group">
                      <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                        <PlusCircle className="w-5 h-5 text-indigo-400" />
                        <span className="font-medium text-sm">თამაშის დამატება</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 lg:p-4 rounded-xl hover:bg-white/5 transition-colors group">
                      <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                        <Settings className="w-5 h-5 text-indigo-400" />
                        <span className="font-medium text-sm">სისტემის პარამეტრები</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </>
                ) : (
                  <>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">ჩემი პროფილი</h3>
                    <button className="w-full flex items-center justify-between p-3 lg:p-4 rounded-xl hover:bg-white/5 transition-colors group">
                      <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                        <Package className="w-5 h-5 text-indigo-400" />
                        <span className="font-medium text-sm">ჩემი თამაშები</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 lg:p-4 rounded-xl hover:bg-white/5 transition-colors group">
                      <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                        <Settings className="w-5 h-5 text-indigo-400" />
                        <span className="font-medium text-sm">პარამეტრები</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-white/5">
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-xl font-bold transition-all active:scale-[0.98]"
                >
                  <LogOut className="w-4 h-4" />
                  <span>გამოსვლა</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Nav (Mobile Only) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass h-20 px-6 flex items-center justify-between pointer-events-auto border-t border-white/10">
        {[
          { id: '1', label: 'მთავარი', icon: Home, action: () => window.scrollTo({ top: 0 }) },
          { id: '2', label: 'კატეგორიები', icon: LayoutGrid, action: () => document.getElementById('popular-games')?.scrollIntoView({ behavior: 'smooth' }) },
          { id: '3', label: 'ძიება', icon: Search, action: () => window.scrollTo({ top: 0 }) },
          { id: '4', label: 'პროფილი', icon: User, action: () => currentUser ? setIsProfileOpen(true) : setIsLoginOpen(true) },
        ].map((item) => (
          <button key={item.id} onClick={item.action} className="flex flex-col items-center gap-1 group">
            <item.icon className="w-6 h-6 text-gray-400 group-hover:text-indigo-400 transition-colors" />
            <span className="text-[10px] text-gray-500 group-hover:text-white transition-colors">{item.label}</span>
          </button>
        ))}
      </div>

      <main className="pt-16 lg:pt-20">
        {selectedGameId ? (
          <GameDetails 
            game={ALL_GAMES.find(g => g.id === selectedGameId) || POPULAR_GAMES.find(g => g.id === selectedGameId)} 
            onBack={() => setSelectedGameId(null)} 
            onAddToCart={addToCart} 
          />
        ) : activeTab === 'მართვის პანელი' && currentUser?.role === 'admin' ? (
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <h1 className="text-3xl lg:text-5xl font-display font-black uppercase text-white mb-8 border-b border-white/10 pb-4">
              ადმინისტრატორის პანელი
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { label: 'მომხმარებლები', val: '1,245', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                { label: 'შემოსავალი', val: '12,450 ₾', icon: BarChart, color: 'text-green-400', bg: 'bg-green-500/10' },
                { label: 'თამაშები ბაზაში', val: ALL_GAMES.length, icon: Gamepad2, color: 'text-purple-400', bg: 'bg-purple-500/10' },
              ].map((stat, i) => (
                <div key={i} className="glass p-6 rounded-2xl flex items-center justify-between border border-white/5">
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-1">{stat.label}</p>
                    <p className="text-3xl font-display font-bold text-white">{stat.val}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center \${stat.bg} \${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl border border-white/5 p-6 lg:p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <Gamepad2 className="w-5 h-5 text-indigo-400" />
                  თამაშების მართვა
                </h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-bold transition-all">
                  <PlusCircle className="w-4 h-4" />
                  დამატება
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-500 text-sm uppercase tracking-wider">
                      <th className="pb-4 font-medium">თამაში</th>
                      <th className="pb-4 font-medium">ჟანრი</th>
                      <th className="pb-4 font-medium">ფასი</th>
                      <th className="pb-4 font-medium text-right">მოქმედება</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {ALL_GAMES.slice(0, 10).map((game) => (
                      <tr key={game.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 flex items-center gap-3">
                          <img src={game.image} alt={game.title} className="w-10 h-14 object-cover rounded shadow-lg" />
                          <span className="font-bold text-gray-200">{game.title}</span>
                        </td>
                        <td className="py-4 text-gray-400">{game.genre}</td>
                        <td className="py-4 font-bold text-indigo-400">{game.price} ₾</td>
                        <td className="py-4 text-right">
                          <button className="text-gray-400 hover:text-white px-3 py-1 bg-white/5 hover:bg-white/10 rounded mr-2 transition-colors">რედაქტირება</button>
                          <button className="text-red-400 hover:text-red-300 px-3 py-1 bg-red-500/10 hover:bg-red-500/20 rounded transition-colors">წაშლა</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : isAllGamesPage ? (
          <AllGamesView 
             onBack={() => setIsAllGamesPage(false)}
             onGameClick={(id) => {
                setSelectedGameId(id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
             onAddToCart={addToCart}
          />
        ) : (
          <>
            {/* Hero Section */}
        <section className="relative h-[70vh] lg:h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AnimatePresence>
              <motion.img 
                key={HERO_SLIDES[currentSlide].id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.6, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                src={HERO_SLIDES[currentSlide].image} 
                alt={HERO_SLIDES[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/20 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div 
                key={HERO_SLIDES[currentSlide].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl text-center lg:text-left"
              >
                <span className="text-indigo-400 font-bold tracking-[0.2em] text-[10px] lg:text-xs uppercase mb-4 block">Featured Game</span>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-black leading-none mb-4 tracking-tighter text-glow uppercase">
                  {HERO_SLIDES[currentSlide].title}
                </h1>
                <h2 className="text-lg md:text-3xl lg:text-4xl text-gray-400 font-display font-bold mb-6 lg:mb-8 items-center justify-center lg:justify-start flex gap-4 uppercase">
                  {HERO_SLIDES[currentSlide].subtitle}
                </h2>
                <p className="text-sm lg:text-lg text-gray-300 mb-8 lg:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {HERO_SLIDES[currentSlide].description}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button 
                    onClick={() => addToCart({ title: `${HERO_SLIDES[currentSlide].title}: ${HERO_SLIDES[currentSlide].subtitle}`, price: HERO_SLIDES[currentSlide].price, image: HERO_SLIDES[currentSlide].image, cartId: Math.random() })}
                    className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-3 lg:py-4 bg-indigo-600 rounded-lg font-bold text-sm lg:text-lg hover:bg-indigo-700 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-95"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>ყიდვა {HERO_SLIDES[currentSlide].price} ₾</span>
                  </button>
                  <button 
                    onClick={() => {
                        const heroTitle = HERO_SLIDES[currentSlide].title.toLowerCase();
                        const match = POPULAR_GAMES.find(g => heroTitle.includes(g.title.toLowerCase()) || g.title.toLowerCase().includes(heroTitle));
                        if(match) {
                            setSelectedGameId(match.id);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                            // Link to first game as fallback if mock data is mismatched
                            setSelectedGameId(POPULAR_GAMES[0].id);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3 lg:py-4 bg-white/5 border border-white/10 rounded-lg font-bold text-sm lg:text-lg hover:bg-white/10 transition-all group active:scale-95"
                  >
                    <span>დეტალურად</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Pagination */}
          <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 lg:gap-4 z-10 hidden sm:flex">
            {HERO_SLIDES.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentSlide(i)}
                className={`h-1 lg:h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 lg:w-10 bg-indigo-500' : 'w-3 lg:w-4 bg-white/20 hover:bg-white/40'}`} 
              />
            ))}
          </div>

          {/* Navigation Arrows (Desktop Only) */}
          <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-10">
            <button 
              onClick={() => setCurrentSlide(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
              className="p-4 glass rounded-lg hover:bg-indigo-600/20 group transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </button>
            <button 
              onClick={() => setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length)}
              className="p-4 glass rounded-lg hover:bg-indigo-600/20 group transition-all"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 lg:py-24 max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-8 lg:mb-12">
            <h2 className="text-xl lg:text-3xl font-display font-bold">კატეგორიები</h2>
            <button 
              onClick={() => handleCategoryClick('ყველა')}
              className="flex items-center gap-2 text-indigo-400 text-xs lg:text-sm font-bold group"
            >
              ყველა <span className="hidden sm:inline">კატეგორია</span> <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 lg:gap-4">
            {CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                onClick={() => handleCategoryClick(cat.name)}
                className="group p-4 lg:p-6 glass rounded-xl lg:rounded-2xl cursor-pointer hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all text-center flex flex-col items-center gap-3 lg:gap-4"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-indigo-500/10 rounded-lg lg:rounded-xl flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:text-white group-hover:bg-indigo-500 transition-all duration-300">
                  <cat.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <span className="text-[10px] lg:text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Popular Games Section */}
        <section id="popular-games" className="py-8 lg:py-12 max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24">
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <h2 className="text-xl lg:text-3xl font-display font-bold">პოპულარული თამაშები</h2>
            <button 
              onClick={() => {
                 setIsAllGamesPage(true);
                 window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 text-indigo-400 text-xs lg:text-sm font-bold group"
            >
              ყველა <span className="hidden sm:inline">თამაში</span> <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8 lg:mb-12">
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 overflow-x-auto no-scrollbar max-w-full">
              {platforms.map(platform => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all whitespace-nowrap ${
                    selectedPlatform === platform 
                      ? 'bg-indigo-600 text-white shadow-lg' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 overflow-x-auto no-scrollbar max-w-full">
              {genres.map(genre => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all whitespace-nowrap ${
                    selectedGenre === genre 
                      ? 'bg-indigo-600 text-white shadow-lg' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6">
            <AnimatePresence mode="popLayout">
                {filteredGames.slice(0, 12).map((game, idx) => (
                  <motion.div
                    key={game.id}
                    layoutId={`game-${game.id}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="group relative cursor-pointer"
                    onClick={() => {
                      setSelectedGameId(game.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                <div className="relative aspect-[3/4] rounded-xl lg:rounded-2xl overflow-hidden mb-3 lg:mb-4 border border-white/5 group-hover:border-indigo-500/50 transition-all">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
                  
                  {/* Desktop Hover Actions */}
                  <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(game);
                      }}
                      className="p-3 bg-indigo-600 rounded-xl shadow-lg hover:scale-110 transition-transform"
                    >
                      <ShoppingCart className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedGameId(game.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="p-3 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:scale-110 hover:bg-white/20 transition-all"
                    >
                      <span className="text-xs font-bold px-2">დეტალები</span>
                    </button>
                  </div>
                </div>
                <h3 className="font-bold text-[10px] lg:text-sm mb-1 truncate">{game.title}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-[10px] lg:text-xs text-gray-300 font-bold">{game.rating}</span>
                  <span className="text-[8px] lg:text-[10px] text-gray-500">({game.reviewsCount})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-400 font-bold text-xs lg:text-base">{game.price} ₾</span>
                  <div className="flex items-center gap-2">
                     <button 
                       onClick={(e) => {
                          e.stopPropagation();
                          addToCart(game);
                       }}
                       className="p-1 hover:bg-white/10 rounded lg:hidden"
                     >
                        <ShoppingCart className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500 hover:text-indigo-400 transition-colors" />
                     </button>
                  </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-12 lg:py-20 text-gray-500 border border-white/5 rounded-2xl bg-white/[0.02]"
            >
              ამ კრიტერიუმებით თამაშები არ მოიძებნა.
            </motion.div>
          )}
        </section>

        {/* Blog / News Section */}
        <section className="py-12 lg:py-24 max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-8 lg:mb-12">
            <h2 className="text-xl lg:text-3xl font-display font-bold">ახალი ამბები</h2>
            <button className="flex items-center gap-2 text-indigo-400 text-xs lg:text-sm font-bold group">
              ყველა <span className="hidden sm:inline">სიახლე</span> <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {BLOG_POSTS.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer glass p-4 lg:p-0 lg:bg-transparent lg:border-none lg:backdrop-blur-none rounded-2xl lg:rounded-none"
              >
                <div className="relative aspect-video rounded-xl lg:rounded-3xl overflow-hidden mb-4 lg:mb-6 border border-white/5 group-hover:border-indigo-500/50 transition-all">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 lg:top-4 lg:left-4 px-2 lg:px-3 py-1 bg-indigo-600 rounded-lg text-[8px] lg:text-[10px] font-bold tracking-widest">
                    {post.category}
                  </div>
                </div>
                <h3 className="text-sm lg:text-xl font-bold mb-2 lg:mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-xs lg:text-sm mb-4 lg:mb-6 line-clamp-2 hidden sm:block">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 lg:gap-6 text-[10px] lg:text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-8 lg:py-12 border-t border-white/5 bg-white/[0.01] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 lg:gap-8 py-4">
              {BRANDS.map((brand) => (
                <span key={brand} className="text-sm lg:text-xl font-display font-black tracking-tighter text-gray-600 hover:text-gray-300 cursor-default transition-all duration-300">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>
        </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#020617] border-t border-white/5 pt-12 lg:pt-20 pb-12 lg:pb-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 lg:mb-8">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Gamepad2 className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">
                ALLGAMES<span className="text-indigo-500">.GE</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 lg:mb-8">
              მოგესალმებით საქართველოში ნომერ პირველ თამაშების მაღაზიაში. ჩვენთან ნახავთ ყველაზე ექსკლუზიურ შეთავაზებებს.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <button key={i} className="w-9 h-9 lg:w-10 lg:h-10 rounded-full glass flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="hidden sm:block">
            <h4 className="text-base lg:text-lg font-bold mb-6 lg:mb-8 text-gray-200">მაღაზია</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">ახალი თამაშები</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">პოპულარული</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">შეთავაზებები</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">წინასწარი შეკვეთები</li>
            </ul>
          </div>

          <div className="hidden sm:block">
            <h4 className="text-base lg:text-lg font-bold mb-6 lg:mb-8 text-gray-200">მხარდაჭერა</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">დახმარება</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">ანგარიშის მართვა</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">შეკვეთის სტატუსი</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">დაბრუნება და ანაზღაურება</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base lg:text-lg font-bold mb-6 lg:mb-8 text-gray-200">გამოიწერეთ სიახლეები</h4>
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

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] lg:text-xs text-gray-500">
          <p>© 2024 AllGames.ge. ყველა უფლება დაცულია.</p>
          <div className="flex items-center gap-4 lg:gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">წესები</span>
            <span className="hover:text-white cursor-pointer transition-colors">კონფიდენციალურობა</span>
            <span className="hover:text-white cursor-pointer transition-colors">კონტაქტი</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

