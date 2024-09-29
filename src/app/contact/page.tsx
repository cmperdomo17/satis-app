import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Contact () {
    return (
        <div className="w-[70%] flex flex-col gap-10">
            <Table className="text-xl">
                <TableCaption className="bg-primary_light text-xl font-black">Lista de contacto</TableCaption>
                <TableHeader>
                    <TableRow className="font-black">
                        <TableHead className="text-center">ID</TableHead>
                        <TableHead className="text-center">Name</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                        <TableHead className="text-center">Email</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="text-center">
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Satis</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>satis@unicauca.edu.co</TableCell>
                    </TableRow>
                    <TableRow className="text-center">
                        <TableCell className="font-medium">2</TableCell>
                        <TableCell>PULSOS</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>pulsos@unicauca.edu.co</TableCell>
                    </TableRow>
                    <TableRow className="text-center">
                        <TableCell className="font-medium">3</TableCell>
                        <TableCell>FIET</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>ce-fiet@unicauca.edu.co</TableCell>
                    </TableRow>
                    <TableRow className="text-center">
                        <TableCell className="font-medium">4</TableCell>
                        <TableCell>Unicauca</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>ramaieee@unicauca.edu.co</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Link href={"/"}>
                <Button variant="custom">
                    Regresar
                </Button>
            </Link>
        </div>
        
    )
}