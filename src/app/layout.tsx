import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Programa de Adesão de Angola às Zonas de Comércio Livre da SADC e da União Africana (AfCFTA)",
  description: "Programa de Adesão de Angola às Zonas de Comércio Livre da SADC e da União Africana (AfCFTA)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

