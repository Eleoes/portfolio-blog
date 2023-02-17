import Portfolio from '/Portfolio.png';
import PlantPH from '/PlantPH.png';
import HooBank from '/HooBank.png';
import UQuiz from '/UQuiz.png';

export const projectsData = [
    {
        id: 1,
        image: Portfolio,
        title: "My Website",
        category: "Other",
        url: 'https://eleoes.com',
        code: 'https://github.com/Eleoes/portfolio-blog',
    },
    {
        id: 2,
        image: PlantPH,
        title: "Plant Parenthood",
        category: "Fullstack",
        url: 'https://plantph.herokuapp.com/',
        code: 'https://github.com/Eleoes/plant_parenthood',
    },
    {
        id: 3,
        image: UQuiz,
        title: "UQuiz (Desktop Only)",
        category: "Fullstack",
        url:'https://uquiz-project.netlify.app/',
        code: 'https://github.com/Eleoes/UQuiz',
    },
    {
        id: 4,
        image: HooBank,
        title: "HooBank",
        category: "Frontend",
        url: 'https://bank-static.netlify.app/',
        code: 'https://github.com/Eleoes/bank_app',
    },
];

export const projectsNav = [
    {
        name: 'All',
    },
    {
        name: 'Fullstack',
    },
    {
        name: 'Frontend',
    },
    {
        name: 'Other',
    },
];