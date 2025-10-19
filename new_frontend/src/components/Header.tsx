import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { label: 'НОВОСТИ', href: '#/news' },
    { label: 'ГАЙДЫ', href: '#/guides' },
    { label: 'МЕТА СБОРКИ', href: '#/loadouts' },
    { label: 'ОРУЖИЕ', href: '#/weapons' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1d23]/95 backdrop-blur-lg border-b border-[#ea580c]/30 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Clickable to return home */}
          <motion.a
            href="#"
            className="flex items-center gap-3 cursor-pointer group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ea580c] to-[#c2410c] rounded-lg flex items-center justify-center relative overflow-hidden group-hover:shadow-lg group-hover:shadow-[#ea580c]/30 transition-all">
                <span className="text-white text-2xl tracking-wider z-10 font-black">BF</span>
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="text-xl tracking-widest leading-none">
                BF <span className="text-[#ea580c]">META</span> HUB
              </div>
              <div className="text-[10px] text-gray-500 tracking-widest mt-0.5">ТАКТИЧЕСКАЯ БАЗА ДАННЫХ</div>
            </div>
          </motion.a>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm tracking-widest text-gray-300 hover:text-[#ea580c] transition-all duration-300 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                {/* Animated underline */}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#ea580c] rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Search - Always visible with placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative hidden md:block"
            >
              <div className="relative flex items-center">
                <Search className="absolute left-3 w-4 h-4 text-[#ea580c] pointer-events-none" />
                <input
                  type="text"
                  placeholder="Поиск..."
                  className="w-48 bg-[#242831] border border-[#ea580c]/30 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#ea580c] focus:w-64 transition-all placeholder:text-gray-500"
                />
              </div>
            </motion.div>

            {/* Mobile Search Icon */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:hidden w-10 h-10 bg-[#242831] border border-[#ea580c]/30 rounded-lg flex items-center justify-center hover:bg-[#ea580c] hover:border-[#ea580c] transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5 text-[#ea580c] group-hover:text-white transition-colors" />
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 bg-[#242831] border border-[#ea580c]/30 rounded-lg flex items-center justify-center hover:bg-[#ea580c] hover:border-[#ea580c] transition-colors group"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-[#ea580c] group-hover:text-white transition-colors" />
              ) : (
                <Menu className="w-5 h-5 text-[#ea580c] group-hover:text-white transition-colors" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-[#ea580c]/20"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-sm tracking-widest text-gray-300 hover:text-[#ea580c] hover:bg-[#242831] transition-all py-3 px-4 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>


    </header>
  );
}
