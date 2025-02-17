export interface Finding {
  id: string;
  title: string;
  options: string[];
  selected?: string;
}

export interface Report {
  massPresence: string;
  massDefinition?: string;
  massDensity?: string;
  massShape?: string;
  axillaFindings: string;
  calcificationPresence: string;
  calcificationType?: string;
  breastDensity: string;
  biradsCategory: string;
}

export interface Region {
  id: string;
  coords: string;
  findings: {
    mass?: boolean;
    calcification?: boolean;
    axilla?: boolean;
    tissue?: boolean;
  };
  details: {
    title: string;
    description: string;
    report?: Partial<Report>;
  };
}