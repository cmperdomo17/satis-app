"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function DynamicBreadcrumb() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(segment => segment !== '');

    const breadcrumbItems = [
        { title: 'Home', link: '/' },
        ...pathSegments.map((segment, index) => ({
            title: segment.charAt(0).toUpperCase() + segment.slice(1),
            link: `/${pathSegments.slice(0, index + 1).join('/')}`,
        })),
    ];

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={item.link}>
                        <BreadcrumbItem>
                            {index === breadcrumbItems.length - 1 ? (
                                <BreadcrumbPage>{item.title}</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink href={item.link}>
                                    {item.title}
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}