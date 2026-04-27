import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Car } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inventory', href: '/inventory' },
    { name: 'Request a Car', href: '/request-a-car' },
    { name: 'Sell Your Car', href: '/sell-your-car' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8',
        scrolled ? 'py-3 bg-brand-navy shadow-lg border-b border-slate-800' : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center font-bold text-white">A</div>
          <span className="text-xl font-bold tracking-tighter text-white">
            AutoAgent <span className="text-brand-primary">ge</span>
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-primary',
                location.pathname === link.href ? 'text-brand-primary' : 'text-slate-400'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="px-3 py-1.5 rounded bg-brand-accent-green/10 border border-brand-accent-green/30 text-brand-accent-green text-[10px] uppercase font-black flex items-center">
            WhatsApp
          </div>
          <a
            href="tel:+995123456789"
            className="px-3 py-1.5 rounded bg-brand-primary border border-brand-primary-light text-white text-[10px] font-black uppercase"
          >
            +995 • Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-navy-dark border-t border-slate-800 absolute top-full left-0 right-0 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-semibold transition-colors',
                    location.pathname === link.href ? 'text-brand-primary' : 'text-slate-300'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 border-t border-slate-800 pt-6">
                <a
                  href="tel:+995123456789"
                  className="flex items-center gap-3 text-white font-medium"
                >
                  <Phone className="w-5 h-5 text-brand-primary" />
                  <span>+995 123 456 789</span>
                </a>
                <a
                  href="https://wa.me/995123456789"
                  target="_blank"
                  rel="no-referrer"
                  className="btn-primary w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
