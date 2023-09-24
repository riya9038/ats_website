export interface TableFlowDataType {
  key: string;
  status: string;
  qualified: number;
  disqualified: number;
}

export interface TableOverviewDataType {
  key: string;
  applied: number;
  status: string;
  recommended: number;
  offer: number;
  interview: number;
  hired: number;
}

export interface CandidateDataType {
  candidate: number;
  percent: number;
}

export interface OverviewDataType {
  name: string;
  stats: number;
  change?: number;
  percent?: number;
  position: string;
}
