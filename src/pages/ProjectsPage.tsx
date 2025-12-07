import React from 'react';
import { SEO } from '../components/common/SEO';
import { PROJECTS } from '../constants/config';

export const ProjectsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Projects - Completed Works"
        description="View our portfolio of completed aluminium installation projects across Nigeria. Commercial, residential, and industrial projects showcasing our expertise."
        url="https://zoncaglobal.com/projects"
      />
      <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-tight">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {PROJECTS.map((project, i) => (
             <div key={i} className="bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all">
               <div className="h-64 overflow-hidden">
                 <img src={project.img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={project.title} />
               </div>
               <div className="p-6">
                 <h4 className="font-bold text-lg text-slate-900">{project.title}</h4>
                 <p className="text-sm text-zonca-red font-bold uppercase mt-1">{project.system}</p>
               </div>
             </div>
           ))}
          </div>
        </div>
      </div>
    </>
  );
};
