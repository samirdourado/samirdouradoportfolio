export type SkillCategory = "fullstack" | "frontend" | "backend" | "database" | "ferramentas" | "web3";

export type Skill = {
  name: string;
  image: string;
  alt: string;
  aria: string;
  categories: SkillCategory[];
};

export const skillCategories: { id: SkillCategory; label: string }[] = [
    { id: "backend", label: "Back-end" },
    { id: "frontend", label: "Front-end" },
    { id: "fullstack", label: "Full Stack" },
    { id: "database", label: "Banco de Dados" },
    { id: "ferramentas", label: "Ferramentas" },
    { id: "web3", label: "Web 3" },
];

export const skillsDatabase: Skill[] = [
    {
        name: "html 5",
        image: "/skill-images/html.svg",
        alt: "Logotipo do html",
        aria: "Logotipo do html",
        categories: ["fullstack", "frontend"]
    },
    {
        name: "css 3",
        image: "/skill-images/css.svg",
        alt: "Logotipo do css",
        aria: "Logotipo do css",
        categories: ["fullstack", "frontend"]
    },
    {
        name: "tailwind",
        image: "/skill-images/tailwind.svg",
        alt: "Logotipo do Tailwind",
        aria: "Logotipo do Tailwind",
        categories: ["frontend", "ferramentas"]
    },
    {
        name: "bootstrap",
        image: "/skill-images/bootstrap.svg",
        alt: "Logotipo do bootstrap",
        aria: "Logotipo do bootstrap",
        categories: ["frontend", "ferramentas"]
    },
    {
        name: "javascript",
        image: "/skill-images/javascript.svg",
        alt: "Logotipo do javascript",
        aria: "Logotipo do javascript",
        categories: ["fullstack", "frontend", "backend", "web3"]
    },
    {
        name: "typescript",
        image: "/skill-images/typescript.svg",
        alt: "Logotipo do typescript",
        aria: "Logotipo do typescript",
        categories: ["fullstack", "frontend", "backend", "web3"]
    },
    {
        name: "react.js",
        image: "/skill-images/react.svg",
        alt: "Logotipo do react",
        aria: "Logotipo do react",
        categories: ["fullstack", "frontend", "web3"]
    },
    {
        name: "next.js",
        image: "/skill-images/nextjs.svg",
        alt: "Logotipo do next",
        aria: "Logotipo do next",
        categories: ["fullstack", "frontend", "web3"]
    },
    {
        name: "node.js",
        image: "/skill-images/nodejs.svg",
        alt: "Logotipo do nodejs",
        aria: "Logotipo do nodejs",
        categories: ["fullstack", "backend"]
    },
    {
        name: "nest.js",
        image: "/skill-images/nestjs.svg",
        alt: "Logotipo do nestjs",
        aria: "Logotipo do nestjs",
        categories: ["fullstack", "backend"]
    },
    {
        name: "express.js",
        image: "/skill-images/expressjs.svg",
        alt: "Logotipo do expressjs",
        aria: "Logotipo do expressjs",
        categories: ["fullstack", "backend"]
    },
    {
        name: "python",
        image: "/skill-images/python.svg",
        alt: "Logotipo do python",
        aria: "Logotipo do python",
        categories: ["backend"]
    },
    {
        name: "postgreSQL",
        image: "/skill-images/postgresql.svg",
        alt: "Logotipo do postgresql",
        aria: "Logotipo do postgresql",
        categories: ["fullstack", "backend", "database"]
    },
    {
        name: "sqlite",
        image: "/skill-images/sqlite.svg",
        alt: "Logotipo do sqlite",
        aria: "Logotipo do sqlite",
        categories: ["backend", "database"]
    },
    {
        name: "mongoDB",
        image: "/skill-images/mongodb.svg",
        alt: "Logotipo do mongoDB",
        aria: "Logotipo do mongoDB",
        categories: ["database"]
    },
    {
        name: "solidity",
        image: "/skill-images/solidity.svg",
        alt: "Logotipo do solidity",
        aria: "Logotipo do solidity",
        categories: ["web3"]
    },
    {
        name: "git",
        image: "/skill-images/git.svg",
        alt: "Logotipo do git",
        aria: "Logotipo do git",
        categories: ["ferramentas"]
    },
    {
        name: "github",
        image: "/skill-images/github.svg",
        alt: "Logotipo do github",
        aria: "Logotipo do github",
        categories: ["ferramentas"]
    },
    {
        name: "docker",
        image: "/skill-images/docker.svg",
        alt: "Logotipo do docker",
        aria: "Logotipo do docker",
        categories: ["ferramentas", "backend"]
    },
    {
        name: "postman",
        image: "/skill-images/postman.svg",
        alt: "Logotipo do postman",
        aria: "Logotipo do postman",
        categories: ["ferramentas"]
    },
    {
        name: "insomnia",
        image: "/skill-images/insomnia.svg",
        alt: "Logotipo do insomnia",
        aria: "Logotipo do insomnia",
        categories: ["ferramentas"]
    },
    {
        name: "figma",
        image: "/skill-images/figma.svg",
        alt: "Logotipo do figma",
        aria: "Logotipo do figma",
        categories: ["ferramentas", "frontend"]
    },
    {
        name: "eslint",
        image: "/skill-images/eslint.svg",
        alt: "Logotipo do eslint",
        aria: "Logotipo do eslint",
        categories: ["ferramentas"]
    },
    {
        name: "prettier",
        image: "/skill-images/prettier.svg",
        alt: "Logotipo do prettier",
        aria: "Logotipo do prettier",
        categories: ["ferramentas"]
    },
    {
        name: "vite.js",
        image: "/skill-images/vite.js.svg",
        alt: "Logotipo do vite",
        aria: "Logotipo do vite",
        categories: ["ferramentas", "frontend"]
    },
    {
        name: "jest",
        image: "/skill-images/jest.svg",
        alt: "Logotipo do jest",
        aria: "Logotipo do jest",
        categories: ["ferramentas"]
    },
    {
        name: "sass",
        image: "/skill-images/sass.svg",
        alt: "Logotipo do sass",
        aria: "Logotipo do sass",
        categories: ["backend"]
    },
    {
        name: "django",
        image: "/skill-images/django.svg",
        alt: "Logotipo do django",
        aria: "Logotipo do django",
        categories: ["backend"]
    },
    {
        name: "aws",
        image: "/skill-images/aws.svg",
        alt: "Logotipo do aws",
        aria: "Logotipo do aws",
        categories: ["ferramentas"]
    },
];
