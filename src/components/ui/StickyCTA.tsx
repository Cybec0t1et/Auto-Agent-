import { Phone, MessageCircle } from 'lucide-react';

export default function StickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 flex gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
      <a 
        href="tel:+995123456789" 
        className="flex-1 btn-secondary py-3 text-sm flex items-center justify-center gap-2"
      >
        <Phone className="w-4 h-4" />
        Call
      </a>
      <a 
        href="https://wa.me/995123456789" 
        target="_blank" 
        rel="no-referrer"
        className="flex-1 btn-primary py-3 text-sm flex items-center justify-center gap-2"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>
    </div>
  );
}
