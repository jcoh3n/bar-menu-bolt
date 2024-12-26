import React from 'react';
import { cn } from '../../lib/utils';

interface FilterOption {
  id: string;
  label: string;
}

const filterOptions: FilterOption[] = [
  { id: 'whiskey', label: 'Whiskey' },
  { id: 'gin', label: 'Gin' },
  { id: 'vodka', label: 'Vodka' },
  { id: 'rum', label: 'Rum' },
  { id: 'tequila', label: 'Tequila' },
  { id: 'wine', label: 'Wine' },
  { id: 'beer', label: 'Beer' },
  { id: 'non-alcoholic', label: 'Non-Alcoholic' },
];

interface MenuFilterProps {
  selectedFilters: string[];
  onToggle: (filter: string) => void;
}

export function MenuFilter({ selectedFilters, onToggle }: MenuFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filterOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => onToggle(option.id)}
          className={cn(
            'px-4 py-2 rounded-full text-sm transition-colors',
            selectedFilters.includes(option.id)
              ? 'bg-copper-500 text-cream-50'
              : 'bg-navy-900 text-cream-200 hover:bg-navy-800'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}