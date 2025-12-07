import React from 'react';

export const Stats: React.FC = () => (
  <div className="bg-zonca-red py-16 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">16+</div>
          <p className="text-sm uppercase tracking-widest opacity-80">Years Experience</p>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
          <p className="text-sm uppercase tracking-widest opacity-80">Projects Completed</p>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
          <p className="text-sm uppercase tracking-widest opacity-80">Quality Guaranteed</p>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">50</div>
          <p className="text-sm uppercase tracking-widest opacity-80">Expert Engineers</p>
        </div>
      </div>
    </div>
  </div>
);
