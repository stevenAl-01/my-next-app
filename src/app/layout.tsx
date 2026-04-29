import type { Metadata } from "next";

import { SiteShell } from "@/components/site/shell";
import { SiteProvider } from "@/context/site-context";

import "./globals.css";

export const metadata: Metadata = {
  title: "Konsorsium Ketahanan Siber",
  description: "jejaring Center of Excellence ketahanan siber kampus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full">
        <SiteProvider>
          <SiteShell>{children}</SiteShell>
        </SiteProvider>
      </body>
    </html>
  );
}
