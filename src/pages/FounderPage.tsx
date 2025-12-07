import React from 'react';
import { Briefcase, Globe, Quote } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ViewType } from '../types';

interface FounderPageProps {
  setView: (view: ViewType) => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({ setView }) => (
  <>
    <SEO
      title="Leadership - Emmanuel Senameh, CEO & Founder"
      description="Meet Emmanuel Senameh, founder and CEO of Zonca Global Investment Ltd. 16+ years of expertise in civil engineering and international trade across 5+ countries."
      url="https://zoncaglobal.com/founder"
    />
    <div className="bg-white min-h-screen">
    {/* Header Section */}
    <div className="bg-slate-900 text-white relative">
       <div className="absolute inset-0 bg-[url('/images/patterns/graphy.png')] opacity-20"></div>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
                <div className="flex items-center space-x-2 text-zonca-red font-bold uppercase tracking-widest mb-4">
                   <div className="h-0.5 w-8 bg-zonca-red"></div>
                   <span>Leadership</span>
                </div>
                <h1 className="text-5xl font-bold mb-4 leading-tight">Emmanuel <span className="text-gray-400">Senameh</span></h1>
                <h2 className="text-xl text-gray-300 font-light mb-8">Founder & Chief Executive Officer</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  A visionary leader with over 16 years of expertise in civil engineering, general contracting, and international trade. Emmanuel drives the strategic direction of Zonca Global with a focus on precision, quality, and cross-border innovation.
                </p>
                <div className="flex flex-wrap gap-4">
                   <div className="bg-white/10 px-4 py-2 rounded border border-white/20">
                      <span className="block text-2xl font-bold text-white">16+</span>
                      <span className="text-xs text-gray-400 uppercase">Years Experience</span>
                   </div>
                   <div className="bg-white/10 px-4 py-2 rounded border border-white/20">
                      <span className="block text-2xl font-bold text-white">5+</span>
                      <span className="text-xs text-gray-400 uppercase">Countries Served</span>
                   </div>
                </div>
             </div>
             <div className="relative">
                <div className="absolute inset-0 bg-zonca-red transform translate-x-4 translate-y-4 rounded-sm"></div>
                <img
                  src="/images/team/emmanuel-senameh.jpg"
                  alt="Emmanuel Senameh - CEO"
                  className="relative w-full rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 object-cover h-[500px]"
                />
             </div>
          </div>
       </div>
    </div>

    {/* Experience Timeline & Details */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Main Biography */}
          <div className="lg:col-span-2">
             <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
               <Briefcase className="text-zonca-red mr-3" /> Professional Trajectory
             </h3>
             <div className="prose prose-lg text-gray-600">
                <p>
                  Since founding <strong>Zonca Global Investment Ltd</strong> in 2010, Emmanuel has transformed the company from a general merchant enterprise into a powerhouse of engineering and construction. His philosophy rests on a simple pillar: providing comprehensive solutions that span from the initial architectural design to the final installation of complex systems.
                </p>
                <p>
                  His expertise is not limited to Nigeria. Emmanuel has successfully managed large-scale industrial and hospitality projects across the EMEA region. Notably, he oversaw the <strong>revival of interior designs for the Ibis Hotel in Algiers</strong> and managed critical rack system projects for <strong>Hayat Kimya</strong> across their operations in Algeria, Nigeria, and Kenya.
                </p>
             </div>

             <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                   <Globe className="text-zonca-red mr-3" /> Global Project Footprint
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="bg-slate-50 p-6 border-l-4 border-zonca-red">
                      <h4 className="font-bold text-slate-900 mb-2">Healthcare Infrastructure</h4>
                      <p className="text-sm text-gray-600">Execution of multiple specialized projects for <strong>Multiplus Hospital</strong> in Qatar and Georgia, ensuring medical-grade standards in construction and finishing.</p>
                   </div>
                   <div className="bg-slate-50 p-6 border-l-4 border-zonca-red">
                      <h4 className="font-bold text-slate-900 mb-2">Industrial Logistics</h4>
                      <p className="text-sm text-gray-600">Management of warehouse rack systems for <strong>Sacho</strong> and industrial setups for major manufacturers, optimizing supply chain infrastructure.</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Sidebar Roles */}
          <div>
             <div className="bg-white border border-gray-200 shadow-xl p-8 sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-gray-100 pb-2">Current Roles</h3>

                <div className="mb-8 group">
                   <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-800 group-hover:text-zonca-red transition-colors">CEO & Founder</h4>
                      <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">2010 - Present</span>
                   </div>
                   <p className="text-sm font-bold text-gray-500 mb-1">Zonca Global Investment Ltd</p>
                   <p className="text-xs text-gray-400">Lagos, Nigeria</p>
                   <p className="text-sm text-gray-600 mt-2">Leading operations, contracting, and strategic expansion.</p>
                </div>

                <div className="mb-8 group">
                   <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-800 group-hover:text-zonca-red transition-colors">Country Manager</h4>
                      <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">2022 - Present</span>
                   </div>
                   <p className="text-sm font-bold text-gray-500 mb-1">Neser Metal</p>
                   <p className="text-xs text-gray-400">Turkey / Africa</p>
                   <p className="text-sm text-gray-600 mt-2">Serving as the strategic bridge for the Turkey-based metal giant Neser Metal within the African market.</p>
                </div>

                <div className="bg-zonca-red text-white p-6 rounded-sm text-center">
                   <Quote className="mx-auto mb-4 opacity-50" />
                   <p className="italic text-sm mb-4">"We don't just build structures; we build relationships founded on integrity and engineering excellence."</p>
                   <p className="font-bold text-xs uppercase tracking-widest">- Emmanuel Senameh</p>
                </div>
             </div>
          </div>

         </div>
      </div>
    </div>
  </>
);
