import React from 'react';
import { MenuItem } from './MenuItem';
import { MenuItemType } from '../../types/menu';
import { motion } from 'framer-motion';

interface MenuSectionProps {
  items: MenuItemType[];
}

export function MenuSection({ items }: MenuSectionProps) {
  return (
    <motion.div 
      layout
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((item, index) => (
        <MenuItem 
          key={item.id} 
          item={item}
          index={index}
        />
      ))}
    </motion.div>
  );
}