import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, GlassWater } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="font-serif text-5xl md:text-7xl text-cream-50 mb-6">
          Craft Cocktails <br />
          <span className="text-copper-400">& Fine Spirits</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex items-center text-cream-100">
            <Clock className="w-5 h-5 text-copper-400 mr-2" />
            <span>Open Today: 4PM - 2AM</span>
          </div>
          <div className="flex items-center text-cream-100">
            <GlassWater className="w-5 h-5 text-copper-400 mr-2" />
            <span>Happy Hour: 4PM - 7PM</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/menu"
            className="px-6 py-3 bg-copper-500 text-cream-50 rounded-md hover:bg-copper-600 transition-colors text-center"
          >
            View Menu
          </Link>
          <Link
            to="/reservations"
            className="px-6 py-3 border border-cream-100 text-cream-100 rounded-md hover:bg-cream-100/10 transition-colors text-center"
          >
            Make a Reservation
          </Link>
        </div>
      </div>
    </div>
  );
}