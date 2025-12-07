import React from 'react';

interface ZoncaLogoProps {
  className?: string;
  dark?: boolean;
}

export const ZoncaLogo: React.FC<ZoncaLogoProps> = ({ className = "h-12", dark = false }) => {
  const textColor = dark ? "#FFFFFF" : "#1A1A1A";
  const subTextColor = dark ? "#9CA3AF" : "#6B7280";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Symbol SVG */}
      <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
         {/* Red Top Bar */}
         <rect x="5" y="15" width="90" height="15" fill="#8B0000" />
         {/* The Z */}
         <path d="M5 40H95V55L35 85H95V100H5V85L65 55H5V40Z" fill={textColor} />
      </svg>

      {/* Text */}
      <div className="flex flex-col justify-center">
        <span className="font-extrabold text-2xl tracking-tighter leading-none" style={{ color: textColor }}>ZONCA</span>
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5" style={{ color: subTextColor }}>Global Investment Ltd</span>
      </div>
    </div>
  );
};
