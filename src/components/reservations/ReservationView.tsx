import React from 'react';
import { ReservationForm } from './ReservationForm';
import { motion } from 'framer-motion';

export function ReservationView() {
  return (
    <div className="min-h-screen bg-navy-950 pt-24">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl text-cream-50">
              Make a Reservation
            </h1>
            <p className="text-cream-200 max-w-2xl mx-auto">
              Join us for an evening of craft cocktails and exceptional service. 
              For parties larger than 8, please call us directly.
            </p>
          </div>

          <ReservationForm />

          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h2 className="font-serif text-2xl text-cream-50 mb-4">Hours</h2>
              <ul className="space-y-2 text-cream-200">
                <li>Monday - Thursday: 4 PM - 12 AM</li>
                <li>Friday - Saturday: 4 PM - 2 AM</li>
                <li>Sunday: 4 PM - 11 PM</li>
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-cream-50 mb-4">Contact</h2>
              <ul className="space-y-2 text-cream-200">
                <li>Phone: (555) 123-4567</li>
                <li>Email: reservations@copperstill.com</li>
                <li>123 Craft Avenue, Cocktail City</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}