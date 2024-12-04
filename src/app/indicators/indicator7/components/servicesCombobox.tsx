"use client";

import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useContext, useState } from "react";

import { Services } from "../types/requestApiType";
import { ServiceContext } from "../context/ServiceContext";

interface Props {
  services: Services;
}

export default function ServicesCombobox({ services }: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const pathname = usePathname();
  const { setService } = useContext(ServiceContext);


  if (!services) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            size="dropdown"
            className="w-auto gap-4 items-center justify-between border-primary_dark dark:border-white hover:bg-primary_dark/10 dark:hover:bg-primary_dark/20"
          >
            {value !== "" && pathname !== "/"
              ? Object.values(services).find(
                  (service) => service.serviceName === value
                )?.serviceName
              : "Seleccionar servicio..."}
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                open && "rotate-180"
              }`}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Buscar requerimiento..." />
            <CommandList>
              <CommandEmpty>No se encontró un requerimiento.</CommandEmpty>
              <CommandGroup>
                {Object.keys(services).map((key) => (
                  <CommandItem
                    key={key}
                    value={services[key].serviceName}
                    onSelect={(currentValue) => {
                      setValue(currentValue);
                      setOpen(false);
                      setService(services[key]);
                    }}
                  >
                    {services[key].serviceName}
                    <Check
                      className={cn(
                        "size-4 ml-auto mr-2",
                        value === services[key].serviceName
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
