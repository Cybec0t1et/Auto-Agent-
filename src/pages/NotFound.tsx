import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 text-center space-y-8">
      <div className="text-[12rem] font-black text-slate-100 leading-none select-none">404</div>
      <h1 className="text-4xl font-black tracking-tight mt-[-4rem]">Page Not Found</h1>
      <p className="text-slate-500 max-w-md mx-auto">
        The page you are looking for might have been moved, deleted, or never existed.
      </p>
      <div className="flex justify-center gap-4 pt-8">
        <Link to="/" className="btn-primary">
          <Home className="w-5 h-5" /> Go Home
        </Link>
        <Link to="/inventory" className="btn-secondary">
          Browse Cars <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
