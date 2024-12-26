import React, { useState } from 'react';
import { MenuSection } from './MenuSection';
import { SearchBar } from './SearchBar';
import { MenuTabs } from './MenuTabs';
import { useMenuFilter } from '../../hooks/useMenuFilter';
import { cocktails, wines, beers, bites } from '../../data/menuItems';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { id: 'cocktails', label: 'Cocktails', count: cocktails.length },
  { id: 'wines', label: 'Wines', count: wines.length },
  { id: 'beers', label: 'Beers', count: beers.length },
  { id: 'bites', label: 'Bar Bites', count: bites.length }
];

export function MenuView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('cocktails');
  const { filteredItems } = useMenuFilter(
    { cocktails, wines, beers, bites },
    searchQuery,
    activeTab
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-navy-950"
    >
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="sticky top-16 z-30 bg-navy-950/95 backdrop-blur-sm pt-4 pb-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="font-serif text-4xl md:text-5xl text-cream-50">Our Menu</h1>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <MenuTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8"
          >
            <MenuSection
              items={filteredItems[activeTab as keyof typeof filteredItems]}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}