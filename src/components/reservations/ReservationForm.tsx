import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function ReservationForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-navy-900/50 backdrop-blur-sm rounded-lg p-6 space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <label className="text-cream-200 text-sm">Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-copper-400" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-navy-800/50 border border-copper-900/20 rounded-lg pl-10 pr-4 py-2 text-cream-50 focus:outline-none focus:ring-2 focus:ring-copper-500/20"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-cream-200 text-sm">Time</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-copper-400" />
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-navy-800/50 border border-copper-900/20 rounded-lg pl-10 pr-4 py-2 text-cream-50 focus:outline-none focus:ring-2 focus:ring-copper-500/20"
              required
            >
              <option value="">Select time</option>
              <option value="17:00">5:00 PM</option>
              <option value="17:30">5:30 PM</option>
              <option value="18:00">6:00 PM</option>
              {/* Add more time slots */}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-cream-200 text-sm">Guests</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-copper-400" />
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-navy-800/50 border border-copper-900/20 rounded-lg pl-10 pr-4 py-2 text-cream-50 focus:outline-none focus:ring-2 focus:ring-copper-500/20"
              required
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-cream-200 text-sm">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-navy-800/50 border border-copper-900/20 rounded-lg px-4 py-2 text-cream-50 focus:outline-none focus:ring-2 focus:ring-copper-500/20"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-cream-200 text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-navy-800/50 border border-copper-900/20 rounded-lg px-4 py-2 text-cream-50 focus:outline-none focus:ring-2 focus:ring-copper-500/20"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-cream-200 text-sm">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-navy-800/50 border border-copper-900/20 rounded-lg px-4 py-2 text-cream-50 focus:outline-none focus:ring-2 focus:ring-copper-500/20"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-cream-200 text-sm">Special Occasion</label>
          <select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="w-full bg-navy-800/50 border border-copper-900/20 rounded-lg px-4 py-2 text-cream-50 focus:outline-none focus:ring-2 focus:ring-copper-500/20"
          >
            <option value="">Select occasion (optional)</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="date">Date Night</option>
            <option value="business">Business Dinner</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-copper-500 text-cream-50 rounded-lg px-6 py-3 font-medium hover:bg-copper-600 transition-colors"
      >
        Reserve Table
      </button>
    </motion.form>
  );
}