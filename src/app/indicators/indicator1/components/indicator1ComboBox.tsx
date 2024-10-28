"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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

type serviceFamily = {
  id: number;
  name: string;
  /*
    icon_data: longlob;
    icon_mimetype: string;
    icon_filename: string;
    */
};

type Indicator1ComboboxProps = {
  projects: serviceFamily[];
  onSelectionChange: (value: number) => void;
};

export default function Indicator1Combobox({
  projects,
  onSelectionChange,
}: Indicator1ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          size="dropdown"
          className="w-[200px] items-center justify-between border-primary_dark dark:border-white hover:bg-primary_dark/10 dark:hover:bg-primary_dark/20"
        >
          {value
            ? projects.find((project) => project.name === value)?.name
            : "Seleccionar proyecto..."}
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar Proyecto..." />
          <CommandList>
            <CommandEmpty>No se encontró un proyecto.</CommandEmpty>
            <CommandGroup>
              {projects?.map((project) => (
                <CommandItem
                  key={project.id}
                  value={project.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    onSelectionChange(project.id);
                    setOpen(false);
                  }}
                >
                  {project.name}
                  {/* <Link href={project.url || ""}>{indicador.nombre}</Link> */}
                  <Check
                    className={cn(
                      "size-4 ml-auto mr-2",
                      value === project.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
