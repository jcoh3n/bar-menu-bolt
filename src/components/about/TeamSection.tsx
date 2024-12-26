import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Alex Thompson',
    role: 'Head Mixologist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'With over a decade of experience, Alex brings creativity and precision to every cocktail.',
    social: {
      instagram: '#',
      twitter: '#'
    }
  },
  {
    name: 'Sarah Chen',
    role: 'Bar Manager',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: 'Sarah ensures our service matches the excellence of our cocktails.',
    social: {
      instagram: '#',
      twitter: '#'
    }
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Spirit Curator',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    bio: 'Marcus travels the world to bring unique spirits to our collection.',
    social: {
      instagram: '#',
      twitter: '#'
    }
  }
];

export function TeamSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h2 className="font-serif text-3xl text-cream-50 text-center">Meet Our Team</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: index * 0.2 }
            }}
            className="bg-navy-900/50 backdrop-blur-sm rounded-lg overflow-hidden"
          >
            <div className="aspect-square relative">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-navy-950/40"></div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-serif text-xl text-cream-50">{member.name}</h3>
                <p className="text-copper-400">{member.role}</p>
              </div>
              
              <p className="text-cream-200 text-sm">{member.bio}</p>
              
              <div className="flex gap-4">
                <a href={member.social.instagram} className="text-cream-300 hover:text-copper-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={member.social.twitter} className="text-cream-300 hover:text-copper-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}