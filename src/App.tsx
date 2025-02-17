import React from 'react';
import { ImageSegmentation } from './components/ImageSegmentation';
import type { Region } from './types';

// Regions for the mammogram
const mammogramRegions: Region[] = [
  {
    id: '1',
    coords: 'M 600 100 C 650 100, 700 150, 700 200 C 700 250, 650 300, 600 300 C 550 300, 500 250, 500 200 C 500 150, 550 100, 600 100 Z',
    findings: {
      mass: true,
      calcification: true,
      tissue: true
    },
    details: {
      title: 'Upper Outer Quadrant',
      description: 'Dense tissue area with suspicious mass and calcifications.',
      report: {
        massPresence: 'Yes',
        massDefinition: 'Spiculated',
        massDensity: 'High Dense',
        massShape: 'Irregular',
        calcificationPresence: 'Yes',
        calcificationType: 'Cluster/Grouped',
        breastDensity: 'heterogeneously dense',
        biradsCategory: '4'
      }
    }
  },
  {
    id: '2',
    coords: 'M 550 350 C 600 350, 650 400, 650 450 C 650 500, 600 550, 550 550 C 500 550, 450 500, 450 450 C 450 400, 500 350, 550 350 Z',
    findings: {
      tissue: true,
      axilla: true
    },
    details: {
      title: 'Lower Inner Quadrant',
      description: 'Normal breast tissue with typical parenchymal pattern.',
      report: {
        massPresence: 'No',
        breastDensity: 'fibroglandular/mixed fatty and fibroglandular',
        axillaFindings: 'No',
        calcificationPresence: 'No',
        biradsCategory: '1'
      }
    }
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white">Mammogram Analysis</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-white">Detailed Mammogram Report</h2>
          <div className="relative">
            <ImageSegmentation
              imageSrc="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              regions={mammogramRegions}
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              Hover over highlighted regions for detailed findings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;