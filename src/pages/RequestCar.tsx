import { MessageCircle, CheckCircle2, Search, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function RequestCar() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 space-y-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary text-sm font-bold uppercase tracking-widest">
            Sourcing Service
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1]">
            Can't Find Your <br />
            <span className="text-brand-primary italic">Dream Car?</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
            Don't settle for what's just available. Let AutoAgent ge find exactly what you want from official dealers and premium auctions worldwide.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white shadow-xl rounded-xl flex items-center justify-center border border-slate-100">
                <Search className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="font-bold text-lg">Global Search</h4>
              <p className="text-sm text-slate-500">Access to USA, Europe, and Asia dealer networks.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white shadow-xl rounded-xl flex items-center justify-center border border-slate-100">
                <ShieldCheck className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="font-bold text-lg">Tech Verification</h4>
              <p className="text-sm text-slate-500">We inspect the car before you spend a single dollar.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white shadow-xl rounded-xl flex items-center justify-center border border-slate-100">
                <Zap className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="font-bold text-lg">Fast Logistics</h4>
              <p className="text-sm text-slate-500">Optimized shipping routes to get your car home faster.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white shadow-xl rounded-xl flex items-center justify-center border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="font-bold text-lg">Full Customs</h4>
              <p className="text-sm text-slate-500">We handle the entire clearance process in Georgia.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-5 blur-3xl" />
          <h2 className="text-3xl font-black mb-8 tracking-tight">Request Sourcing</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Name</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary" placeholder="Full Name" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">WhatsApp / Phone</label>
                <input type="tel" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary" placeholder="+995 ..." />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Make / Model</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary" placeholder="e.g. Audi A6" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Year Range</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary" placeholder="e.g. 2020 - 2024" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Budget (USD)</label>
                <input type="number" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary" placeholder="e.g. 45000" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Import Preference</label>
                <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary font-bold">
                  <option>Any Source</option>
                  <option>USA (Copro/IAAI)</option>
                  <option>Europe (Mobile.de)</option>
                  <option>Local Market Only</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Additional Notes</label>
              <textarea rows={3} className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary" placeholder="e.g. Specific color, Sunroof, S-Line package..."></textarea>
            </div>
            <button type="submit" className="btn-primary w-full py-5 text-lg font-black uppercase tracking-widest">
              Find My Car
            </button>
            <p className="text-center text-xs text-slate-400 font-medium">
              By submitting this form, you agree to our privacy policy and terms.
            </p>
          </form>
        </div>
      </div>

      {/* Trust Badges section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-y border-slate-100">
        <div className="text-center space-y-2">
          <div className="text-3xl font-black">24h</div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Response Time</div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-3xl font-black">100%</div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Money-back Guarantee</div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-3xl font-black">12k+</div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Network Dealers</div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-3xl font-black">5.0</div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sourcing Rating</div>
        </div>
      </div>
    </div>
  );
}
