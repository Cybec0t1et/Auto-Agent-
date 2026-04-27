import { Link } from 'react-router-dom';
import { Calendar, Gauge, Fuel, Cog, MapPin, MessageCircle, Info } from 'lucide-react';
import { Car } from '@/src/data/inventory';
import { cn } from '@/src/lib/utils';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="group bg-brand-navy rounded-lg overflow-hidden border border-border-slate hover:border-brand-primary/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img 
          src={car.images[0]} 
          alt={car.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
          <span className={cn(
            "px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider",
            car.availabilityStatus === 'In Stock' ? "bg-brand-primary text-white" : 
            car.availabilityStatus === 'Import' ? "bg-orange-600 text-white" : 
            "bg-slate-600 text-white"
          )}>
            {car.availabilityStatus}
          </span>
        </div>
        <div className="absolute top-2 right-2">
          <div className="bg-brand-navy/60 backdrop-blur-md border border-white/10 rounded px-2 py-0.5 text-white font-bold text-[10px]">
            {car.year}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="font-bold text-sm text-white tracking-tight line-clamp-1 group-hover:text-brand-primary-light transition-colors">
              {car.title}
            </h3>
            <div className="flex items-center gap-1 text-slate-500 text-[10px] font-medium mt-1">
              <MapPin className="w-3 h-3" />
              {car.location}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-white">
              ${car.price.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 py-3 border-y border-white/5">
          <div className="flex items-center gap-2 text-slate-400">
            <Gauge className="w-3.5 h-3.5 text-brand-primary" />
            <span className="text-[10px] font-medium">{car.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Fuel className="w-3.5 h-3.5 text-brand-primary" />
            <span className="text-[10px] font-medium">{car.fuelType}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-1">
          <Link 
            to={`/car/${car.id}`} 
            className="flex-1 btn-secondary py-2 text-[10px] uppercase"
          >
            Details
          </Link>
          <a 
            href={`https://wa.me/995123456789?text=Inquiry about ${car.title}`}
            target="_blank"
            rel="no-referrer"
            className="btn-primary p-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
