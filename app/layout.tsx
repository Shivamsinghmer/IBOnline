import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "BrightMind | Online Tutoring Services",
  description: "Learn anything. From anyone. At your pace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          <div className="relative min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
