import React from 'react';
import { useCountAnimation } from '../../hooks/useCountAnimation';

const StatItem: React.FC<{ end: number; suffix?: string; label: string }> = ({ end, suffix = '', label }) => {
  const { count, ref } = useCountAnimation({ end, duration: 2500 });

  return (
    <div ref={ref} className="transform hover:scale-105 transition-transform duration-300">
      <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <p className="text-sm uppercase tracking-widest opacity-80">{label}</p>
    </div>
  );
};

export const Stats: React.FC = () => (
  <div className="relative bg-zonca-red py-16 text-white overflow-hidden">
    {/* Decorative background pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/patterns/graphy.png')]"></div>
    </div>

    {/* Animated background shapes */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
        <StatItem end={16} suffix="+" label="Years Experience" />
        <StatItem end={500} suffix="+" label="Projects Completed" />
        <StatItem end={100} suffix="%" label="Quality Guaranteed" />
        <StatItem end={50} suffix="" label="Expert Engineers" />
      </div>
    </div>
  </div>
);
