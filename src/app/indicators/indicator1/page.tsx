"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import PercentagePieChart from "./components/PercentagePieChart";
import Indicator1Combobox from "./components/indicator1ComboBox";
import ServiceSubCard from "./components/serviceSubcategoryCard";
import axios from "axios";

export const description = "A donut chart with text";

interface chartData {
  name: string;
  percentage: number;
  fill: string;
}

// Project
type serviceFamily = {
  id: number;
  name: string;
  /*
    icon_data: longlob;
    icon_mimetype: string;
    icon_filename: string;
    */
};

// Subproject
type service = {
  id: number;
  name: string;
  org_id: number;
  servicefamily_id: number;
  description: string;
  status: "implementation" | "obsolete" | "production" | null;
  /*
    icon_data: longlob;
    icon_mimetype: string;
    icon_filename: string;
    */
};

// Subcategories
type serviceSubcategory = {
  id: number;
  name: string;
  description: string;
  service_id: number;
  request_type: "incident" | "service_request";
  status: "implementation" | "obsolete" | "production" | null;
};

export default function Indicator1() {
  // Variable declarations
  const [serviceFamily_table, setServiceFamily_table] = useState<
    serviceFamily[]
  >([]);

  const [actual_serviceFamily, setActual_serviceFamily] =
    useState<serviceFamily>();

  const [service_table, setService_table] = useState<service[]>([]);

  const [serviceSubcategory_table, setServiceSubcategory_table] = useState<
    serviceSubcategory[][]
  >([]);

  const [percentages, setPercentages] = useState<percentagesServiceFamily>();

  // Functions Declarations
  const handleSelectionChange = (value: number) => {
    const selectedServiceFamily = serviceFamily_table.find(
      (serviceFamily) => serviceFamily.id === value
    );

    if (selectedServiceFamily) {
      setActual_serviceFamily(selectedServiceFamily);
    }
  };

  // Get serviceFamily table data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/serviceFamilies"
        );

        const formattedData: serviceFamily[] = response.data.map(
          (item: serviceFamily) => ({
            id: item.id,
            name: item.name,
          })
        );

        setServiceFamily_table(formattedData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  // Set initial service_family
  useEffect(() => {
    if (serviceFamily_table.length > 0) {
      setActual_serviceFamily(serviceFamily_table[0]);
    }
  }, [serviceFamily_table]);

  // Set service table data for the actual service_family
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/services/${actual_serviceFamily?.id}`
        );

        const formmatedData: service[] = response.data.map((item: service) => ({
          id: item.id,
          name: item.name,
          org_id: item.org_id,
          description: item.description,
          servicefamily_id: item.servicefamily_id,
          status: item.status,
        }));

        setService_table(formmatedData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [actual_serviceFamily]);

  //GET all serviceSubcategory data for actual serviceFamily
  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = service_table.map((service) =>
          axios.get(
            `http://localhost:8080/api/services/${actual_serviceFamily?.id}/${service.id}/subcategories`
          )
        );
        const responses = await Promise.all(requests);

        const formattedData: serviceSubcategory[][] = responses.map(
          (response) =>
            response.data.map((item: serviceSubcategory) => ({
              id: item.id,
              name: item.name,
              description: item.description,
              service_id: item.service_id,
              request_type: item.request_type,
              status: item.status,
            }))
        );

        setServiceSubcategory_table(formattedData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [service_table]);

  // Get all percentages
  useEffect(() => {
    if (
      actual_serviceFamily &&
      service_table.length > 0 &&
      serviceSubcategory_table.length > 0
    ) {
      const getPercentages: percentagesServiceFamily =
        calculatePercentageServiceFamily(
          actual_serviceFamily,
          service_table,
          serviceSubcategory_table
        );
      setPercentages(getPercentages);
    }
  }, [serviceSubcategory_table]);

  const dataServiceFamilyChart: chartData = {
    name: "porcentaje",
    percentage: percentages ? percentages.percentage : 0,
    fill: "#00FF00",
  };

  const serviceSubcategoryIndex = new Map<number, serviceSubcategory[]>();

  serviceSubcategory_table.forEach((serviceSubArray) => {
    serviceSubArray.forEach((serviceSub) => {
      if (!serviceSubcategoryIndex.has(serviceSub.service_id)) {
        serviceSubcategoryIndex.set(serviceSub.service_id, []);
      }
      serviceSubcategoryIndex.get(serviceSub.service_id)!.push(serviceSub);
    });
  });

  return (
    <div className="flex flex-row gap-4">
      <Indicator1Combobox
        projects={serviceFamily_table}
        onSelectionChange={handleSelectionChange}
      ></Indicator1Combobox>

      <div className="h-[450px] w-[380px]">
        <PercentagePieChart
          data={dataServiceFamilyChart}
          title={actual_serviceFamily?.name || "Error"}
        />
      </div>
      <ScrollArea className="h-[700px] w-[900px] rounded-b border p-4">
        {service_table.map((service) => (
          <div key={service.id} className="w-full h-auto flex mb-5">
            <PercentagePieChart
              data={{
                name: "porcentaje",
                percentage: percentages
                  ? percentages.services_percentages.find(
                      (serviceP) => serviceP.service_id === service.id
                    )?.percentage ?? 0
                  : 0,
                fill: "#00FF00",
              }}
              title={service.name}
              description={service.description}
            />
            <div className="w-full">
              {serviceSubcategoryIndex.get(service.id)?.map((serviceSub) => (
                <ServiceSubCard serviceSubCat={serviceSub}></ServiceSubCard>
              ))}
            </div>
          </div>
        ))}

        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}

type percentagesServices = {
  service_id: number;
  percentage: number;
};

type percentagesServiceFamily = {
  servicefamily_id: number;
  percentage: number;
  services_percentages: percentagesServices[];
};

const statusValues: { [key: string]: number } = {
  obsolete: 0,
  implementation: 1,
  production: 2,
};

function calculatePercentageServiceFamily(
  serviceFamily: serviceFamily,
  services: service[],
  serviceSubcategories: serviceSubcategory[][]
): percentagesServiceFamily {
  const services_percentages = calculatePercentageService(
    services,
    serviceSubcategories
  );

  const totalPercentage = services_percentages.reduce(
    (acc, service) => acc + service.percentage,
    0
  );

  const averagePercentage =
    services_percentages.length > 0
      ? Math.round(totalPercentage / services_percentages.length)
      : 0;

  return {
    servicefamily_id: serviceFamily.id,
    percentage: averagePercentage,
    services_percentages: services_percentages,
  };
}

function calculatePercentageService(
  services: service[],
  serviceSubcategories: serviceSubcategory[][]
): percentagesServices[] {
  return services.map((service) => {
    const subcategories = serviceSubcategories.find(
      (subcatArray: serviceSubcategory[]) =>
        subcatArray.length > 0 && subcatArray[0].service_id === service.id
    );

    if (!subcategories) {
      return { service_id: service.id, percentage: 0 };
    }

    const percentage = calculatePercentageServiceSub(subcategories);

    return { service_id: service.id, percentage };
  });
}

function calculatePercentageServiceSub(
  serviceSubcategory: serviceSubcategory[]
): number {
  const totalPercentage = serviceSubcategory.reduce((acc, subcategory) => {
    if (subcategory.status === null || !(subcategory.status in statusValues)) {
      return acc;
    }

    const statusValue = statusValues[subcategory.status];
    const percentage = (statusValue / 2) * 100;

    return acc + percentage;
  }, 0);

  const averagePercentage = Math.round(
    totalPercentage / serviceSubcategory.length
  );

  return averagePercentage;
}
