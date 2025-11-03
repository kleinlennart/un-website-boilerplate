"use client";

import Image from "next/image";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { UNCard, UNCardContent, UNCardDescription, UNCardHeader, UNCardTitle } from "@/components/custom/UNCard";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ComponentsPage() {
    const countries = [
        { code: "USA", name: "United States", region: "Americas" },
        { code: "CHN", name: "China", region: "Asia" },
        { code: "IND", name: "India", region: "Asia" },
        { code: "BRA", name: "Brazil", region: "Americas" },
        { code: "DEU", name: "Germany", region: "Europe" },
    ];

    return (
        <main className="min-h-screen bg-background px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto py-8">
                    {/* Logo */}
                    <Image
                        src="/images/UN Logo_Horizontal_Colour_English.svg"
                        alt="UN Logo"
                        width={200}
                        height={48}
                        className="h-10 sm:h-12 w-auto select-none mb-12"
                        draggable={false}
                        unoptimized
                    />

                    {/* Header */}
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-foreground">
                            Components
                        </h1>
                        <p className="mt-2 text-foreground">
                            Explore reusable components for UN web applications.
                        </p>
                    </header>

                    {/* PrimeReact DataTable Example */}
                    <section className="mb-12">
                        <header className="mb-4">
                            <h2 className="text-2xl font-bold text-foreground mb-2">
                                PrimeReact DataTable
                            </h2>
                            <a
                                href="https://primereact.org/datatable/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-un-blue hover:underline inline-block"
                            >
                                View Documentation
                            </a>
                        </header>
                        <DataTable 
                            value={countries} 
                            stripedRows 
                            showGridlines
                            className="[&_th]:font-bold [&_th]:border-b-2 [&_th]:border-un-blue [&_td]:border-b [&_td]:border-gray-200"
                        >
                            <Column field="code" header="Code" />
                            <Column field="name" header="Country" />
                            <Column field="region" header="Region" />
                        </DataTable>
                    </section>

                    {/* Shadcn Card Example */}
                    <section className="mb-12">
                        <header className="mb-4">
                            <h2 className="text-2xl font-bold text-foreground mb-2">
                                Shadcn Card
                            </h2>
                            <a
                                href="https://ui.shadcn.com/docs/components/card"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-un-blue hover:underline inline-block"
                            >
                                View Documentation
                            </a>
                        </header>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <UNCard>
                                <UNCardHeader>
                                    <UNCardTitle>UN Sustainable Development</UNCardTitle>
                                    <UNCardDescription>Goal 1: No Poverty</UNCardDescription>
                                </UNCardHeader>
                                <UNCardContent>
                                    <p className="text-sm">
                                        End poverty in all its forms everywhere by 2030.
                                    </p>
                                </UNCardContent>
                            </UNCard>
                            <UNCard>
                                <UNCardHeader>
                                    <UNCardTitle>UN Sustainable Development</UNCardTitle>
                                    <UNCardDescription>Goal 2: Zero Hunger</UNCardDescription>
                                </UNCardHeader>
                                <UNCardContent>
                                    <p className="text-sm">
                                        End hunger, achieve food security and improved nutrition.
                                    </p>
                                </UNCardContent>
                            </UNCard>
                        </div>
                    </section>

                    {/* Shadcn Dropdown Example */}
                    <section className="mb-12">
                        <header className="mb-4">
                            <h2 className="text-2xl font-bold text-foreground mb-2">
                                Shadcn Dropdown Menu
                            </h2>
                            <a
                                href="https://ui.shadcn.com/docs/components/dropdown-menu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-un-blue hover:underline inline-block"
                            >
                                View Documentation
                            </a>
                        </header>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="px-4 py-2 bg-un-blue text-white rounded-md hover:opacity-90">
                                Select Region
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>UN Regions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Africa</DropdownMenuItem>
                                <DropdownMenuItem>Americas</DropdownMenuItem>
                                <DropdownMenuItem>Asia</DropdownMenuItem>
                                <DropdownMenuItem>Europe</DropdownMenuItem>
                                <DropdownMenuItem>Oceania</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </section>
                </div>
            </main>
    );
}
