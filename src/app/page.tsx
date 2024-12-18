import Logo from "@/components/logo/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-10">
      <Logo />
      <h1>Bienvenido a Satis</h1>
      <Link href="/indicators">
        <Button variant="custom">
          Lista de Indicadores
        </Button>
      </Link>
    </main>
  )
}
