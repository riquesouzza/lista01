"use client"; 

import React from "react";
import Botao from "../_components/Botao";

export default function Hero(){
    return(

       <section className="bg-[#0E0E0E] flex flex-col justify-center items-center text-center
                           w-full h-[85vh]
                           p-8 sm:p-8  md:p-16 lg:p-32">
        
            <h1  style={{ textShadow: "0px 0px 20px rgba(191, 191, 191, 1)" }}
                className="text-white w-full tracking-[4px] font-bold
                            text-[50px] sm:text-[90px] md:text-[100px] lg:text-[150px]"
            >
            LOCKING
            </h1>

            <p className="font-['Montserrat'] font-bold text-white
                        text-[10px] sm:text-[15px] lg:text-[20px]">
            Experiências extremas de sobrevivência urbana
            </p>

            <Botao label="ALUGAR"/>
   
       </section>
    )
}