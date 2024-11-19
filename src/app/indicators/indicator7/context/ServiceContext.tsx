"use client"

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { Service } from "../types/requestApiType";

export interface ServiceContextInterface {
  service: Service;
  setService: Dispatch<SetStateAction<Service>>;
}

const defaultState = {
  service: {
    serviceName: "",
    counts: {},
    total: 0,
    percentage: 0,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setService: (service: Service) => {},
} as ServiceContextInterface;

export const ServiceContext = createContext(defaultState);

type ServiceProviderProps = {
  children: ReactNode;
};

export default function ServiceProvider({ children }: ServiceProviderProps) {
  const [service, setService] = useState<Service>({
    serviceName: "",
    counts: {},
    total: 0,
    percentage: 0,
  });

  return (
    <ServiceContext.Provider value={{ service, setService }}>
      {children}
    </ServiceContext.Provider>
  );
}
