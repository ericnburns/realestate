import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import FeaturedProperty from './components/FeaturedProperty';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PropertyListing from './pages/PropertyListing';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SocialProof />
      <Services />
      <WhyChooseUs />
      <Process />
      <FeaturedProperty />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listings/3957-s-main-st-acworth" element={<PropertyListing />} />
    </Routes>
  );
}
