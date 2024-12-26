import React from 'react';
import { TeamSection } from './TeamSection';
import { StorySection } from './StorySection';
import { GallerySection } from './GallerySection';
import { motion } from 'framer-motion';

export function AboutView() {
  return (
    <div className="min-h-screen bg-navy-950 pt-24">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-16"
        >
          <StorySection />
          <GallerySection />
          <TeamSection />
        </motion.div>
      </div>
    </div>
  );
}