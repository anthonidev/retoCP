import { NavbarIten } from "../types/types";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaUserCircle,FaHeart } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { RiUser3Fill ,RiShoppingCartFill} from "react-icons/ri";

export const NavbarItensMain: NavbarIten[] = [
    { name: 'Inicio', to: '/', Icon: FaUserCircle },
    { name: 'Dulceria', to: '/candystore', Icon: MdLanguage },
];