import { SiOpenaigym } from "react-icons/si";


export const links = [
    { name: "Omni trafo", path: "/" },
    { name: "Sinalizador de faltas", path: "/sinalizadordeFaltas" },
    { name: "Acoplador DP", path: "/acopladorDP" },
    /* { name: "Plans", path: "/plans" },
     { name: "Trainers", path: "/trainers" },
     {
         name: "Contact",
         path: "/contact",
     },*/
];

export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Program One",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/111",
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Program Two",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/222",
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Program Three",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/333",
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Program Four",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/444",
    },
];

export const values = [
    {
        id: 1,

        icon: <SiOpenaigym />,
        title: "Sistema de Proteção",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
        avatar: require("./assets/energy.png")
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Integração de dados",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
        avatar: require("./assets/integration.png")
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Gestão de Ativos Elétricos",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
        avatar: require("./assets/config.png")
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Comunicação inteligente",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
        avatar: require("./assets/comunication.png")
    },
];

export const faqs = [
    {
        id: 1,
        question: "Pra que tipo de transformador é feito o medidor inteligente da HVEX (Omni Trafo)?",
        answer:
            "O Omni Trafo foi desenvolvido para integrar transformadores de distribuição as redes inteligentes, o dispositivo é ideal para concessionárias, fabricantes de transformadores, ou empresas privadas que desejam ter mais controle e informações de sua rede elétrica.",
    },
    {
        id: 2,
        question: "O Omni trafo pode ser utilizado como um medidor de qualidade de energia (qualimetro)?",
        answer:
            "Não, nesse caso o caso recomendamos a utilização de um modelo específico.",
    },
    {
        id: 3,
        question: "O omni trafo pode ser utilizado como um medidor de faturamento?",
        answer:
            "Não, nesse caso não recomendamos o nosso medidor, nesse caso recomendamos modelos especificados pelo módulo do PRODIST e homologados pela concessionária.",
    },
    {
        id: 4,
        question: "Ele pode ser instalado em transformadores que já estão em campo?",
        answer:
            "Sim, o dispositivo pode ser instalado em equipamentos em operação, porem a aferição de temperatura do topo de óleo será apenas ambiente.",
    }
];

/*
export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Student",
        //avatar: require("./images/avatar1.jpg"),
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote:
            "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Software Egineer",
        //avatar: require("./images/avatar2.jpg"),
    },
    {
        id: 3,
        name: "Edem Quist",
        quote:
            "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "University Lecturer",
        //avatar: require("./images/avatar3.jpg"),
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote:
            "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Talking Parrot",
        // avatar: require("./images/avatar4.jpg"),
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote:
            "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Pharmacist",
        // avatar: require("./images/avatar5.jpg"),
    },
];

export const plans = [
    {
        id: 1,
        name: "Silver Package",
        desc: "This package is perfect for beginners who need constant help",
        price: 29.99,
        features: [
            { feature: "First Feature", available: true },
            { feature: "Second Feature", available: true },
            { feature: "Third Feature", available: true },
            { feature: "Fourth Feature", available: true },
            { feature: "Fifth Feature", available: true },
            { feature: "Fifth Feature Plus", available: false },
            { feature: "Sixth Feature", available: false },
            { feature: "Seventh Feature", available: false },
            { feature: "Seventh Feature Plus", available: false },
            { feature: "Eighth Feature", available: false },
            { feature: "Ninth Feature", available: false },
            { feature: "Tenth Feature", available: false },
            { feature: "Eleventh Feature", available: false },
        ],
    },
    {
        id: 2,
        name: "Gold Package",
        desc: "This is the perfect package for beginners who know what their doing",
        price: 49.99,
        features: [
            { feature: "First Feature", available: true },
            { feature: "Second Feature", available: true },
            { feature: "Third Feature", available: true },
            { feature: "Fourth Feature", available: true },
            { feature: "Fifth Feature", available: true },
            { feature: "Fifth Feature Plus", available: true },
            { feature: "Sixth Feature", available: true },
            { feature: "Seventh Feature", available: true },
            { feature: "Seventh Feature Plus", available: true },
            { feature: "Eighth Feature", available: false },
            { feature: "Ninth Feature", available: false },
            { feature: "Tenth Feature", available: false },
            { feature: "Eleventh Feature", available: false },
        ],
    },
    {
        id: 3,
        name: "Platinum Package",
        desc: "This package is perfect for busy people who need home service",
        price: 89.99,
        features: [
            { feature: "First Feature", available: true },
            { feature: "Second Feature", available: true },
            { feature: "Third Feature", available: true },
            { feature: "Fourth Feature", available: true },
            { feature: "Fifth Feature", available: true },
            { feature: "Fifth Feature Plus", available: true },
            { feature: "Sixth Feature", available: true },
            { feature: "Seventh Feature", available: true },
            { feature: "Seventh Feature Plus", available: true },
            { feature: "Eighth Feature", available: true },
            { feature: "Ninth Feature", available: true },
            { feature: "Tenth Feature", available: true },
            { feature: "Eleventh Feature", available: true },
        ],
    },
];

/*const Trainer1 = require("./images/trainer1.jpg");
const Trainer2 = require("./images/trainer2.jpg");
const Trainer3 = require("./images/trainer3.jpg");
const Trainer4 = require("./images/trainer4.jpg");
const Trainer5 = require("./images/trainer5.jpg");
const Trainer6 = require("./images/trainer6.jpg");

export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: "John Doe",
        job: "Aerobic Trainer",
        socials: [
            "https://instagram.com/",
            "https://twitter.com/",
            "https://facebook.com/",
            "https://linkedin.com/",
        ],
    },
    {
        id: 2,
        image: Trainer2,
        name: "Daniel vinyo",
        job: "Speed Trainer",
        socials: [
            "https://instagram.com/",
            "https://twitter.com/",
            "https://facebook.com/",
            "https://linkedin.com/",
        ],
    },
    {
        id: 3,
        image: Trainer3,
        name: "Edem Quist",
        job: "Flexibility Trainer",
        socials: [
            "https://instagram.com/",
            "https://twitter.com/",
            "https://facebook.com/",
            "https://linkedin.com/",
        ],
    },
    {
        id: 4,
        image: Trainer4,
        name: "Shatta Wale",
        job: "Body Composition Trainer",
        socials: [
            "https://instagram.com/",
            "https://twitter.com/",
            "https://facebook.com/",
            "https://linkedin.com/",
        ],
    },
    {
        id: 5,
        image: Trainer5,
        name: "Diana Ayi",
        job: "Circuit Trainer",
        socials: [
            "https://instagram.com/",
            "https://twitter.com/",
            "https://facebook.com/",
            "https://linkedin.com/",
        ],
    },
    {
        id: 6,
        image: Trainer6,
        name: "Wayne Carter",
        job: "Physical Intelligence Trainer",
        socials: [
            "https://instagram.com/",
            "https://twitter.com/",
            "https://facebook.com/",
            "https://linkedin.com/",
        ],
    },
];*/
