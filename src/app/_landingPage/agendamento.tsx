"use client";

import React from "react";

export default function Agendamento() {
  return (
    <section className="flex flex-col items-center my-20">
      <div className="w-[980px] max-w-full">
        <h1 className="text-4xl font-fredoka font-extrabold mb-10 text-left">
          Agendamento
        </h1>

        <form className="bg-black text-white rounded-[50px] p-10 flex flex-col gap-6 shadow-lg">
          {/* Nome */}
          <div className="flex flex-col">
            <label htmlFor="nome" className="font-medium mb-1">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
            />
          </div>

          {/* Check-in */}
          <div className="flex flex-col">
            <label
              htmlFor="check_in"
              className="font-medium mb-1 flex items-center gap-2"
            >
              <span>📅</span> Data de check-in:
            </label>
            <input
              type="date"
              id="check_in"
              className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col">
            <label
              htmlFor="check_out"
              className="font-medium mb-1 flex items-center gap-2"
            >
              <span>📅</span> Data de check-out:
            </label>
            <input
              type="date"
              id="check_out"
              className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="mt-6 bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}