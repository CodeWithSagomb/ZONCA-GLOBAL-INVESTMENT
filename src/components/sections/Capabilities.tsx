import React from 'react';
import { Ruler, Factory, HardHat } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { FeatureCard } from '../common/FeatureCard';
import { AnimatedSection } from '../common/AnimatedSection';

export const Capabilities: React.FC = () => (
  <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Decorative top border */}
      <AnimatedSection animation="fade-up" delay={0}>
        <div className="w-24 h-1 bg-gradient-to-r from-zonca-red to-red-700 mx-auto mb-8"></div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={100}>
        <SectionTitle
          title="Our Core Capabilities"
          subtitle="We deliver end-to-end aluminium solutions, from technical design to on-site installation."
        />
      </AnimatedSection>

      {/* Main container with decorative frame */}
      <div className="relative mt-12">
        {/* Background decorative elements */}
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-zonca-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Cards grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="fade-up" delay={200}>
            <FeatureCard
              icon={Ruler}
              title="Design & Engineering"
              desc="Our in-house team uses CAD/CAM technology to design bespoke profiles and calculate structural loads for high-rise facades."
            />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <FeatureCard
              icon={Factory}
              title="Precision Fabrication"
              desc="State-of-the-art CNC machining centers ensure that every joint, cut, and assembly meets strict European tolerances."
            />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={400}>
            <FeatureCard
              icon={HardHat}
              title="Professional Installation"
              desc="Our certified installation teams ensure that systems are fitted correctly for maximum thermal performance and longevity."
            />
          </AnimatedSection>
        </div>
      </div>

      {/* Decorative bottom border */}
      <AnimatedSection animation="fade-up" delay={500}>
        <div className="w-24 h-1 bg-gradient-to-r from-zonca-red to-red-700 mx-auto mt-12"></div>
      </AnimatedSection>
    </div>
  </div>
);
