"use client";

import { useContext } from "react";
import { ServiceContext } from "../context/ServiceContext";
import { CustomPieChart } from "./customPieChart";
import { CustomBarChart } from "./customBarChart";

export default function ServiceCard() {
  const { service } = useContext(ServiceContext);

  return (
    <div>
      {service.serviceName !== "" && (
        <>
          <CustomBarChart service={service} />
          <CustomPieChart pieType={1} service={service} />
        </>
      )}
    </div>
  );
}
