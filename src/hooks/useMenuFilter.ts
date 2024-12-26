import { useState, useMemo } from 'react';
import { MenuItemType, MenuSections } from '../types/menu';

export function useMenuFilter(
  items: MenuSections,
  searchQuery: string,
  activeTab: string
) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters(current =>
      current.includes(filter)
        ? current.filter(f => f !== filter)
        : [...current, filter]
    );
  };

  const filteredItems = useMemo(() => {
    const filterItem = (item: MenuItemType) => {
      const matchesSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.ingredients?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);

      const matchesFilter = selectedFilters.length === 0 ||
        selectedFilters.some(filter => item.tags?.includes(filter));

      return matchesSearch && matchesFilter;
    };

    return {
      cocktails: items.cocktails.filter(filterItem),
      wines: items.wines.filter(filterItem),
      beers: items.beers.filter(filterItem),
      bites: items.bites.filter(filterItem),
    };
  }, [items, selectedFilters, searchQuery]);

  return {
    selectedFilters,
    toggleFilter,
    filteredItems,
  };
}