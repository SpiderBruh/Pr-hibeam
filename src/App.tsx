/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  MapPin, 
  Phone, 
  Star, 
  CheckCircle2, 
  Clock, 
  MessageCircle, 
  Navigation, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck,
  UserCheck,
  Calendar
} from 'lucide-react';

// --- Types ---
interface Vehicle {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

// --- Data ---
const VEHICLES: Vehicle[] = [
  {
    id: 'raize',
    name: 'Toyota Raize',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=800',
    description: 'Compact SUV, perfect for city driving and fuel efficiency.',
    category: 'Compact SUV'
  },
  {
    id: 'vios',
    name: 'Toyota Vios',
    price: 1400,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800',
    description: 'Reliable sedan for everyday comfort and smooth handling.',
    category: 'Sedan'
  },
  {
    id: 'rush',
    name: 'Toyota Rush',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    description: 'Spacious 7-seater SUV for family adventures.',
    category: 'SUV'
  },
  {
    id: 'hilux',
    name: 'Toyota Hilux',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
    description: 'Powerful pickup for rugged terrains and heavy loads.',
    category: 'Pickup'
  },
  {
    id: 'grandia',
    name: 'Toyota Grandia',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    description: 'Premium van for group travel and maximum comfort.',
    category: 'Van'
  },
  {
    id: 'deluxe',
    name: 'Toyota Deluxe',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    description: 'Luxury travel experience for special occasions.',
    category: 'Luxury'
  }
];

const REVIEWS = [
  { name: 'Maria Santos', text: 'Cleanest cars in Cebu! Booking was seamless and the Raize was perfect for our Bogo trip.', rating: 5 },
  { name: 'John Doe', text: 'Reliable service. The Hilux was in great condition. Highly recommended for self-drive.', rating: 5 },
  { name: 'Elena Cruz', text: 'Affordable and professional. They delivered the car to Mactan on time. 5 stars!', rating: 5 },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-sm">
            <Car className="w-6 h-6 text-maroon" />
          </div>
          <span className={`font-black text-2xl tracking-tighter transition-colors ${isScrolled ? 'text-maroon' : 'text-white'}`}>
            HI-BEAM
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Cars', 'Services', 'Location', 'Reviews'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <a href="#booking" className="bg-maroon text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-primary hover:text-maroon transition-all yellow-glow uppercase tracking-wider">
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-maroon' : 'text-white'}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-t p-6 md:hidden shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {['Cars', 'Services', 'Location', 'Reviews'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-xl font-black text-maroon uppercase tracking-tight border-b border-gray-50 pb-2"
                >
                  {item}
                </a>
              ))}
              <a href="#booking" onClick={() => setIsMenuOpen(false)} className="bg-maroon text-white text-center py-4 rounded-2xl font-black text-lg uppercase tracking-widest shadow-lg">
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920" 
          alt="Cebu Road" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/80 via-maroon/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Open 24 Hours</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter">
            DRIVE CEBU <br />
            <span className="text-primary">YOUR WAY.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
            Clean, reliable, and affordable self-drive car rentals in Bogo City and beyond. Experience the freedom of the open road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="bg-primary text-maroon px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform text-center yellow-glow">
              Book Now
            </a>
            <a href="#cars" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white/20 transition-all text-center">
              View Cars
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/10 blur-3xl rounded-full -mr-20 -mb-20"></div>
    </section>
  );
};

