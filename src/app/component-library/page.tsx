"use client";

import Image from "next/image";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

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
                </div>
            </main>
    );
}
