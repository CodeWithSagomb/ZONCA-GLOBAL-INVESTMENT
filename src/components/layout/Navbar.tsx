import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ZoncaLogo } from '../common/ZoncaLogo';
import { NAV_ITEMS } from '../../constants/config';
import { ViewType } from '../../types';

interface NavbarProps {
  view: ViewType;
  setView: (view: ViewType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ view, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2 top-0' : 'bg-white border-b border-gray-100 py-4 relative'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <div className="cursor-pointer group" onClick={() => setView('home')}>
             <ZoncaLogo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className={`relative text-sm font-bold uppercase tracking-wide transition-colors group ${
                  view === item.id ? 'text-zonca-red' : 'text-slate-600 hover:text-zonca-red'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-zonca-red transition-all duration-300 ${
                  view === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            <button
              onClick={() => setView('contact')}
              className="group relative bg-zonca-red text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wider overflow-hidden shadow-lg shadow-red-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/30 hover:scale-105"
            >
              <span className="relative z-10">Request Quote</span>
              <div className="absolute inset-0 bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-4 text-base font-bold text-slate-800 border-b border-gray-50 hover:text-zonca-red"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
