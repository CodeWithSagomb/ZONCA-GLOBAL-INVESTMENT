import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, desc }) => (
  <div className="relative bg-white p-8 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-2xl hover:border-zonca-red transition-all duration-300 group overflow-hidden">
    {/* Decorative corner accent */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-zonca-red/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    {/* Icon container with gradient background */}
    <div className="relative w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:from-zonca-red group-hover:to-red-700 transition-all duration-300 shadow-sm">
      <Icon className="text-zonca-red group-hover:text-white transition-colors duration-300" size={28} strokeWidth={2} />
    </div>

    {/* Content */}
    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-zonca-red transition-colors duration-300">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>

    {/* Bottom accent line */}
    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-zonca-red to-red-700 group-hover:w-full transition-all duration-500"></div>
  </div>
);
