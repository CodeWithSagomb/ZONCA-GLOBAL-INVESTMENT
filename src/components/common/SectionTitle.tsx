import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-tight">{title}</h2>
    {subtitle && (
      <div className="flex flex-col items-center mt-4">
        <div className="w-16 h-1 bg-zonca-red mb-4"></div>
        <p className="text-gray-500 max-w-2xl text-lg">{subtitle}</p>
      </div>
    )}
  </div>
);
