
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="main">
            SIDEBAR
            {children}
        </main>
    );
}
