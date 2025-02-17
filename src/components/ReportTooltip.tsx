import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Region } from '../types';
import { CircleDot, BrainCircuit, Activity, FileSpreadsheet } from 'lucide-react';

interface ReportTooltipProps {
  region: Region;
}

export function ReportTooltip({ region }: ReportTooltipProps) {
  return (
    <Tooltip.Content
      className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl max-w-md z-50 border border-gray-200
                 animate-in fade-in duration-200"
      sideOffset={5}
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <CircleDot className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">{region.details.title}</h3>
            <p className="text-gray-700">{region.details.description}</p>
          </div>
        </div>

        {region.findings && (
          <div className="border-t pt-3">
            <h4 className="font-semibold text-gray-900 mb-2">Key Findings</h4>
            <div className="grid grid-cols-2 gap-2">
              {region.findings.mass && (
                <div className="flex items-center gap-2 text-gray-700">
                  <Activity className="w-4 h-4" />
                  <span>Mass Present</span>
                </div>
              )}
              {region.findings.calcification && (
                <div className="flex items-center gap-2 text-gray-700">
                  <BrainCircuit className="w-4 h-4" />
                  <span>Calcification</span>
                </div>
              )}
              {region.findings.axilla && (
                <div className="flex items-center gap-2 text-gray-700">
                  <Activity className="w-4 h-4" />
                  <span>Axilla Findings</span>
                </div>
              )}
              {region.findings.tissue && (
                <div className="flex items-center gap-2 text-gray-700">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Breast Tissue</span>
                </div>
              )}
            </div>
          </div>
        )}

        {region.details.report && (
          <div className="border-t pt-3">
            <h4 className="font-semibold text-gray-900 mb-2">Detailed Report</h4>
            <div className="space-y-2 text-sm">
              {region.details.report.massPresence && (
                <div className="grid grid-cols-2">
                  <span className="text-gray-600">Mass Presence:</span>
                  <span className="font-medium">{region.details.report.massPresence}</span>
                </div>
              )}
              {region.details.report.massDefinition && (
                <div className="grid grid-cols-2">
                  <span className="text-gray-600">Mass Definition:</span>
                  <span className="font-medium">{region.details.report.massDefinition}</span>
                </div>
              )}
              {region.details.report.massDensity && (
                <div className="grid grid-cols-2">
                  <span className="text-gray-600">Mass Density:</span>
                  <span className="font-medium">{region.details.report.massDensity}</span>
                </div>
              )}
              {region.details.report.massShape && (
                <div className="grid grid-cols-2">
                  <span className="text-gray-600">Mass Shape:</span>
                  <span className="font-medium">{region.details.report.massShape}</span>
                </div>
              )}
              {region.details.report.calcificationPresence && (
                <div className="grid grid-cols-2">
                  <span className="text-gray-600">Calcification:</span>
                  <span className="font-medium">{region.details.report.calcificationPresence}</span>
                </div>
              )}
              {region.details.report.calcificationType && (
                <div className="grid grid-cols-2">
                  <span className="text-gray-600">Calcification Type:</span>
                  <span className="font-medium">{region.details.report.calcificationType}</span>
                </div>
              )}
              {region.details.report.breastDensity && (
                <div className="grid grid-cols-2">
                  <span className="text-gray-600">Breast Density:</span>
                  <span className="font-medium">{region.details.report.breastDensity}</span>
                </div>
              )}
              {region.details.report.biradsCategory && (
                <div className="grid grid-cols-2">
                  <span className="text-gray-600">BIRADS Category:</span>
                  <span className="font-medium">{region.details.report.biradsCategory}</span>
                </div>
              )}
            </div>
          </div>
        )}

        <Tooltip.Arrow className="fill-white" />
      </div>
    </Tooltip.Content>
  );
}