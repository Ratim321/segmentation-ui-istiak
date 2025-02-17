import React from 'react';
import { Region } from '../types';
import { CircleDot, BrainCircuit, Activity, FileSpreadsheet } from 'lucide-react';

interface MultipleTooltipsProps {
  region: Region;
  mousePosition: { x: number; y: number };
  onClose: () => void;
}

export function MultipleTooltips({ region, mousePosition, onClose }: MultipleTooltipsProps) {
  const tooltipGap = 40; // Increased gap
  const tooltipWidth = 320;
  const tooltipSpacing = 16;

  return (
    <>
      {/* Connecting Lines with Animation */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <line
          x1={mousePosition.x}
          y1={mousePosition.y}
          x2={mousePosition.x + tooltipGap}
          y2={mousePosition.y - 40}
          className="stroke-blue-400 animate-draw"
          strokeWidth="2"
          strokeDasharray="4 2"
        />
        <line
          x1={mousePosition.x}
          y1={mousePosition.y}
          x2={mousePosition.x + tooltipGap}
          y2={mousePosition.y + 40}
          className="stroke-blue-400 animate-draw"
          strokeWidth="2"
          strokeDasharray="4 2"
        />
        <line
          x1={mousePosition.x}
          y1={mousePosition.y}
          x2={mousePosition.x + tooltipGap}
          y2={mousePosition.y + 120}
          className="stroke-blue-400 animate-draw"
          strokeWidth="2"
          strokeDasharray="4 2"
        />
      </svg>

      {/* Tooltip Boxes with Staggered Animation */}
      <div 
        className="absolute flex flex-col gap-4"
        style={{
          left: `${mousePosition.x + tooltipGap + 10}px`,
          top: `${mousePosition.y - 160}px`,
          width: `${tooltipWidth}px`
        }}
      >
        {/* Overview Box */}
        <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-gray-200 
                      hover:shadow-2xl transition-all duration-300 animate-slide-right">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-300">
              <CircleDot className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">{region.details.title}</h3>
              <p className="text-gray-700">{region.details.description}</p>
            </div>
          </div>
        </div>

        {/* Key Findings Box */}
        {region.findings && (
          <div 
            className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-gray-200 
                       hover:shadow-2xl transition-all duration-300 animate-slide-right-delay-1"
            style={{ marginTop: tooltipSpacing }}
          >
            <h4 className="font-semibold text-gray-900 mb-3">Key Findings</h4>
            <div className="grid gap-2">
              {region.findings.mass && (
                <div className="flex items-center gap-2 text-gray-700 hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
                  <Activity className="w-4 h-4" />
                  <span>Mass Present</span>
                </div>
              )}
              {region.findings.calcification && (
                <div className="flex items-center gap-2 text-gray-700 hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
                  <BrainCircuit className="w-4 h-4" />
                  <span>Calcification</span>
                </div>
              )}
              {region.findings.axilla && (
                <div className="flex items-center gap-2 text-gray-700 hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
                  <Activity className="w-4 h-4" />
                  <span>Axilla Findings</span>
                </div>
              )}
              {region.findings.tissue && (
                <div className="flex items-center gap-2 text-gray-700 hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Breast Tissue</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Detailed Report Box */}
        {region.details.report && (
          <div 
            className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-gray-200 
                       hover:shadow-2xl transition-all duration-300 animate-slide-right-delay-2"
            style={{ marginTop: tooltipSpacing }}
          >
            <h4 className="font-semibold text-gray-900 mb-3">Detailed Report</h4>
            <div className="space-y-2 text-sm">
              {region.details.report.massPresence && (
                <div className="grid grid-cols-2 hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
                  <span className="text-gray-600">Mass Presence:</span>
                  <span className="font-medium">{region.details.report.massPresence}</span>
                </div>
              )}
              {region.details.report.massDefinition && (
                <div className="grid grid-cols-2 hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
                  <span className="text-gray-600">Mass Definition:</span>
                  <span className="font-medium">{region.details.report.massDefinition}</span>
                </div>
              )}
              {region.details.report.massDensity && (
                <div className="grid grid-cols-2 hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
                  <span className="text-gray-600">Mass Density:</span>
                  <span className="font-medium">{region.details.report.massDensity}</span>
                </div>
              )}
              {region.details.report.massShape && (
                <div className="grid grid-cols-2 hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
                  <span className="text-gray-600">Mass Shape:</span>
                  <span className="font-medium">{region.details.report.massShape}</span>
                </div>
              )}
              {region.details.report.calcificationPresence && (
                <div className="grid grid-cols-2 hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
                  <span className="text-gray-600">Calcification:</span>
                  <span className="font-medium">{region.details.report.calcificationPresence}</span>
                </div>
              )}
              {region.details.report.calcificationType && (
                <div className="grid grid-cols-2 hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
                  <span className="text-gray-600">Calcification Type:</span>
                  <span className="font-medium">{region.details.report.calcificationType}</span>
                </div>
              )}
              {region.details.report.breastDensity && (
                <div className="grid grid-cols-2 hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
                  <span className="text-gray-600">Breast Density:</span>
                  <span className="font-medium">{region.details.report.breastDensity}</span>
                </div>
              )}
              {region.details.report.biradsCategory && (
                <div className="grid grid-cols-2 hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
                  <span className="text-gray-600">BIRADS Category:</span>
                  <span className="font-medium">{region.details.report.biradsCategory}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}