"use client";

import React from "react";
/*font-['Fredoka_One'] font-bold text-black
                               text-[40px] md:text-[60px] lg:text-[80p*/
export default function Agendamento() {
  return (
    <section id="agendamento" className="bg-white flex flex-col items-start
                 w-full p-8 sm:pt-8 md:p-16 lg:px-25
                 overflow-x-hidden">
      <h1 className="w-full font-['Fredoka_One'] font-bold text-black
                     text-3xl pb-5 sm:text-4xl md:text-5xl lg:text-6xl text-left">
        Agendamento
      </h1>

      <form
        className="bg-black  text-white rounded-[45px] p-10
                   flex flex-col gap-6 shadow-lg
                   w-full ">

        <div className="flex flex-col">
          <label htmlFor="nome" className="text-xl pb-1">
            Codinome:
          </label>
          <input
            type="text"
            id="nome"
            className="bg-transparent border-b border-gray-500
                       focus:outline-none focus:border-white py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-xl pb-1">
            Email(descartável):
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
            className="text-xl pb-1 flex items-center gap-2"
          >
            <span>📅</span> Data de entrada:
          </label>
          <input
            type="date"
            id="check_in"
            className="bg-transparent border-b border-gray-500
                       focus:outline-none focus:border-white py-2"/>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="check_out"
            className="text-xl pb-1 flex items-center gap-2">
            <span>📅</span> Data de saída(não obrigatória):
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
