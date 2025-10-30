"use client";

import React from "react";

export default function Agendamento() {
  return (
    <section className="flex flex-col items-center py-15">
      <div className="w-4/5 pb-10">
        <h1 className="font-extrabold text-black text-base md:text-lg lg:text-4xl text-left">
          Agendamento
        </h1>
      </div>

        <form className="bg-black text-white rounded-[45px] p-10 flex flex-col gap-6 shadow-lg w-4/5">
          {/* Nome */}
          <div className="flex flex-col">
            <label htmlFor="nome" className="font-medium pb-1">
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
            <label htmlFor="email" className="font-medium pb-1">
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
              className="font-medium pb-1 flex items-center gap-2"
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
              className="font-medium pb-1 flex items-center gap-2"
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
    </section>
  );
}