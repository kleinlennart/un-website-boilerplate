import { Github } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <main className="min-h-screen bg-background flex justify-center px-4 sm:px-6">
                <div className="max-w-2xl lg:max-w-3xl py-8">
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
                    <header className="mb-5">
                        <h1 className="text-3xl font-bold text-foreground">
                            UN Website Boilerplate
                        </h1>
                    </header>


                    {/* Content */}
                    <section>
                        <p className="leading-relaxed">
                            A modern, responsive foundation for United Nations web applications.
                        </p>
                    </section>


                    {/* GitHub Link */}
                    <a
                        href="https://github.com/kleinlennart/un-website-boilerplate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-un-blue hover:underline"
                    >
                        <Github className="w-5 h-5" />
                        <span>View on GitHub</span>
                    </a>

                    {/* Theme Colors Showcase */}
                    <section className="mt-6">
                        <h2 className="text-2xl font-bold text-foreground mb-6">
                            Theme Colors
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="h-20 rounded-lg bg-un-blue border border-gray-200" />
                                <div>
                                    <p className="text-sm font-medium text-foreground">UN Blue</p>
                                    <p className="text-xs text-gray-600">#009EDB</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="h-20 rounded-lg bg-faded-jade border border-gray-200" />
                                <div>
                                    <p className="text-sm font-medium text-foreground">Faded Jade</p>
                                    <p className="text-xs text-gray-600">#4A7C7E</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="h-20 rounded-lg bg-camouflage-green border border-gray-200" />
                                <div>
                                    <p className="text-sm font-medium text-foreground">Camouflage Green</p>
                                    <p className="text-xs text-gray-600">#7D8471</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="h-20 rounded-lg bg-pale-oyster border border-gray-200" />
                                <div>
                                    <p className="text-sm font-medium text-foreground">Pale Oyster</p>
                                    <p className="text-xs text-gray-600">#9B8B7A</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="h-20 rounded-lg bg-au-chico border border-gray-200" />
                                <div>
                                    <p className="text-sm font-medium text-foreground">Au Chico</p>
                                    <p className="text-xs text-gray-600">#A0665C</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="h-20 rounded-lg bg-smoky border border-gray-200" />
                                <div>
                                    <p className="text-sm font-medium text-foreground">Smoky</p>
                                    <p className="text-xs text-gray-600">#6C5B7B</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="h-20 rounded-lg bg-shuttle-gray border border-gray-200" />
                                <div>
                                    <p className="text-sm font-medium text-foreground">Shuttle Gray</p>
                                    <p className="text-xs text-gray-600">#5A6C7D</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="h-20 rounded-lg bg-trout border border-gray-200" />
                                <div>
                                    <p className="text-sm font-medium text-foreground">Trout</p>
                                    <p className="text-xs text-gray-600">#495057</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="h-20 rounded-lg bg-dusty-gray border border-gray-200" />
                                <div>
                                    <p className="text-sm font-medium text-foreground">Dusty Gray</p>
                                    <p className="text-xs text-gray-600">#969696</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
