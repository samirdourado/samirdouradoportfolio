import type { IconType } from "react-icons";
import { FaBriefcase, FaCode, FaMapMarkerAlt, FaPalette } from "react-icons/fa";

export const aboutMe = [
    "Sou Desenvolvedor Full Stack com 2 anos de experiência criando e evoluindo aplicações web, no front-end e back-end.",
    "Já trabalhei com projetos em produção, desenvolvendo interfaces, APIs e integrações, sempre com atenção à performance, à qualidade do código e à experiência de quem usa. Também uso IA no dia a dia para acelerar o desenvolvimento e automatizar processos.",
    "Hoje estou empreendendo fazendo projetos reais e estudando sobre Web3 e Smart Contracts e quando possível participo de hackathons.",
    "Sou proativo e colaborativo, e gosto de aprender sempre. Busco novos desafios para entregar soluções que gerem resultado e para crescer junto com o time.",
    "Vamos conversar?",
];

export const aboutExperience = {
    years: 2,
    label: "anos de experiência",
};

export const aboutDashboard: { title: string; text: string; icon: IconType }[] = [
    {
        title: "Atuação",
        text: "Remoto, híbrido ou presencial em São Paulo, SP",
        icon: FaMapMarkerAlt,
    },
    {
        title: "Foco de atuação",
        text: "Sistemas web, integração de APIs REST, modelagem de dados...",
        icon: FaCode,
    },
    {
        title: "Background",
        text: "Designer Gráfico",
        icon: FaPalette,
    },
    {
        title: "Ocupação atual",
        text: "Desenvolvedor freelancer, buscando realocação no mercado",
        icon: FaBriefcase,
    },
];