import { IconType } from "react-icons";

export type Props = {
    title: string,
    content: string,
    children: (JSX.Element | null),
}
export interface NavbarIten {
    name:string;
    to:string;
    Icon: IconType;
}
export interface IFormCheckout {
    name:string;
    mail:string;
    dni:string;
    operation_date:string;

    num_card:string
    date:string
    cvv:string

}

