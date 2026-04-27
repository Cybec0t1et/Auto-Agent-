import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, Share2, Heart, MapPin, Calendar, 
  Gauge, Fuel, Cog, Info, Check, MessageCircle, Phone, 
  ShieldCheck, ArrowRight, Zap, ListChecks 
} from 'lucide-react';
import { cars } from '@/src/data/inventory';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find(c => c.id === id);

  if (!car) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
        <Link to="/inventory" className="btn-primary">Return to Inventory</Link>
      </div>
    );
  }

  const specGroups = [
    { label: 'Year', value: car.year, icon: Calendar },
    { label: 'Mileage', value: `${car.mileage.toLocaleString()} km`, icon: Gauge },
    { label: 'Fuel Type', value: car.fuelType, icon: Fuel },
    { label: 'Transmission', value: car.transmission, icon: Cog },
    { label: 'Engine', value: car.engine, icon: Zap },
    { label: 'Drivetrain', value: car.driveType, icon: Zap },
    { label: 'Body Type', value: car.bodyType, icon: ListChecks },
    { label: 'Color', value: car.color, icon: Info },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-500 font-bold hover:text-brand-primary transition-colors"
      >
        <ChevronLeft className="w-5 h-5" /> Back to Results
      </button>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left: Images & Info */}
        <div className="lg:col-span-2 space-y-12">
          {/* Gallery Shell */}
          <div className="space-y-4">
            <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-slate-200 shadow-xl border border-slate-100">
              <img 
                src={car.images[0]} 
                alt={car.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(idx => (
                <div key={idx} className="aspect-square rounded-xl overflow-hidden bg-slate-200 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                  <img src={car.images[0]} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black tracking-tight">Description</h2>
              <div className="flex gap-2">
                <button className="p-3 bg-white rounded-xl border border-slate-200 hover:text-brand-primary transition-colors"><Share2 className="w-5 h-5" /></button>
                <button className="p-3 bg-white rounded-xl border border-slate-200 hover:text-brand-primary transition-colors"><Heart className="w-5 h-5" /></button>
              </div>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              {car.description}
            </p>
          </div>

          {/* Detailed Specs */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black tracking-tight">Vehicle Specifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {specGroups.map((spec, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
                  <spec.icon className="w-6 h-6 text-brand-primary" />
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{spec.label}</div>
                  <div className="text-lg font-black text-brand-navy">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black tracking-tight">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {car.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl">
                  <div className="bg-emerald-500 rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-emerald-900">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Condition Notes */}
          <div className="bg-orange-50 border border-orange-100 p-8 rounded-3xl space-y-4">
            <div className="flex items-center gap-3 text-orange-800">
              <ShieldCheck className="w-8 h-8" />
              <h3 className="text-xl font-bold uppercase tracking-tight">Inspection & Condition</h3>
            </div>
            <p className="text-orange-900/80 leading-relaxed font-medium capitalize">
              {car.conditionNotes}
            </p>
          </div>
        </div>

        {/* Right: CTA & Price */}
        <div className="space-y-8">
          <div className="sticky top-28 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 space-y-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                    car.availabilityStatus === 'In Stock' ? "bg-emerald-500 text-white" : "bg-brand-accent-blue text-white"
                  )}>
                    {car.availabilityStatus}
                  </span>
                  <span className="text-sm text-slate-400 font-bold">ID: AA-{car.id}</span>
                </div>
                <h1 className="text-3xl font-black tracking-tighter leading-tight">{car.title}</h1>
                <div className="flex items-center gap-1 text-slate-500 text-sm font-bold">
                  <MapPin className="w-4 h-4" /> {car.location}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="text-center">
                  <div className="text-5xl font-black text-brand-primary tracking-tighter">${car.price.toLocaleString()}</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Final Price (USD)</div>
                </div>
              </div>

              <div className="space-y-3">
                <a href="tel:+995123456789" className="btn-secondary w-full py-4 text-lg">
                  <Phone className="w-5 h-5" /> Call Sales
                </a>
                <a href={`https://wa.me/995123456789?text=Interested in ${car.title}`} target="_blank" rel="no-referrer" className="btn-primary w-full py-4 text-lg">
                  <MessageCircle className="w-5 h-5" /> Send Message
                </a>
                <button className="w-full text-brand-navy font-bold text-sm hover:underline py-2">
                  Request Virtual Tour
                </button>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xs text-slate-500 font-medium text-center">
                  Available for viewing in <span className="font-bold text-brand-navy">{car.location.split(',')[0]}</span>. Financing available through our partners.
                </p>
              </div>
            </div>

            {/* Why Us Summary */}
            <div className="bg-brand-navy p-8 rounded-3xl text-white space-y-6">
              <h4 className="font-bold text-lg border-b border-white/10 pb-4">Our Guarantee</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm">
                  <Check className="text-brand-primary w-5 h-5" /> 160-Point Tech Inspection
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="text-brand-primary w-5 h-5" /> Transparent Paperwork
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="text-brand-primary w-5 h-5" /> Georgia Customs Support
                </li>
              </ul>
              <Link to="/how-it-works" className="flex items-center gap-2 text-brand-primary text-sm font-bold group">
                Learn about our process <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
