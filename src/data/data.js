import QuillHub from '../assets/projects/Quill-hub.png'
import ScrumFlow from '../assets/projects/Scrum-master.png'
import BookStoreCMS from '../assets/projects/BookStoreCMS.png'
import LandingPage from '../assets/projects/LandingPage.png'
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
        id:4,
        name:"Landing Page",
        image:LandingPage,
        description:'A responsive frontend 2 page landing page created for a Javascript hackathon',
        github:"https://github.com/FevenSeyfu/Javascript-Hackathon",
        live:"https://fevenseyfu.github.io/Javascript-Hackathon/",
        technologies: {
            1: 'HTML',
            2: 'CSS',
            3: 'JS'
        }
    },
]