import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Car } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-slate-500 py-16 px-4 md:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center font-bold text-white text-xs">A</div>
            <span className="text-xl font-bold text-white tracking-tighter">
              AutoAgent <span className="text-brand-primary">ge</span>
            </span>
          </Link>
          <p className="text-xs leading-relaxed max-w-xs">
            Professional auto sourcing and sales in Georgia. Transparency, verification, and speed are the pillars of or business.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-primary transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-brand-primary transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-brand-primary transition-colors"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/inventory" className="hover:text-brand-primary transition-colors">Browse Inventory</Link></li>
            <li><Link to="/request-a-car" className="hover:text-brand-primary transition-colors">Request a Car</Link></li>
            <li><Link to="/sell-your-car" className="hover:text-brand-primary transition-colors">Sell Your Car</Link></li>
            <li><Link to="/how-it-works" className="hover:text-brand-primary transition-colors">How It Works</Link></li>
            <li><Link to="/financing" className="hover:text-brand-primary transition-colors">Financing</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
            <li><Link to="/reviews" className="hover:text-brand-primary transition-colors">User Reviews</Link></li>
            <li><Link to="/faq" className="hover:text-brand-primary transition-colors">FAQ</Link></li>
            <li><Link to="/blog" className="hover:text-brand-primary transition-colors">Blog & Guides</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-brand-primary shrink-0" />
              <span>+995 123 456 789</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-brand-primary shrink-0" />
              <span>info@autoagent.ge</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
              <span>123 Car Avenue, Tbilisi, Georgia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-wider">
        <p>© {currentYear} AutoAgent ge. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
