import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { MenuView } from './components/menu/MenuView';
import { ReservationView } from './components/reservations/ReservationView';
import { AboutView } from './components/about/AboutView';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-950 text-cream-50">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/menu" element={<MenuView />} />
            <Route path="/reservations" element={<ReservationView />} />
            <Route path="/about" element={<AboutView />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;