import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import StickyCTA from '@/src/components/ui/StickyCTA';
import Home from '@/src/pages/Home';
import Inventory from '@/src/pages/Inventory';
import CarDetail from '@/src/pages/CarDetail';
import RequestCar from '@/src/pages/RequestCar';
import About from '@/src/pages/About';
import Contact from '@/src/pages/Contact';
import NotFound from '@/src/pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/car/:id" element={<CarDetail />} />
            <Route path="/request-a-car" element={<RequestCar />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </Router>
  );
}
