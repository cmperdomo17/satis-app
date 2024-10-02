import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BreadCrumbList } from "./breadCrumbList"

export default function DynamicBreadCrumb() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {BreadCrumbList.map((item, index) => (
                    <React.Fragment key={index}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={item.link}>
                                {item.title}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        {index < BreadCrumbList.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}