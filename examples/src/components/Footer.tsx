import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f0f] border-t border-[#F97316] py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 45%, #F97316 45%, #F97316 55%, transparent 55%),
            linear-gradient(-30deg, transparent 45%, #F97316 45%, #F97316 55%, transparent 55%)
          `,
          backgroundSize: '20px 40px'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-12 bg-[#F97316]"></div>
              <span className="text-3xl tracking-wider">
                BF <span className="text-[#F97316]">META</span> HUB
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Best loadouts and guides for Battlefield 6
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#F97316' }}
                className="text-gray-400 hover:text-[#F97316] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#F97316' }}
                className="text-gray-400 hover:text-[#F97316] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#F97316' }}
                className="text-gray-400 hover:text-[#F97316] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl tracking-wider mb-4 text-[#F97316] uppercase">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors uppercase text-sm tracking-wide">
                Home
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors uppercase text-sm tracking-wide">
                Meta Loadouts
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors uppercase text-sm tracking-wide">
                Weapons
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors uppercase text-sm tracking-wide">
                News
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors uppercase text-sm tracking-wide">
                Guides
              </a>
            </nav>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl tracking-wider mb-4 text-[#F97316] uppercase">
              Resources
            </h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors uppercase text-sm tracking-wide">
                About Us
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors uppercase text-sm tracking-wide">
                Contact
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors uppercase text-sm tracking-wide">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors uppercase text-sm tracking-wide">
                Terms of Service
              </a>
            </nav>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F97316]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} BF META HUB. All rights reserved. Not affiliated with EA or DICE.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Made by the community, for the community</span>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#F97316]/20"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#F97316]/20"></div>
    </footer>
  );
}
