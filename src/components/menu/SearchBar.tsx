import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-400/50" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search menu..."
        className="w-full bg-navy-900/50 border border-copper-900/20 rounded-lg pl-10 pr-4 py-3 text-cream-50 placeholder:text-cream-400/50 focus:outline-none focus:ring-2 focus:ring-copper-500/20"
      />
    </div>
  );
}