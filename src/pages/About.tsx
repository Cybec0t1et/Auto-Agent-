import { Users, Target, Shield, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-24 pb-24">
      <section className="bg-brand-navy py-32 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2000')]" />
        <div className="container mx-auto relative z-10 space-y-8">
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter">Our Story</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            AutoAgent ge was founded with a single mission: to revolutionize the car buying experience in Georgia through absolute transparency and professional sourcing.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold tracking-tight">Redefining Car Sales in Georgia</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We started as a small team of automotive enthusiasts who were tired of the "dark side" of the used car market—hidden accidents, rolled-back odometers, and deceptive pricing. We decided to create a platform where honesty is our biggest asset.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Today, AutoAgent ge is one of the leading sourcing partners for individuals and businesses looking for premium vehicles. Whether it is a local stock car or a direct import from another continent, we handle it with the same level of precision and care.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {[
            { icon: Users, title: 'Expert Team', desc: '10+ years of collective experience.' },
            { icon: Target, title: 'Precision Sourcing', desc: 'We find the needle in the haystack.' },
            { icon: Shield, title: 'Guaranteed Verify', desc: 'Every car is deep-inspected.' },
            { icon: Heart, title: 'Customer First', desc: 'Our relationship starts after the sale.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
              <item.icon className="w-10 h-10 text-brand-primary" />
              <h4 className="font-bold text-xl">{item.title}</h4>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
