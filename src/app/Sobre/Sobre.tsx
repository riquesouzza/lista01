"use client"; 

import React from "react";

export default function Sobre(){

    return(
        <section className="bg-white flex flex-col lg:flex-row justify-center items-center
                            w-full h-auto min-h-screen lg:max-h-screen lg:gap-12
                            p-8 sm:p-8  md:p-16 lg:p-32 py-10">
        
            <div className="flex flex-col lg:w-1/2 lg:h-[70vh] m-0 p-0">

                <h2 className="font-['Fredoka_One'] font-bold text-black
                               text-[40px] md:text-[60px] lg:text-[80px]">
                    SOBRE
                </h2>
    
                <p className="font-['Montserrat'] font-medium text-black text-left pt-10
                              text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] indent-9">
                    Na Locking, acreditamos que o verdadeiro luxo está na completa ausência de conforto. 
                    Nossos imóveis são cuidadosamente escolhidos para oferecer experiências 
                    únicas: piso instável para treinar equilíbrio, telhados que pingam estrategicamente e 
                    banheiros opcionais — porque é bom fugir da rotina.
                </p>

            </div>

            <div className="flex mt-12 lg:w-1/2 lg:mt-0">
                <img src="imagem/casa.png"
                     className="w-[40vh] lg:w-full"/>
            </div>

        </section>
    );
}