import React from 'react';
import { Leaf, Wheat, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { MenuItemType } from '../../types/menu';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

export function MenuItem({ item, index }: MenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { delay: index * 0.1 }
      }}
      className="group relative bg-navy-900/50 backdrop-blur-sm rounded-lg overflow-hidden"
    >
      {item.featured && (
        <div className="absolute top-4 right-4 bg-copper-500 rounded-full p-1.5 z-10">
          <Star className="w-4 h-4 text-cream-50" />
        </div>
      )}
      
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-serif text-xl text-cream-50 group-hover:text-copper-400 transition-colors">
            {item.name}
          </h3>
          <span className="text-copper-400 font-semibold whitespace-nowrap">
            ${item.price}
          </span>
        </div>
        
        {item.ingredients && (
          <p className="text-copper-300/80 text-sm leading-relaxed">
            {item.ingredients}
          </p>
        )}
        
        <p className="text-cream-200/80 text-sm leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex items-center gap-3 pt-2">
          {item.dietary?.length > 0 && (
            <div className="flex gap-2">
              {item.dietary.includes('vegan') && (
                <Leaf className="w-4 h-4 text-green-500" />
              )}
              {item.dietary.includes('gluten-free') && (
                <Wheat className="w-4 h-4 text-yellow-500" />
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}