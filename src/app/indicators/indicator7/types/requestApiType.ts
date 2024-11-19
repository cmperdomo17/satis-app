export interface Counts {
  approved?: number;
  assigned?: number;
  closed?: number;
  dispatched?: number;
  escalated_tto?: number;
  escalated_ttr?: number;
  new?: number;
  pending?: number;
  redispatched?: number;
  rejected?: number;
  resolved?: number;
  waiting_for_approval?: number;
}

export interface Service {
  serviceName: string;
  counts: Counts;
  total: number;
  percentage: number;
}

export interface Services {
  [key: string]: Service;
}
