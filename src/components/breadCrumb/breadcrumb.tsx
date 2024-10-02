import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BreadCrumbList } from "./breadCrumbList"

export default function BreadCrumb() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {BreadCrumbList.map((item, index) => (
                    <>
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink href={item.link}>
                                {item.title}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}