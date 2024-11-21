import axios from "axios";
import { ResponseData } from "../types/requestApiType";

export class TimeService {
  static async fetchRequestsData(filters?: Record<string, string[]>) {
    try {
      const queryParams = new URLSearchParams();
      if (filters) {
        let index = 1;
        Object.entries(filters).forEach(([key, values]) => {
          values.forEach((value) => {
            queryParams.append(`key${index}`, key);
            queryParams.append(`value${index}`, value);
            index++;
          });
        });
      }
      
      console.log(queryParams.toString());

      const response = await axios.get<ResponseData>(
        `/api/indicador1?${queryParams.toString()}`
      );

      const formattedData: ResponseData = {
        globalMetrics: {
          averageResolutionTime:
            response.data.globalMetrics.averageResolutionTime,
          mostFrequentResolutionType:
            response.data.globalMetrics.mostFrequentResolutionType,
          medianResolutionTime:
            response.data.globalMetrics.medianResolutionTime,
          resolutionTypeFrequency: {
            assistance:
              response.data.globalMetrics.resolutionTypeFrequency.assistance ||
              0,
            "bug fixed":
              response.data.globalMetrics.resolutionTypeFrequency[
                "bug fixed"
              ] || 0,
            "hardware repair":
              response.data.globalMetrics.resolutionTypeFrequency[
                "hardware repair"
              ] || 0,
            other:
              response.data.globalMetrics.resolutionTypeFrequency.other || 0,
            "software patch":
              response.data.globalMetrics.resolutionTypeFrequency[
                "software patch"
              ] || 0,
            "system update":
              response.data.globalMetrics.resolutionTypeFrequency[
                "system update"
              ] || 0,
            training:
              response.data.globalMetrics.resolutionTypeFrequency.training || 0,
          },
        },
        filteredMetrics: {
          averageResolutionTime:
            response.data.filteredMetrics?.averageResolutionTime || 0,
          mostFrequentResolutionType:
            response.data.filteredMetrics?.mostFrequentResolutionType ||
            "assistance",
          medianResolutionTime:
            response.data.filteredMetrics?.medianResolutionTime || 0,
          resolutionTypeFrequency: {
            assistance:
              response.data.filteredMetrics?.resolutionTypeFrequency
                .assistance || 0,
            "bug fixed":
              response.data.filteredMetrics?.resolutionTypeFrequency[
                "bug fixed"
              ] || 0,
            "hardware repair":
              response.data.filteredMetrics?.resolutionTypeFrequency[
                "hardware repair"
              ] || 0,
            other:
              response.data.filteredMetrics?.resolutionTypeFrequency.other || 0,
            "software patch":
              response.data.filteredMetrics?.resolutionTypeFrequency[
                "software patch"
              ] || 0,
            "system update":
              response.data.filteredMetrics?.resolutionTypeFrequency[
                "system update"
              ] || 0,
            training:
              response.data.filteredMetrics?.resolutionTypeFrequency.training ||
              0,
          },
        },
      };

      return formattedData;
    } catch (error) {
      console.error("Error fetching times data:", error);
      throw error;
    }
  }
}
