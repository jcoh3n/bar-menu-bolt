import React from 'react';
import { motion } from 'framer-motion';

export function StorySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-8"
    >
      <h1 className="font-serif text-4xl md:text-5xl text-cream-50">Our Story</h1>
      
      <div className="relative rounded-lg overflow-hidden aspect-video">
        <img
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80"
          alt="The Copper Still Bar"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-navy-950/40"></div>
      </div>

      <div className="max-w-2xl mx-auto space-y-6 text-cream-200">
        <p>
          Founded in 2020, The Copper Still emerged from a passion for craft cocktails
          and a desire to create an intimate space where the art of mixology meets
          warm hospitality.
        </p>
        <p>
          Our name pays homage to the traditional copper stills used in spirit
          distillation, symbolizing our commitment to preserving classic techniques
          while embracing modern innovation.
        </p>
        <p>
          Every detail in our space has been carefully curated, from our custom copper
          bar top to our hand-selected spirit collection, creating an atmosphere that
          celebrates the craft of cocktail making.
        </p>
      </div>
    </motion.section>
  );
}