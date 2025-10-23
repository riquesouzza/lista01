"use client";

import React from "react";

export default function Page() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center text-white">
        <form className="flex flex-col gap-4 max-w-sm w-full bg-gray-900 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col">
            <label htmlFor="nome" className="mb-1">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              className="border border-gray-700 rounded p-2 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-700 rounded p-2 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="check_in" className="mb-1">
              Check-in:
            </label>
            <input
              type="date"
              id="check_in"
              className="border border-gray-700 rounded p-2 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col">
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
    </main>
  );
}