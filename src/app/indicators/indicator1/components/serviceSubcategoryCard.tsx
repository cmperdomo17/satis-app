import { Card, CardDescription, CardTitle } from "@/components/ui/card";

type serviceSubcategory = {
  id: number;
  name: string;
  description: string;
  service_id: number;
  request_type: "incident" | "service_request";
  status: "implementation" | "obsolete" | "production" | null;
};

type serviceSubProps = {
  serviceSubCat: serviceSubcategory;
};

const fillColorSquare: { [key: string]: string } = {
  production: "bg-green-500",
  implementation: "bg-blue-500",
  obsolete: "bg-red-500",
};

const colorText: { [key: string]: string } = {
  production: "text-green-600",
  implementation: "text-blue-600",
  obsolete: "text-red-600",
};

export default function ServiceSubCard({ serviceSubCat }: serviceSubProps) {
  return (
    <Card className="flex flex-row w-full h-[100px]">
      <div
        className={`rounded-xl w-1/5 ${fillColorSquare[serviceSubCat.status!]}`}
      ></div>

      <div className="w-2/3 flex flex-col p-4">
        <CardTitle>{serviceSubCat.name}</CardTitle>
        <CardDescription>{serviceSubCat.description}</CardDescription>
        <p className="text-sm font-semibold">
          Tipo de peticion:{" "}
          {serviceSubCat.request_type === "incident"
            ? "Incidente"
            : "De servicio"}
        </p>

        {/* Estatus */}
        <p
          className={`text-sm font-semibold ${
            colorText[serviceSubCat.status!]
          }`}
        >
          Estado:{" "}
          {serviceSubCat.status === "implementation"
            ? "Implementacion"
            : serviceSubCat.status === "production"
            ? "Produccion"
            : "Obsoleto"}
        </p>
      </div>
    </Card>
  );
}
