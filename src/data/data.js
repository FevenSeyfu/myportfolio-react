import QuillHub from '../assets/projects/Quill-hub.png'
import ScrumFlow from '../assets/projects/scrum-flow.png'
import LandingPage from '../assets/projects/manage-landing-page.png'
import RestCountries from '../assets/projects/rest-countries.png'
export const data=[
    {
        id:1,
        name:"Manage Landing Page",
        image:LandingPage,
        description:'Manage landing page is a single-page landing crafted for a Frontend Mentor challenge project. With eye catching illustrations, Horizontal testimonial slider,Newsletter signup form with robust error handling.The design is responsive, adapting to diverse screen sizes, and all interactive elements have hover and focus states. ',
        github:"https://github.com/FevenSeyfu/manage-landing-page",
        live:"https://manage-landing-page-feven.netlify.app/",
        technologies: [
            'React',
            'Tailwind',
            'Vite'
        ]
    },
    {
        id:2,
        name:"Rest Countries",
        image:RestCountries,
        description:'Rest Countries is a Frontend project that fetches countries information from an api and displays with additional feature to filter countries by region, search by name and switch themes color between dark and light.',
        github:"https://github.com/FevenSeyfu/Countries-color-theme-switcher",
        live:"https://rest-countries-theme.netlify.app/",
        technologies: [
            'React',
            'Context',
            'Tailwind',
            'Vite'
        ]
    },
    {
        id:3,
        name:"Scrum Flow",
        image:ScrumFlow,
        description : "A Project Management tool that helps teams organize and manage their projects. It includes features like task creation, assignment, progress tracking with defined RBAC for Product managers,Scrum managers and dev Team",
        github:"https://github.com/FevenSeyfu/scrumflow",
        live:"https://scrumflow.netlify.app/",
        technologies: [
            'MERN',
            'JWT',
            'TAILWINDCSS',
        ]
    },
    {
        id:4,
        name:"Quill Hub",
        image:QuillHub,
        description:'A MERN Stack blogging app with user authentication,dynamic blogging and commenting functionality and blog post searching functionality',
        github:"https://github.com/FevenSeyfu/Quill-Hub",
        live:"https://quill-hub.netlify.app/",
        technologies: [
            'MERN',
            'JWT',
            'TAILWINDCSS',
        ]
    },

]