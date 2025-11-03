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
                </div>
            </main>
        </div>
    );
}
