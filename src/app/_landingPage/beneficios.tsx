"use client"; 

import React from "react";

export default function Beneficios (){
    return(
        <section id="beneficios" className="bg-white flex flex-col justify-center items-center
                                            w-full p-8 sm:pt-8 md:p-16 lg:px-25">

            <div className="flex w-full justify-start">
                <h2 className="font-['Fredoka_One'] font-bold text-black
                               text-[40px] md:text-[60px] lg:text-[80p">
                    Acomodações
                </h2>
            </div>

            <div className="flex flex-col justify-center h-fit lg:justify-between lg:flex-row">
     
                <div className="bg-[#0E0E0E] flex flex-col mt-6 lg:mt-0 w-full lg:w-[45%] p-10 rounded-[30px]
                                relative group transition duration-500">
                    

                    <div className="flex flex-col gap-2 items-start transition-opacity duration-500 group-hover:opacity-0">
                        <h3 className="text-white font-['Montserrat'] font-bold text-center pb-4 tracking-[2px] text-3xl">
                            Casas
                        </h3>

                        <div className="flex flex-col gap-2">
                            <img src="imagem/casa_abandonada.jpeg" className="w-full rounded-[30px]"></img>
                            <div className="flex flex-inline mt-6 gap-2">
                                <img src="imagem/marcador.png" className="w-5 h-5 mt-1"></img>
                                <p className="text-white text-xl leading-relaxed">
                                 Espaço menor para no máximo uma pessoa, requer abafadores.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 
                                    group-hover:opacity-100 group-hover:scale-100 scale-95 
                                    transition-all duration-500">
                        <button className="bg-[#69DC9E] text-white font-bold px-6 py-3 rounded-full text-xl 
                                    hover:bg-[#4FA276] transition">
                                    ALUGAR
        
                        </button>
                    </div>
                </div>

                <div className="bg-[#0E0E0E] flex flex-col w-full mt-6 lg:mt-0 lg:w-[45%] p-10 rounded-[30px]
                                relative group transition duration-500">
                    

                    <div className="flex flex-col gap-2 items-start transition-opacity duration-500 group-hover:opacity-0">
                        <h3 className="text-white font-['Montserrat'] font-bold text-center pb-4 tracking-[2px] text-3xl">
                            Terrenos
                        </h3>

                        <div className="flex flex-col gap-2">
                            <img src="imagem/terreno_abandonado.webp" className="w-full h-3/5 rounded-[30px]"></img>
                            <div className="flex flex-inline mt-6 gap-2">
                                <img src="imagem/marcador.png" className="w-5 h-5 mt-1"></img>
                                <p className="text-white text-xl leading-relaxed">
                                 Espaço livre e afastado do centro urbano, requer vigilantes à parte.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 
                                    group-hover:opacity-100 group-hover:scale-100 scale-95 
                                    transition-all duration-500">
                        <button className="bg-[#69DC9E] text-white font-bold px-6 py-3 rounded-full text-xl 
                                    hover:bg-[#4FA276] transition">
                                    ALUGAR
                        </button>
                    </div>
                </div>
            </div>
    </section>
    );
}