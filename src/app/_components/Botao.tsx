export interface Botao_interface{

    label:string;

}

export default function Botao(props:Botao_interface){
    return(
        <button 
            className="font-['Montserrat'] bg-[#69DC9E] rounded-full 
                       text-center font-bold text-white 
                       text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px]
                       px-5 lg:px-8 my-8
                       hover:bg-[#3a7c57] transition duration-300">
            {props.label}
        </button>
    );
}