"use client";

import React from "react";

export default function Agendamento() {
  return (
      <section className="justify-items-center">
        <h1 className="font-bold text-lg text-black ">Agendamento</h1>

        <form className="max-w-sm w-full bg-gray-900 text-white p-8 rounded-lg shadow-lg align-center">
          <div className="flex flex-col mb-4">
            <label htmlFor="nome" className="mb-1">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              className="border border-gray-700 rounded p-2 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="email" className="mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-700 rounded p-2 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="check_in" className="mb-1">
              Check-in:
            </label>
            <input
              type="date"
              id="check_in"
              className="border border-gray-700 rounded p-2 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col mt-4 mb-8">
            <label htmlFor="check_out" className="mb-1">
              Check-out:
            </label>
            <input
              type="date"
              id="check_out"
              className="border border-gray-700 rounded p-2 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>

      </section>
  );
}