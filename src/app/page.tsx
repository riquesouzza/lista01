"use client";

import React from "react";

export default function Page() {
  return (
    <div>
      <header className="bg-gray-100 py-4">
        <nav className="flex justify-center gap-6">
          <a href="#" className="text-blue-600 hover:underline">Início</a>
          <a href="#" className="text-blue-600 hover:underline">Serviços</a>
          <a href="#" className="text-blue-600 hover:underline">Sobre</a>
        </nav>
      </header>

      <main className="p-6">
        <section>
          <h1 className="text-2xl font-bold mb-4">Agendamento</h1>

          <section className="agendamento">
            <form className="flex flex-col gap-4 max-w-sm">
              <div className="flex flex-col">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" className="border rounded p-2" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" className="border rounded p-2" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="check_in">Check-in:</label>
                <input type="date" id="check_in" className="border rounded p-2" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="check_out">Check-out:</label>
                <input type="date" id="check_out" className="border rounded p-2" />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Enviar
              </button>
            </form>
          </section>
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-4 mt-6">
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
  );
}