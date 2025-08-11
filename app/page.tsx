
export default function Home() {
    return (
        <main className="min-h-screen bg-background flex justify-center px-4 sm:px-6">
            <div className="w-full max-w-2xl lg:max-w-3xl py-8">
                {/* Logo at top left of column */}
                <img
                    src="/images/UN Logo_Horizontal_English/Colour/UN Logo_Horizontal_Colour_English.svg"
                    alt="UN Logo"
                    className="h-10 sm:h-12 w-auto select-none mb-12"
                    draggable="false"
                />
                
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                        Welcome to the UN Website Boilerplate
                    </h1>
                </header>
                
                {/* Content */}
                <section>
                    <p className="text-muted-foreground leading-relaxed">
                        A modern, responsive foundation for United Nations web applications.
                    </p>
                </section>
            </div>
        </main>
    );
}
