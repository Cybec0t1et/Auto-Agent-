import { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cars } from '@/src/data/inventory';
import CarCard from '@/src/components/ui/CarCard';
import { motion } from 'motion/react';

export default function Inventory() {
  const [search, setSearch] = useState('');
  const [make, setMake] = useState('All');
  const [status, setStatus] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const makes = ['All', ...new Set(cars.map(c => c.make))];
  const statuses = ['All', 'In Stock', 'Import', 'Coming Soon'];

  const filteredCars = useMemo(() => {
    return cars
      .filter(car => {
        const matchesSearch = car.title.toLowerCase().includes(search.toLowerCase());
        const matchesMake = make === 'All' || car.make === make;
        const matchesStatus = status === 'All' || car.availabilityStatus === status;
        return matchesSearch && matchesMake && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'year-desc') return b.year - a.year;
        return 0; // Default newest (mocked)
      });
  }, [search, make, status, sortBy]);

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Browse Our Inventory</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
          Explore our handpicked collection of high-quality vehicles available in stock or for import.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-brand-navy p-6 rounded border border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search by brand, model, or year..." 
              className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-800 rounded text-xs focus:ring-1 focus:ring-brand-primary"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 lg:flex gap-2">
            <select 
              className="bg-slate-900 border border-slate-800 rounded px-4 py-3 text-[11px] font-bold text-slate-300 focus:ring-1 focus:ring-brand-primary"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            >
              <option value="All">All Brands</option>
              {makes.filter(m => m !== 'All').map(m => <option key={m} value={m}>{m}</option>)}
            </select>
            <select 
              className="bg-slate-900 border border-slate-800 rounded px-4 py-3 text-[11px] font-bold text-slate-300 focus:ring-1 focus:ring-brand-primary"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="All">All Status</option>
              {statuses.filter(s => s !== 'All').map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <select 
              className="bg-slate-900 border border-slate-800 rounded px-4 py-3 text-[11px] font-bold text-slate-300 focus:ring-1 focus:ring-brand-primary lg:w-48"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Sort: Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="year-desc">Year: Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Showing <span className="text-brand-primary-light">{filteredCars.length}</span> Results
          </p>
        </div>

        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map(car => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={car.id}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-brand-navy rounded border border-slate-800 border-dashed">
            <Search className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No cars found</h3>
            <p className="text-slate-500 text-sm mb-6">Try adjusting your filters or search terms.</p>
            <button 
              onClick={() => {setSearch(''); setMake('All'); setStatus('All');}}
              className="btn-primary"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Lead Capture Block */}
      <div className="bg-brand-navy rounded border border-slate-800 p-12 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Don't see what you're looking for?</h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          We can source any car from USA, Europe, or Asia directly to your doorstep in Georgia.
        </p>
        <Link to="/request-a-car" className="btn-primary inline-flex mt-4">
          Request Custom Sourcing
        </Link>
      </div>
    </div>
  );
}
