import Link from "next/link";

export interface Navitem_interface{

    url:string;
    label:string;
}

export default function Navitem(props:Navitem_interface){

    return(
        <li><Link href={props.url}
            className="pb-1.5 hover:border-b-4 rounded-md -transform-x-9 duration-75">
            {props.label}</Link>

        </li>
    );
}
