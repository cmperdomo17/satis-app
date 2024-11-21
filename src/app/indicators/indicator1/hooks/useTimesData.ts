import { useState, useEffect } from "react";
import { ResponseData } from "../types/requestApiType";
import { TimeService } from "../services/times-service";

export const useTimesData = (
  filters?: Record<string, string[]>
): { timesData: ResponseData | undefined } => {
  const [timesData, setTimesData] = useState<ResponseData>();

  useEffect(() => {
    const loadRequestsData = async () => {
      try {
        const formattedData = await TimeService.fetchRequestsData(filters);
        setTimesData(formattedData);
      } catch (error) {
        console.error("Error loading times data:", error);
      }
    };

    loadRequestsData();
  }, [filters]);

  return { timesData };
};
