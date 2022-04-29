import { NavbarIten } from "../types/types";
import { FaUserCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { CandyState, Icandy } from "../types/insterfaces/Candy";
import { Ifilm } from "../types/insterfaces/Film";

export const NavbarItensMain: NavbarIten[] = [
    { name: 'Inicio', to: '/', Icon: FaUserCircle },
    { name: 'Dulceria', to: '/candystore', Icon: MdLanguage },
];


export const DataFilm: Ifilm[] = [
    {
        "description": "Acción y Comedia",
        "image": "https://i.pinimg.com/originals/e7/b6/70/e7b670c72cd5a8a683dc9f6c05db801e.jpg"
    },
    {
        "description": "Ciencia Ficción",
        "image": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362"
    },
    {
        "description": "Animes",
        "image": "https://as.com/meristation/imagenes/2021/04/08/noticias/1617855911_622089_1617856002_sumario_normal.jpg"
    },
    {
        "description": "Terror",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/poster-peliculas-terror-2019-prodigy-1578395572.jpg"
    },
    {
        "description": "Drama",
        "image": "https://i.pinimg.com/originals/39/25/c0/3925c0ea3a23654c9fb977e931649d82.jpgg"
    }
]
export const DataCandy: Icandy[] = [
    {
        "name": "https://http2.mlstatic.com/D_NQ_NP_845031-MPE25556131302_052017-O.jpg",
        "description": "Cancha regular",
        "price": "10.00"
    },
    {
        "name": "https://http2.mlstatic.com/D_NQ_NP_845031-MPE25556131302_052017-O.jpg",
        "description": "Cancha mediana",
        "price": "15.00"
    },
    {
        "name": "https://http2.mlstatic.com/D_NQ_NP_845031-MPE25556131302_052017-O.jpg",
        "description": "Cancha regular",
        "price": "30.00"
    },
    {
        "name": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYk-ee0d96EKuxjvE44z6LgofjrBcvhw7yErqUFZtr3Hxdz_yu9nPg6wEPEBHLpVfEi8&usqp=CAU",
        "description": "Combo",
        "price": "10.00"
    },
    {
        "name": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKV0w2eUfgVv-XCtNm0g0R7Mdqf49iwOMCXP9wOnr6325CkhWiREKdAx-msRCOLfK6Zo&usqp=CAU",
        "description": "Combo",
        "price": "15.00"
    },
    {
        "name": "https://mx.toluna.com/dpolls_images/2017/09/26/7d0c665f-75a4-48b6-b67f-b27450e20e83.jpg",
        "description": "Combo duo",
        "price": "19.90"
    },
    {
        "name": "https://endocrinoynutricion.files.wordpress.com/2012/09/palomitas-cola.jpg",
        "description": "Combo",
        "price": "18.70"
    }
]