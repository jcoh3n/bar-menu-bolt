import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center space-y-4", className)}>
      <h1 className="font-serif text-4xl md:text-5xl text-cream-50">
        {title}
      </h1>
      {subtitle && (
        <p className="text-cream-200 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}