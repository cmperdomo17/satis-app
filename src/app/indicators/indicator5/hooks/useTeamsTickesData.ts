import { useState, useEffect } from "react";
import { ResponseData } from "../types/requestApiType";
import { TeamsTicketsService } from "../services/teamsTickets-service";

export const useTeamsTicketsData = () => {
  const [teamsTicketsData, setTeamsTicketsData] = useState<ResponseData[]>();

  useEffect(() => {
    const loadRequestsData = async () => {
      try {
        const data = await TeamsTicketsService.fetchRequestData();
        setTeamsTicketsData(data);
      } catch (error) {
        console.error("Error loading times data:", error);
      }
    };

    loadRequestsData();
  });

  return { teamsTicketsData };
};
