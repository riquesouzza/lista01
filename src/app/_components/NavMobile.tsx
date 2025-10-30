import React, { useState } from "react";
import { HiMiniBars2, HiXMark } from "react-icons/hi2";
import Navitem, { type Navitem_interface } from "./Navitem";

interface NavMobile_interface {
  items: Navitem_interface[];
}

export default function MobileMenu({ items }: NavMobile_interface) {
  const [open, setOpen] = useState(false);

  return (
    <div className="block md:hidden">
        
        <button onClick={()=> setOpen(!open)}>
            {open ?(<HiXMark className="bg-transparent text-white text-[28px]"/>) : 
            (<HiMiniBars2 className="bg-transparent text-white text-[28px]" />)}
        </button>

        {open && (
            <ul className="absolute top-[10vh] left-0 w-full bg-[#0E0E0E]
                           flex flex-col gap-4 py-4 text-center 
                            text-[10px] sm:text-[15px] md:text-[15px] font-bold text-white
                           transition-all duration-300 z-50">

                {items.map((item, index) => (
                    <Navitem key={index} url={item.url} label={item.label} />
                ))}
            </ul>
        )}

    </div>
  );
}
