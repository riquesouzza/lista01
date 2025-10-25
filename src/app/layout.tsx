import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
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
        <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
          Lista01 - © 2025 - Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}
