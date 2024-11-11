export type ResolutionTypeKey =
  | "assistance"
  | "bug fixed"
  | "hardware repair"
  | "system update"
  | "other"
  | "software patch"
  | "training";

export type ResolutionTypeFrequencyResponse = {
  assistance: number;
  "bug fixed": number;
  "hardware repair": number;
  "system update": number;
  other: number;
  "software patch": number;
  training: number;
};

export type DataDetailsResponse = {
  request_type: string;
  impact: number;
  priority: number;
  urgency: number;
  origin: "mail" | "monitoring" | "phone" | "portal";
  averageResolutionTime: number;
  mostFrequentResolutionType: ResolutionTypeKey;
};

export type ResponseData = {
  averageResolutionTime: number;
  medianResolutionTime: number;
  mostFrequentResolutionType:ResolutionTypeKey;
  resolutionTypeFrequency: ResolutionTypeFrequencyResponse;
  details: DataDetailsResponse[];
};
