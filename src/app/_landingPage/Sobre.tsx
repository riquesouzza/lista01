"use client"; 

import React from "react";

/*Na Locking, acreditamos que o verdadeiro luxo está na completa ausência de conforto. 
                    Nossos imóveis são cuidadosamente escolhidos para oferecer experiências 
                    únicas: piso instável para treinar equilíbrio, telhados que pingam estrategicamente e 
                    banheiros opcionais — porque é bom fugir da rotina.*/

export default function Sobre(){

    return(
        <section id="sobre" className="bg-white flex flex-col lg:flex-row justify-center items-center
                            w-full lg:gap-12
                            p-8 sm:p-8  md:p-16 lg:px-25">
        
            <div className="flex flex-col lg:w-1/2 m-0 p-0">

                <h2 className="font-['Fredoka_One'] font-bold text-black
                               text-[40px] md:text-[60px] lg:text-[80p">
                    Sobre
                </h2>
    
            <div className="h-fit">
                <p className="font-['Montserrat'] font-medium text-black text-left pt-10
                              text-base text-[25px] md:text-[30px] lg:text-[35px] indent-9">
                    Na locking, todos as suas informações estão seguras oferecemos desde o transporte até o "armazenamento da encomenda". Nossas acomodações 
                    são cuidadosamente escolhidos para oferecer experiências 
                    únicas: piso instável para treinar equilíbrio, telhados que pingam estrategicamente e 
                    banheiros opcionais, tudo para oferecer para você, o melhor para o seu cliente.
                </p>
            </div>

            </div>

            <div className="flex mt-12 lg:w-1/2 lg:mt-0">
                <img src="imagem/casa.png"
                     className="w-[40vh] lg:w-full"/>
            </div>
        </section>
    );
}