function VehicleCard({ vehicle }: { vehicle: Vehicle; key?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-maroon text-white px-4 py-1 rounded-full text-xs font-bold">
          {vehicle.category}
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-black">{vehicle.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{vehicle.description}</p>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-400 uppercase font-bold">Starting at</span>
            <div className="text-2xl font-black text-maroon">₱{vehicle.price.toLocaleString()}</div>
            <span className="text-[10px] text-gray-400 font-bold">/ DAY</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>Full Tank</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>Clean Unit</span>
          </div>
        </div>
        <a href="#booking" className="w-full mt-8 bg-maroon text-white py-4 rounded-2xl font-bold hover:bg-primary hover:text-maroon transition-all flex items-center justify-center gap-2">
          Book Now <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">OUR SERVICES</h2>
          <p className="text-gray-500">Tailored rental solutions for every traveler.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:border-primary transition-colors">
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <UserCheck className="w-10 h-10 text-maroon" />
            </div>
            <h3 className="text-2xl font-black mb-4">Self-Drive Rentals</h3>
            <p className="text-gray-500 leading-relaxed">
              Total freedom. Pick up your car and explore Cebu at your own pace. Clean, well-maintained vehicles ready for your adventure.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:border-primary transition-colors">
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <ShieldCheck className="w-10 h-10 text-maroon" />
            </div>
            <h3 className="text-2xl font-black mb-4">Chauffeur Drive</h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              Sit back and relax. Professional drivers available for just ₱1,000 extra. Perfect for tourists and business travelers.
            </p>
            <span className="bg-maroon text-white px-4 py-1 rounded-full text-xs font-bold">+ ₱1,000 / Day</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">LOCATION & <br /><span className="text-primary">COVERAGE</span></h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-primary p-3 rounded-2xl h-fit">
                  <MapPin className="w-6 h-6 text-maroon" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Main Address</h4>
                  <p className="text-gray-500">Inday, Ading Subdivision, Bogo City, Cebu</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary p-3 rounded-2xl h-fit">
                  <Navigation className="w-6 h-6 text-maroon" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Areas Served</h4>
                  <p className="text-gray-500">Bogo City, Mactan, Cebu City, and nearby areas. Delivery available!</p>
                </div>
              </div>
              <button className="bg-maroon text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary hover:text-maroon transition-all flex items-center gap-2">
                Get Directions <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15647.79549309228!2d124.0044!3d11.0511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a863f68e5e8e8b%3A0x6e3e3e3e3e3e3e3e!2sBogo%20City%2C%20Cebu!5e0!3m2!1sen!2sph!4v1711200000000!5m2!1sen!2sph" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Trust = () => {
  return (
    <section id="reviews" className="py-24 bg-maroon text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-primary text-primary" />)}
              <span className="font-black text-2xl ml-2">5.0</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black">TRUSTED BY <br />HUNDREDS.</h2>
          </div>
          <div className="text-white/60 max-w-xs">
            17+ Verified 5-star reviews on Google and Facebook. We pride ourselves on reliability.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[2rem]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="text-lg italic mb-6 text-white/80">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-maroon font-black">
                  {review.name[0]}
                </div>
                <span className="font-bold">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingSection = () => {
  const [formData, setFormData] = useState({ name: '', date: '', car: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send to a backend
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="booking" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 bg-maroon text-white">
            <h2 className="text-5xl font-black mb-8 leading-tight">READY TO <br /><span className="text-primary">HIT THE ROAD?</span></h2>
            <p className="text-white/60 mb-12 text-lg">Fill out the form and our team will contact you within 15 minutes to confirm your booking.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-maroon" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Call Us</p>
                  <p className="text-xl font-bold">0916 561 3580</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-maroon" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Availability</p>
                  <p className="text-xl font-bold">Open 24 Hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-20">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-black mb-2">Booking Received!</h3>
                <p className="text-gray-500">We'll call you shortly at {formData.phone}.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Juan Dela Cruz"
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Pickup Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        required
                        type="date" 
                        className="w-full bg-gray-50 border-none rounded-2xl p-4 pl-12 focus:ring-2 focus:ring-primary outline-none transition-all"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Select Car</label>
                    <select 
                      required
                      className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all appearance-none"
                      value={formData.car}
                      onChange={(e) => setFormData({...formData, car: e.target.value})}
                    >
                      <option value="">Choose Vehicle</option>
                      {VEHICLES.map(v => <option key={v.id} value={v.name}>{v.name}</option>)}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="09XX XXX XXXX"
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <button type="submit" className="w-full bg-maroon text-white py-5 rounded-2xl font-black text-xl hover:bg-primary hover:text-maroon transition-all yellow-glow">
                  Confirm Booking
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Car className="w-6 h-6 text-primary" />
          <span className="font-bold text-xl">HI-BEAM</span>
        </div>
        <div className="text-gray-400 text-sm">
          © 2026 Hi-Beam Car Rental Cebu. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="https://www.facebook.com/profile.php?id=61574650331561" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-primary transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="tel:09165613580" className="p-2 bg-gray-100 rounded-full hover:bg-primary transition-colors">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <Hero />
      
      {/* Vehicle Grid */}
      <section id="cars" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight">CHOOSE YOUR <br /><span className="text-primary">PERFECT RIDE.</span></h2>
              <p className="text-gray-500">From compact cars for city cruising to luxury vans for group trips.</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold">All Vehicles</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold">SUV</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold">Sedan</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {VEHICLES.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Location />
      <Trust />
      <BookingSection />
      
      {/* Quick Action Bar (Mobile Only) */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden flex gap-3">
        <a href="tel:09165613580" className="flex-1 bg-maroon text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl">
          <Phone className="w-5 h-5" /> Call
        </a>
        <a href="https://www.facebook.com/profile.php?id=61574650331561" target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary text-maroon py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl">
          <MessageCircle className="w-5 h-5" /> Message
        </a>
      </div>

      <Footer />
    </div>
  );
}
