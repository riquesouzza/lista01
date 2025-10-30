"use client";

import React from "react";

export default function Agendamento() {
  return (
    <section id="agendamento" className="bg-white flex flex-col items-start
                 w-full min-h-screen p-8 sm:p-8 md:p-16 lg:p-32
                 overflow-x-hidden">
      <h1 className="w-full max-w-xl font-extrabold text-black
                     text-3xl pb-5 sm:text-4xl md:text-5xl lg:text-6xl text-left">
        Agendamento
      </h1>

      <form
        className="bg-black  text-white rounded-[45px] p-10
                   flex flex-col gap-6 shadow-lg
                   w-full ">
        {/* Campos */}
        <div className="flex flex-col">
          <label htmlFor="nome" className="font-medium pb-1">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            className="bg-transparent border-b border-gray-500
                       focus:outline-none focus:border-white py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium pb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="bg-transparent border-b border-gray-500
                       focus:outline-none focus:border-white py-2"
          />
        </div>

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
            className="bg-transparent border-b border-gray-500
                       focus:outline-none focus:border-white py-2"
          />
        </div>

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
            className="bg-transparent border-b border-gray-500
                       focus:outline-none focus:border-white py-2"
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-white text-black font-bold py-2 px-4
                     rounded-full hover:bg-gray-200 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
