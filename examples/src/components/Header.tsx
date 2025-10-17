import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { label: 'META LOADOUTS', href: '#loadouts' },
    { label: 'WEAPONS', href: '#weapons' },
    { label: 'NEWS', href: '#news' },
    { label: 'GUIDES', href: '#guides' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-lg border-b border-[#F97316]">
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
              <div className="w-12 h-12 bg-[#F97316] flex items-center justify-center relative overflow-hidden group-hover:bg-[#ea6a0f] transition-colors">
                <span className="text-black text-2xl tracking-wider z-10">BF</span>
                {/* Diagonal stripe */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
              </div>
              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-[#F97316]"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-[#F97316]"></div>
            </div>
            <div>
              <div className="text-xl tracking-widest leading-none">
                BF <span className="text-[#F97316]">META</span> HUB
              </div>
              <div className="text-[10px] text-gray-500 tracking-widest mt-0.5">TACTICAL DATABASE</div>
            </div>
          </motion.a>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm tracking-widest text-gray-300 hover:text-[#F97316] transition-all duration-300 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2, scale: 1.05 }}
              >
                {item.label}
                {/* Animated underline */}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#F97316]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                {/* Corner accents on hover */}
                <span className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity"></span>
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
                <Search className="absolute left-3 w-4 h-4 text-[#F97316] pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-48 bg-[#0A0A0A] border border-[#F97316]/50 pl-10 pr-4 py-2 text-sm tracking-wide focus:outline-none focus:border-[#F97316] focus:w-64 transition-all placeholder:text-gray-600 placeholder:uppercase placeholder:tracking-widest"
                />
              </div>
            </motion.div>

            {/* Mobile Search Icon */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:hidden w-10 h-10 border border-[#F97316]/50 flex items-center justify-center hover:bg-[#F97316] hover:border-[#F97316] transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5 text-[#F97316] group-hover:text-black transition-colors" />
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 border border-[#F97316]/50 flex items-center justify-center hover:bg-[#F97316] hover:border-[#F97316] transition-colors group"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-[#F97316] group-hover:text-black transition-colors" />
              ) : (
                <Menu className="w-5 h-5 text-[#F97316] group-hover:text-black transition-colors" />
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
              className="lg:hidden overflow-hidden border-t border-[#F97316]/30"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-sm tracking-widest text-gray-300 hover:text-[#F97316] transition-colors py-2 border-l-2 border-transparent hover:border-[#F97316] pl-4"
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

      {/* Tactical scan line effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316] to-transparent"
        animate={{
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
    </header>
  );
}
