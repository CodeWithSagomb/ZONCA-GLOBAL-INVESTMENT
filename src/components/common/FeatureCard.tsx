import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, desc }) => (
  <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-zonca-red transition-all duration-300 group">
    <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-zonca-red transition-colors">
      <Icon className="text-zonca-red group-hover:text-white" size={28} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-zonca-red transition-colors">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
  </div>
);
