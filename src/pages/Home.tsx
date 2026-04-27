import { Link } from 'react-router-dom';
import { Search, ArrowRight, CheckCircle2, MessageCircle, Star, Users, Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { cars } from '@/src/data/inventory';
import CarCard from '@/src/components/ui/CarCard';

export default function Home() {
  const featuredCars = cars.filter(car => car.featured).slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-navy-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center lg:text-left grid lg:grid-cols-2 items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <span className="text-[10px] bg-brand-primary/20 text-brand-primary-light px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                Premium Auto Sourcing
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter">
              Find Your Next Car with <br />
              AutoAgent <span className="text-brand-primary">ge</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Browse verified local inventory or request a custom import from the USA and Europe. Professional, transparent, and fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/inventory" className="btn-primary py-4 px-8 text-sm group">
                View Available Cars
              </Link>
              <Link to="/request-a-car" className="btn-secondary py-4 px-8 text-sm">
                Request a Specific Model
              </Link>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white tracking-tight">500+</div>
                <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Cars Sold</div>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white tracking-tight">100%</div>
                <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Transparency</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-10 bg-brand-primary opacity-10 blur-[100px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200" 
              alt="Featured Car"
              className="relative rounded-lg shadow-2xl border border-white/5"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em]">Featured Inventory</h2>
            <h3 className="text-3xl font-black text-white tracking-tight">Handpicked Quality Vehicles</h3>
          </div>
          <Link to="/inventory" className="text-xs text-brand-primary-light font-black uppercase tracking-widest hover:text-white transition-colors">
            View All 42 Cars →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0F1115] py-24 px-4 border-y border-slate-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em]">Why Choose Us</h2>
            <h3 className="text-3xl font-black text-white tracking-tight">The AutoAgent ge Difference</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 p-8 rounded border border-slate-800 hover:border-brand-primary/30 transition-all">
              <CheckCircle2 className="w-8 h-8 text-brand-primary mb-6" />
              <h4 className="text-sm font-bold text-white mb-2 tracking-tight">Verified Vehicles</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Integrated WhatsApp API & Click-to-call sticky headers to capture local Georgian mobile traffic.</p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded border border-slate-800 hover:border-brand-primary/30 transition-all">
              <TrendingUp className="w-8 h-8 text-brand-primary mb-6" />
              <h4 className="text-sm font-bold text-white mb-2 tracking-tight">Transparent Pricing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Standardized VIN reporting, 360° inspections, and clear customs status markers.</p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded border border-slate-800 hover:border-brand-primary/30 transition-all">
              <Users className="w-8 h-8 text-brand-primary mb-6" />
              <h4 className="text-sm font-bold text-white mb-2 tracking-tight">Lead Magnets</h4>
              <p className="text-xs text-slate-400 leading-relaxed">'Request a Car' concierge service for high-intent buyers seeking specific US/EU/JP imports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Request a Car section */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em]">Sourcing Service</h2>
            <h3 className="text-4xl font-black text-white tracking-tight">Can't Find Your Dream Car?</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Our sourcing department has access to dealer-only auctions and private networks worldwide. Tell us what you want, and we'll find it.
            </p>
          </div>
          <div className="bg-brand-navy-dark p-8 rounded-lg border border-slate-800">
            <form className="space-y-4">
              <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-xs focus:ring-1 focus:ring-brand-primary" placeholder="Full Name" />
              <input type="tel" className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-xs focus:ring-1 focus:ring-brand-primary" placeholder="WhatsApp / Phone" />
              <button type="submit" className="w-full btn-primary py-3 text-xs font-bold">
                Find My Car
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Bottom Bar style section */}
      <section className="bg-brand-primary h-14 flex items-center justify-between px-8 text-white font-bold text-xs sticky bottom-0 z-20">
        <div className="flex items-center space-x-8">
          <span className="hidden sm:inline">Verified History</span>
          <span className="hidden sm:inline">Flexible Financing</span>
          <span className="hidden sm:inline">160-Point Inspection</span>
        </div>
        <button className="bg-white text-brand-primary px-6 py-1.5 rounded-full font-bold">
          Free Consultation
        </button>
      </section>
    </div>
  );
}
