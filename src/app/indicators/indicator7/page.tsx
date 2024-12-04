import { RequestsServicesService } from "./services/requestServices-service";
import ServicesCombobox from "./components/servicesCombobox";
import ServiceProvider from "./context/ServiceContext";
import ServiceCard from "./components/ServiceCard";

export default async function Indicator7() {
  const services = await RequestsServicesService.fetchApiData();

  return (
    <div>
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">
          Estados e implementación de los requerimientos por servicio
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Estados de los requerimientos y su porcentaje de implementación para
          los servicios de la Universidad del Cauca.
        </p>
      </div>
      <ServiceProvider>
        <div className="flex justify-center items-center my-5">
          <ServicesCombobox services={services}></ServicesCombobox>
        </div>
        <ServiceCard></ServiceCard>
      </ServiceProvider>
    </div>
  );
}
