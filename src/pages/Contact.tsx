import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 space-y-24">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Get in Touch</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Have questions about a car or our process? Our team is ready to help you find your next vehicle.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="font-bold text-xl">Call Us</h4>
              <p className="text-slate-500 text-sm">Direct line to our sales team.</p>
              <a href="tel:+995123456789" className="block text-brand-navy font-black text-lg">+995 123 456 789</a>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-emerald-500" />
              </div>
              <h4 className="font-bold text-xl">WhatsApp</h4>
              <p className="text-slate-500 text-sm">Fast support & photo sharing.</p>
              <a href="https://wa.me/995123456789" className="block text-brand-navy font-black text-lg">Send Message</a>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-brand-accent-blue/10 rounded-2xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-brand-accent-blue" />
              </div>
              <h4 className="font-bold text-xl">Email Us</h4>
              <p className="text-slate-500 text-sm">General & business inquiries.</p>
              <a href="mailto:info@autoagent.ge" className="block text-brand-navy font-black text-lg">info@autoagent.ge</a>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-brand-navy/10 rounded-2xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-brand-navy" />
              </div>
              <h4 className="font-bold text-xl">Work Hours</h4>
              <p className="text-slate-500 text-sm">When we are available.</p>
              <div className="text-brand-navy font-black text-lg">Mon-Sat: 10:00 - 19:00</div>
            </div>
          </div>

          <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100 flex items-start gap-8">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
              <MapPin className="w-8 h-8 text-brand-primary" />
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-black">Our Showroom</h4>
              <p className="text-lg text-slate-600 leading-relaxed">
                123 Car Avenue, Auto District, <br />
                Tbilisi, Georgia
              </p>
              <div className="h-48 w-full bg-slate-200 rounded-2xl mt-4 flex items-center justify-center text-slate-400 font-bold italic">
                Interactive Map Placeholder
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
          <h2 className="text-3xl font-black mb-8 tracking-tight">Direct Inquiry</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Your Name</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary" placeholder="Name" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Phone / WhatsApp</label>
                <input type="tel" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary" placeholder="+995 ..." />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Subject</label>
              <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary font-bold">
                <option>General Support</option>
                <option>Car Booking</option>
                <option>Import Inquiry</option>
                <option>Sell/Trade-in My Car</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Message</label>
              <textarea rows={5} className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary" placeholder="How can we help reached you?"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full py-5 text-lg font-black uppercase tracking-widest">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
