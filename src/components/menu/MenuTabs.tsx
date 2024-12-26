import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface Tab {
  id: string;
  label: string;
  count: number;
}

interface MenuTabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

export function MenuTabs({ tabs, activeTab, onChange }: MenuTabsProps) {
  return (
    <div className="flex overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 p-1 min-w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              'relative px-6 py-3 text-sm font-medium rounded-lg whitespace-nowrap transition-colors',
              activeTab === tab.id
                ? 'text-cream-50'
                : 'text-cream-400 hover:text-cream-200'
            )}
          >
            <span className="relative z-10">{tab.label}</span>
            <span className="ml-2 text-xs opacity-60">({tab.count})</span>
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-copper-500/20 rounded-lg -z-0"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}