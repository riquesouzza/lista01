import "@/styles/globals.css";

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
        <header>
          <nav className="flex justify-center gap-6 bg-gray-800 text-white py-4">
            <a href="#" className="hover:underline">Início</a>
            <a href="#" className="hover:underline">Serviços</a>
            <a href="#" className="hover:underline">Agendamento</a>
            <a href="#" className="hover:underline">Benefícios</a>
            <a href="#" className="hover:underline">Sobre</a>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-800 text-white p-4 pt-8 text-center">
          Lista01 - © 2025 - Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}
