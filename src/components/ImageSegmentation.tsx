import React, { useRef, useState } from 'react';
import { Region } from '../types';
import { MultipleTooltips } from './MultipleTooltips';

interface ImageSegmentationProps {
  imageSrc: string;
  regions: Region[];
}

export function ImageSegmentation({ imageSrc, regions }: ImageSegmentationProps) {
  const [activeRegion, setActiveRegion] = React.useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative inline-block w-full"
      onMouseMove={handleMouseMove}
    >
      <img 
        src={imageSrc} 
        alt="Medical scan" 
        className="max-w-full h-auto rounded-lg"
      />
      <svg 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'multiply' }}
      >
        {regions.map((region) => (
          <path
            key={region.id}
            d={region.coords}
            className={`
              fill-blue-500/20 hover:fill-blue-500/40 cursor-pointer transition-all duration-300 pointer-events-auto
              ${activeRegion === region.id ? 'stroke-blue-400 stroke-[3px]' : 'stroke-white stroke-[2px]'}
            `}
            strokeDasharray="4 2"
            onMouseEnter={() => setActiveRegion(region.id)}
            onMouseLeave={() => setActiveRegion(null)}
          />
        ))}
      </svg>
      {activeRegion && (
        <MultipleTooltips 
          region={regions.find(r => r.id === activeRegion)!}
          mousePosition={mousePosition}
          onClose={() => setActiveRegion(null)}
        />
      )}
    </div>
  );
}