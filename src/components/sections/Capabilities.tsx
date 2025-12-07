import React from 'react';
import { Ruler, Factory, HardHat } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { FeatureCard } from '../common/FeatureCard';

export const Capabilities: React.FC = () => (
  <div className="bg-slate-50 py-20 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        title="Our Core Capabilities"
        subtitle="We deliver end-to-end aluminium solutions, from technical design to on-site installation."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={Ruler}
          title="Design & Engineering"
          desc="Our in-house team uses CAD/CAM technology to design bespoke profiles and calculate structural loads for high-rise facades."
        />
        <FeatureCard
          icon={Factory}
          title="Precision Fabrication"
          desc="State-of-the-art CNC machining centers ensure that every joint, cut, and assembly meets strict European tolerances."
        />
        <FeatureCard
          icon={HardHat}
          title="Professional Installation"
          desc="Our certified installation teams ensure that systems are fitted correctly for maximum thermal performance and longevity."
        />
      </div>
    </div>
  </div>
);
