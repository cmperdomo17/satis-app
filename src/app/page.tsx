import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Link href="/indicators">
        <Button variant="custom">
          Lista de Indicadores
        </Button>
      </Link>
    </main>
  )
}
