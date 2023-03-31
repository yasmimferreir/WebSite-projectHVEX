
export const links = [
    { name: "Omni trafo", path: "/" },
    { name: "Sinalizador de faltas", path: "/sinalizadordeFaltas" },
    { name: "Acoplador DP", path: "/acopladorDP" },
];

export const values = [
    {
        id: 1,
        title: "Sistema de Proteção",
        avatar: require("./assets/energy.png")
    },
    {
        id: 2,
        title: "Integração de dados",

        avatar: require("./assets/integration.png")
    },
    {
        id: 3,
        title: "Gestão de Ativos Elétricos",
        avatar: require("./assets/config.png")
    },
    {
        id: 4,
        title: "Comunicação inteligente",
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