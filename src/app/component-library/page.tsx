"use client";

import Image from "next/image";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  UNCard,
  UNCardContent,
  UNCardDescription,
  UNCardHeader,
  UNCardTitle,
} from "@/components/custom/UNCard";
import { UNDropdown } from "@/components/custom/UNDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Building2,
  FileText,
  ScrollText,
  ExternalLink,
  Share2,
  Download,
  Upload,
  Calendar,
  Users,
  Globe,
  ChevronRight,
  Search,
} from "lucide-react";
import { useState } from "react";

export default function ComponentsPage() {
  const [selectedDonors, setSelectedDonors] = useState<string[]>([]);
  const countries = [
    { code: "USA", name: "United States", region: "Americas" },
    { code: "CHN", name: "China", region: "Asia" },
    { code: "IND", name: "India", region: "Asia" },
    { code: "BRA", name: "Brazil", region: "Americas" },
    { code: "DEU", name: "Germany", region: "Europe" },
  ];

  return (
    <main className="min-h-screen bg-background px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl py-8">
        {/* Logo */}
        <Image
          src="/images/UN Logo_Horizontal_Colour_English.svg"
          alt="UN Logo"
          width={200}
          height={48}
          className="mb-12 h-10 w-auto select-none sm:h-12"
          draggable={false}
          unoptimized
        />

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Components [Early Stage Development]
          </h1>
          <p className="mt-2 text-foreground">
            Explore reusable components for UN web applications.
          </p>
        </header>

        {/* PrimeReact DataTable Example */}
        <section className="mb-12">
          <header className="mb-4">
            <h2 className="mb-2 text-2xl font-bold text-foreground">
              PrimeReact DataTable
            </h2>
            <a
              href="https://primereact.org/datatable/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-un-blue hover:underline"
            >
              View Documentation
            </a>
          </header>
          <DataTable
            value={countries}
            stripedRows
            showGridlines
            className="[&_td]:border-b [&_td]:border-gray-200 [&_th]:border-b-2 [&_th]:border-un-blue [&_th]:font-bold"
          >
            <Column field="code" header="Code" />
            <Column field="name" header="Country" />
            <Column field="region" header="Region" />
          </DataTable>
        </section>

        {/* Shadcn Card Example */}
        <section className="mb-12">
          <header className="mb-4">
            <h2 className="mb-2 text-2xl font-bold text-foreground">
              Shadcn Card
            </h2>
            <a
              href="https://ui.shadcn.com/docs/components/card"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-un-blue hover:underline"
            >
              View Documentation
            </a>
          </header>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

        {/* UN Dropdown Example */}
        <section className="mb-12">
          <header className="mb-4">
            <h2 className="mb-2 text-2xl font-bold text-foreground">
              UN Dropdown (Custom)
            </h2>
            <p className="text-sm text-gray-600">
              Searchable multi-select dropdown component
            </p>
          </header>
          <div className="max-w-md">
            <UNDropdown
              placeholder="Select donor(s)..."
              searchPlaceholder="Search donors..."
              options={[
                { value: "adb", label: "African Development Bank" },
                { value: "au", label: "African Union" },
                { value: "australia", label: "Australia" },
                { value: "austria", label: "Austria" },
                { value: "belgium", label: "Belgium" },
                { value: "gates", label: "Bill and Melinda Gates Foundation" },
                { value: "canada", label: "Canada" },
                { value: "denmark", label: "Denmark" },
              ]}
              value={selectedDonors}
              onChange={setSelectedDonors}
            />
          </div>
        </section>

        {/* Lucide Icons Reference */}
        <section className="mb-12">
          <header className="mb-4">
            <h2 className="mb-2 text-2xl font-bold text-foreground">
              Lucide Icons
            </h2>
            <a
              href="https://lucide.dev/icons/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-un-blue hover:underline"
            >
              Browse All Icons
            </a>
          </header>
          <p className="mb-6 text-sm text-gray-600">
            Common icons for UN applications
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
              <Building2 className="h-6 w-6 text-foreground" />
              <span className="text-xs font-medium">Building2</span>
              <span className="text-xs text-gray-500">Organization</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
              <FileText className="h-6 w-6 text-foreground" />
              <span className="text-xs font-medium">FileText</span>
              <span className="text-xs text-gray-500">Report</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
              <ScrollText className="h-6 w-6 text-foreground" />
              <span className="text-xs font-medium">ScrollText</span>
              <span className="text-xs text-gray-500">Mandate</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
              <ExternalLink className="h-6 w-6 text-foreground" />
              <span className="text-xs font-medium">ExternalLink</span>
              <span className="text-xs text-gray-500">External Link</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
              <Share2 className="h-6 w-6 text-foreground" />
              <span className="text-xs font-medium">Share2</span>
              <span className="text-xs text-gray-500">Share</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
              <Download className="h-6 w-6 text-foreground" />
              <span className="text-xs font-medium">Download</span>
              <span className="text-xs text-gray-500">Download</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
              <Upload className="h-6 w-6 text-foreground" />
              <span className="text-xs font-medium">Upload</span>
              <span className="text-xs text-gray-500">Upload</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
              <Calendar className="h-6 w-6 text-foreground" />
              <span className="text-xs font-medium">Calendar</span>
              <span className="text-xs text-gray-500">Date/Event</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
              <Users className="h-6 w-6 text-foreground" />
              <span className="text-xs font-medium">Users</span>
              <span className="text-xs text-gray-500">People/Team</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
              <Globe className="h-6 w-6 text-foreground" />
              <span className="text-xs font-medium">Globe</span>
              <span className="text-xs text-gray-500">Global/World</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
              <ChevronRight className="h-6 w-6 text-foreground" />
              <span className="text-xs font-medium">ChevronRight</span>
              <span className="text-xs text-gray-500">Navigation</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
              <Search className="h-6 w-6 text-foreground" />
              <span className="text-xs font-medium">Search</span>
              <span className="text-xs text-gray-500">Search</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
