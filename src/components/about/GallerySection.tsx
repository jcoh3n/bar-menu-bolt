import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80',
    alt: 'Craft Cocktail Making'
  },
  {
    url: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&q=80',
    alt: 'Bar Interior'
  },
  {
    url: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80',
    alt: 'Signature Cocktails'
  }
];

export function GallerySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h2 className="font-serif text-3xl text-cream-50 text-center">Our Space</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.url}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: index * 0.2 }
            }}
            className="relative aspect-square rounded-lg overflow-hidden group"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors"></div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}