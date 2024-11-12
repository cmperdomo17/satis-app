import axios from "axios";
import { DataDetailsResponse, ResponseData } from "../types/requestApiType";

export class TimeService {
  static async fetchRequestsData() {
    try {
      const response = await axios.get("/api/indicador1");

      const formattedData: ResponseData = {
        averageResolutionTime: response.data.averageResolutionTime,
        mostFrequentResolutionType: response.data.mostFrequentResolutionType,
        medianResolutionTime: response.data.medianResolutionTime,
        resolutionTypeFrequency: {
          assistance: response.data.resolutionTypeFrequency.assistance || 0,
          "bug fixed": response.data.resolutionTypeFrequency["bug fixed"] || 0,
          "hardware repair":
            response.data.resolutionTypeFrequency["hardware repair"] || 0,
          other: response.data.resolutionTypeFrequency.other || 0,
          "software patch":
            response.data.resolutionTypeFrequency["software patch"] || 0,
          "system update":
            response.data.resolutionTypeFrequency["system update"] || 0,
          training: response.data.resolutionTypeFrequency.training || 0,
        },
        details: response.data.details.map((detail: DataDetailsResponse) => ({
          request_type: detail.request_type,
          impact: detail.impact,
          priority: detail.priority,
          urgency: detail.urgency,
          origin: detail.origin,
          averageResolutionTime: detail.averageResolutionTime,
          mostFrequentResolutionType: detail.mostFrequentResolutionType,
        })),
      };

      return formattedData;
    } catch (error) {
      console.error("Error fetching times data:", error);
      throw error;
    }
  }
}
