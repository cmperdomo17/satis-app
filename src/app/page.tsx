import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
      <Image
          src="/satis_logo.png"
          alt="Satis"
          width="256"
          height="256"
      />
      <p className="text-2xl lg:text-lg text-center">
        Ver dashboard de contacto
      </p>
      <Link href={"/contact"}>
        <Button className="text-2xl lg:text-lg bg-primary_light hover:border-2 hover:border-primary_light">
          Contacto
        </Button>
      </Link>
    </div>
  );
}
