import QuillHub from '../assets/projects/Quill-hub.png'
import ScrumFlow from '../assets/projects/scrum-flow.png'
import BookStoreCMS from '../assets/projects/BookStoreCMS.png'
import LandingPage from '../assets/projects/manage-landing-page.png'
import BookStore from '../assets/projects/book-store.png'
import RestCountries from '../assets/projects/rest-countries.png'
export const data=[
    {
        id:1,
        name:"Scrum flow",
        image:ScrumFlow,
        description : "A Project Management tool that helps teams organize and manage their projects. It includes features like task creation, assignment, progress tracking with defined RBAC for Product managers,Scrum managers and dev Team",
        github:"https://github.com/FevenSeyfu/scrumflow",
        live:"https://scrumflow.netlify.app/",
        technologies: {
            1: 'MERN',
            2: 'JWT',
            3: 'TAILWINDCSS'
        }
    },
    {
        id:2,
        name:"Quill Hub",
        image:QuillHub,
        description:'A MERN Stack bloggin app with user authentication,dynamic bloggin and commenting functionality and blog post searching functionality',
        github:"https://github.com/FevenSeyfu/Quill-Hub",
        live:"https://quill-hub.netlify.app/",
        technologies: {
            1: 'MERN',
            2: 'JWT',
            3: 'TAILWINDCSS'
        }
    },
    {
        id:3,
        name:"BookStore",
        image:BookStore,
        description:'Book Store A fullstack book app with Crud opertations to manage books information and modal to view details',
        github:"https://github.com/FevenSeyfu/book-store",
        live:"https://book-store-feven.netlify.app/",
        technologies: {
            1: 'MERN',
            2: 'Netlify',
            3: 'Tailwind'
        }
    },
    {
        id:4,
        name:"Manage Landing Page",
        image:LandingPage,
        description:'Manage landing page is a single-page landing crafted for a Frontend Mentor challenge project. With eye catching illustrations, Horizontal testimonial slider,Newsletter signup form with robust error handling.The design is responsive, adapting to diverse screen sizes, and all interactive elements have hover and focus states. ',
        github:"https://github.com/FevenSeyfu/manage-landing-page",
        live:"https://manage-landing-page-feven.netlify.app/",
        technologies: {
            1: 'React',
            2: 'Tailwind',
            3: 'Vite'
        }
    },
    {
        id:5,
        name:"BooksStoreCMS",
        image:BookStoreCMS,
        description:'BookStoreCMS is a simple bookstore management tool built with React and Redux.',
        github:"https://github.com/FevenSeyfu/bookstorecms",
        live:"https://bookstore-feven.netlify.app/",
        technologies: {
            1: 'React',
            2: 'Redux',
            3: 'CSS'
        }
    },
    {
        id:6,
        name:"Rest-Countries with theme switcher",
        image:RestCountries,
        description:'Rest Countries is a Frontend project that fetches countries information from an api and displays with additional feature to filter countires by region, search by name and switch themes color between dark and light.',
        github:"https://github.com/FevenSeyfu/Countries-color-theme-switcher",
        live:"https://rest-countries-theme.netlify.app/",
        technologies: {
            1: 'React',
            2: 'context api',
            3: 'Tailwind'
        }
    },
]