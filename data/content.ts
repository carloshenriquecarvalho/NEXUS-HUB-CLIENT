import { HubContent } from "@/types/types";

const botoxMock = {
    hero: {
        title: "Desperte Sua Melhor Versão",
        subtitle: "Tratamentos estéticos de alta performance focados em realçar sua beleza natural com naturalidade e sofisticação.",
        buttonText: "Agendar Avaliação",
        buttonUrl: "#contato",
        imgUrl: "/hero-premium.png"
    },
    pain: {
        title: "Sinais do Tempo",
        cardContent: [
            {
                id: 1,
                title: "Rugas de Expressão",
                desc: "Marcas na testa e ao redor dos olhos que envelhecem o olhar e trazem uma aparência de cansaço constante.",
                imgUrl: "/solution-premium.png"
            },
            {
                id: 2,
                title: "Perda de Contorno Facial",
                desc: "Com o passar dos anos, o rosto perde a sustentação natural, criando flacidez e perda da linha da mandíbula.",
                imgUrl: ""
            },
            {
                id: 3,
                title: "Olhar Cansado",
                desc: "Sobrancelhas caídas e linhas profundas que afetam a expressão, escondendo a vitalidade do seu rosto.",
                imgUrl: ""
            },
            {
                id: 4,
                title: "Assimetria Facial",
                desc: "Pequenas desproporções que incomodam ao tirar fotos ou ao se olhar no espelho diariamente.",
                imgUrl: ""
            }
        ]
    },
    solution: {
        cardContent: [
            {
                id: 1,
                title: "A Arte do Rejuvenescimento Natural",
                description: "Nossos protocolos exclusivos combinam as melhores técnicas para suavizar linhas de expressão preservando a naturalidade dos seus movimentos.",
                solutionTitle: "Avaliação Personalizada",
                solutionDescription: "Mapeamento facial completo para identificar os pontos exatos de aplicação.",
                imgUrl: "/solution-premium.png"
            },
            {
                id: 2,
                solutionTitle: "Produtos Premium",
                solutionDescription: "Utilizamos apenas as marcas mais seguras e renomadas do mercado internacional.",
                imgUrl: ""
            },
            {
                id: 3,
                solutionTitle: "Resultados Duradouros",
                solutionDescription: "Técnicas avançadas que garantem maior durabilidade e efeito progressivo.",
                imgUrl: ""
            }
        ]
    },
    benefits: {
        title: "O que você vai conquistar",
        subtitle: "Redescubra a sua autoconfiança com resultados visíveis, naturais e elegantes.",
        imgUrls: ["/hero-premium.png", "/solution-premium.png", "/hero-premium.png"]
    },
    testimonials: {
        title: "O que nossos pacientes dizem",
        cardContent: [
            { id: 1, title: "Amanda S.", patientImgUrl: "/solution-premium.png", videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY" },
            { id: 2, title: "Carolina M.", patientImgUrl: "", videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY" },
            { id: 3, title: "Mariana L.", patientImgUrl: "", videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY" },
        ]
    },
    faq: {
        title: "Dúvidas Frequentes",
        cardContent: [
            { id: 1, question: "O procedimento de Botox dói?", answer: "O procedimento é rápido e praticamente indolor." },
            { id: 2, question: "Quando começo a ver os resultados?", answer: "Entre 48h e 72h após a aplicação." },
            { id: 3, question: "Quanto tempo dura o efeito?", answer: "A duração média é de 4 a 6 meses." },
            { id: 4, question: "Vou ficar com aparência artificial?", answer: "Nossa filosofia é o rejuvenescimento natural." }
        ],
        moreQuestions: {
            title: "Ainda tem alguma dúvida?",
            cta: "Nossa equipe de especialistas está pronta para analisar seu caso.",
            contactButton: "Fale com uma especialista"
        }
    },
    leadForm: {
        title: "Dê o primeiro passo para a sua transformação",
        subtitle: "Preencha seus dados para agendarmos uma avaliação exclusiva.",
        locationUrl: ""
    },
    cta: {
        title: "Revele a sua melhor versão hoje mesmo.",
        imgUrl: "/hero-premium.png"
    },
    footer: {
        logoUrl:"",
        legalConsent: "© 2026 Lumière Clínica. Todos os direitos reservados."
    }
};

export const campaigns = {
    "botox": botoxMock,
    "harmonizacao": {
        ...botoxMock,
        hero: {
            ...botoxMock.hero,
            title: "Harmonização Facial de Alto Padrão",
            subtitle: "Equilíbrio, proporção e contornos definidos para realçar a sua beleza natural.",
        }
    },
    "bioestimuladores": {
        ...botoxMock,
        hero: {
            ...botoxMock.hero,
            title: "Bioestimuladores de Colágeno",
            subtitle: "Firmeza, elasticidade e rejuvenescimento profundo para a sua pele.",
        }
    }
};

export const hubContent: HubContent = {
    hero: {
        title: "Elevando o Padrão da Estética Avançada",
        subtitle: "Descubra uma nova experiência em cuidado pessoal. Na Lumière, combinamos tecnologia de ponta com protocolos exclusivos para revelar a sua beleza mais autêntica.",
        imgUrl: "/aesthetician-premium.png"
    },
    about: {
        title: "Sobre a Especialista",
        description: "Com mais de 10 anos de experiência em estética avançada, a Dra. Lumière desenvolveu protocolos únicos focados em resultados naturais e duradouros. Sua paixão é devolver a autoestima e realçar a beleza única de cada paciente.",
        aestheticianName: "Dra. Lumière",
        imgUrl: "/aesthetician-premium.png"
    },
    services: [
        {
            id: "botox",
            slug: "botox",
            title: "Toxina Botulínica",
            description: "Suavize linhas de expressão e previna sinais de envelhecimento com resultados naturais.",
            imgUrl: "/hero-premium.png"
        },
        {
            id: "harmonizacao",
            slug: "harmonizacao",
            title: "Harmonização Facial",
            description: "Equilíbrio perfeito e contornos definidos para um rosto simétrico e jovem.",
            imgUrl: "/solution-premium.png"
        },
        {
            id: "bioestimuladores",
            slug: "bioestimuladores",
            title: "Bioestimuladores",
            description: "Recupere a firmeza e estimule a produção natural de colágeno da sua pele.",
            imgUrl: "/hero-premium.png"
        }
    ],
    results: {
        title: "Galeria de Resultados",
        subtitle: "Confira a transformação de nossos pacientes com procedimentos seguros e naturais.",
        imgUrls: ["/solution-premium.png", "/hero-premium.png", "/solution-premium.png"]
    },
    testimonials: {
        title: "O que Nossos Pacientes Dizem",
        cardContent: [
            { id: 1, title: "Amanda S.", patientImgUrl: "/aesthetician-premium.png", videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY" },
            { id: 2, title: "Carolina M.", patientImgUrl: "", videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY" },
            { id: 3, title: "Mariana L.", patientImgUrl: "", videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY" },
        ]
    },
    faq: {
        title: "Dúvidas Frequentes",
        cardContent: [
            { id: 1, question: "Como agendar uma avaliação?", answer: "Você pode agendar sua avaliação diretamente pelo nosso WhatsApp clicando em qualquer botão de contato." },
            { id: 2, question: "A avaliação tem custo?", answer: "Nossa primeira avaliação é focada em entender seus desejos e criar um protocolo único. Consulte nossa equipe para mais detalhes." },
            { id: 3, question: "Quais marcas de produtos vocês usam?", answer: "Trabalhamos exclusivamente com marcas importadas e reconhecidas mundialmente pela segurança e eficácia." },
            { id: 4, question: "Como sei qual tratamento é ideal para mim?", answer: "Na sua avaliação presencial, nossa especialista fará uma análise facial completa e indicará o protocolo mais adequado para os seus objetivos." }
        ],
        moreQuestions: {
            title: "Não encontrou sua dúvida?",
            cta: "Fale com nosso atendimento personalizado.",
            contactButton: "Chamar no WhatsApp"
        }
    }
};

export const whatsappLink = "https://wa.me/5561996095651";