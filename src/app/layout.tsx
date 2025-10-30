import "@/styles/globals.css";
import Nav from "@/app/herosection/Nav";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Locking",
  description: "Uma experiência de sobrevivência urbana",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geist.variable}`}>
      <body>
        {children}
        <footer className="bg-[#0E0E0E] text-white p-4 pt-8 text-center">
          Todos os direitos reservados - Trainee Struct ©2025 
        </footer>
      </body>
    </html>
  );
}