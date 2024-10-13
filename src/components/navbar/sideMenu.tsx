import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";

export default function SideMenu() {
    return (
        <Sheet>
            <SheetTrigger className="hover:scale-110 transform transition-transform cursor-pointer">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
                >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
                </svg>
            </SheetTrigger>

            <SheetContent className="text-primary_dark bg-white dark:bg-primary_light dark:text-white">
                <SheetHeader>
                    <SheetTitle className="font-black text-3xl">
                        SATIS
                    </SheetTitle>
                    <SheetDescription className="text-lg">
                        Sistema de Atención y Soporte
                    </SheetDescription>
                    <div className="flex gap-4 items-center">
                        <Checkbox className="dark:border-white text-white" />
                        <label className="text-primary_dark dark:text-white">Opción 1</label>
                    </div>

                    <div className="flex gap-4 items-center">
                        <Checkbox className="dark:border-white text-white" />
                        <label className="text-primary_dark dark:text-white">Opción 2</label>
                    </div>

                    <div className="flex gap-4 items-center">
                        <Checkbox className="dark:border-white text-white" />
                        <label className={`text-primary_dark dark:text-white`}>Opción 3</label>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
