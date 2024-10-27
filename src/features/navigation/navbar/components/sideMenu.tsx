import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function SideMenu() {
    return (
        <Sheet>
            <SheetTrigger className="hover:scale-110 transform transition-transform cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
            </SheetTrigger>

            <SheetContent className="text-primary_dark bg-light dark:bg-dark dark:text-white">
                <SheetHeader>
                    <SheetTitle className="font-black text-2xl">
                        Indicadores
                    </SheetTitle>
                    <SheetDescription>
                        Seleccionar los indicadores a visualizar
                    </SheetDescription>

                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
