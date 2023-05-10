import { MdOutlineAccountCircle } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { TbMapSearch, TbHomeLink } from "react-icons/tb";
import {BsBuildingFillCheck } from "react-icons/bs";
import {ImBlog} from 'react-icons/im'

export const linksContent = [
    {
        span: 'Programa de transparencia',
        url: '/transparencia',
        icon: <TbMapSearch />
    },
    {
        span: 'Encontrar oportunidades',
        url: '/inversor',
        icon: <BsBuildingFillCheck />
    },
    {
        span: 'Ofrece una oportunidad',
        url: '/propietario',
        icon: <TbHomeLink />
    },
    {
        span: 'Quiénes somos',
        url: '/sobre-nosotros',
        icon: <GiTeamIdea />
    },
    {
        span: 'Blog',
        url: '/blog',
        icon: <ImBlog />
    },
]
