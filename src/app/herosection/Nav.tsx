"use client"; 

import React from "react";
import Navitem,{type Navitem_interface} from "../_components/Navitem";
import NavMobile from "../_components/NavMobile";



export default function Nav(){


    const items: Navitem_interface[] = [

        { url: "#sobre", label: "SOBRE" },
        { url: "#beneficios", label: "BENEFÍCIOS" },
        { url: "#agendamento", label: "AGENDAMENTO" },

    ];

    return(
        <nav className="bg-[#0E0E0E] flex items-center justify-between w-full min-h-[15vh] h-auto
                        px-8 sm:px-8 md:px-16 lg:px-32">
            <div>
                <img src="imagem/logo.svg" 
                className="h-auto w-[25px] sm:w-[30px] md:w-[35px] lg:w-[35px]"/>
            </div>

            <ul className="hidden md:flex  w-[55vw]  font-bold item-center justify-between text-white
                           text-[9px] sm:text-[12px] md:text-[15px] lg:text-[18px]">

                {items.map((item, index) => (
                    <Navitem key={index} url={item.url} label={item.label} />
                ))}
            </ul>

            <NavMobile items={items} />
        </nav>
    )
}