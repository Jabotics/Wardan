import type { Metadata } from "next";
import { Inter } from "next/font/google";

// CUSTOM IMPORTs
import { AdminNavbar, Footer } from "@/components/layout";

import "@/scss/main.scss";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wardan Admin",
  description: "Best Spice Manufacturing Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>

        <AdminNavbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
