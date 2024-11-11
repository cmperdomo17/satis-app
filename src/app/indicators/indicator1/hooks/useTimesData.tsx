import { useState, useEffect } from "react";
import { ResponseData } from "../types/requestApiType";
import { TimeService } from "../services/times-service";

export const useTimesData = (): { timesData: ResponseData | undefined } => {
  const [timesData, setTimesData] = useState<ResponseData>();

  useEffect(() => {
    const loadRequestsData = async () => {
      try {
        const formattedData = await TimeService.fetchRequestsData();
        setTimesData(formattedData);
      } catch (error) {
        console.error("Error loading times data:", error);
      }
    };

    loadRequestsData();
  }, []);

  return { timesData };
};
