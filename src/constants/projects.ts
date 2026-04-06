import type { Project } from "../types/project";
import { SiTailwindcss, SiTypescript, SiChartdotjs, SiReact, SiNetlify, SiNodedotjs, SiExpress, SiFirebase, SiZod, SiNextdotjs, SiSupabase, SiVercel, SiLaravel, SiRailway, SiUpstash, SiVuedotjs } from "react-icons/si";

export const PROJECTS_DATA: { featured: Project[], others: Project[], wip: Project[] } = {
    featured: [
        {
            title: "Is My Steam Linux Ready",
            description: "Herramienta que analiza bibliotecas de Steam en tiempo real para verificar su compatibilidad con Linux, ofreciendo una experiencia visual y rápida.",
            why: "Buscaba transformar datos técnicos complejos en una interfaz intuitiva, integrando APIs externas y optimizando la velocidad de respuesta mediante estrategias de caché.",
            tech: [SiReact, SiTailwindcss, SiUpstash, SiNetlify],
            github: "https://github.com/sirlencio/IsMySteamLinuxReady",
            link: "https://ismysteamlinuxready.netlify.app/",
            image: "/projects/steamLinux.png",
            status: "completed"
        },
        {
            title: "Clinica Dental",
            description: "Sistema integral para la gestión de pacientes y tratamientos, diseñado para digitalizar el flujo de trabajo administrativo de una clínica dental.",
            why: "El objetivo fue construir una aplicación Fullstack escalable, garantizando la integridad de los datos mediante validaciones en el servidor y una comunicación fluida entre el frontend y la API.",
            tech: [SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiZod],
            github: "https://github.com/sirlencio/Clinica-Dental",
            link: "https://clinica-dental-blue.vercel.app/",
            image: "/projects/dental.png",
            status: "completed"
        },
        {
            title: "Sneaker Stock Dash",
            description: "Dashboard avanzado para la gestión de inventario de zapatillas con métricas en tiempo real.",
            why: "Proyecto desarrollado para aterrizar conceptos de arquitectura de React en el ecosistema de Vue 3 (Composition API).",
            tech: [SiVuedotjs, SiTailwindcss, SiTypescript, SiChartdotjs, SiVercel],
            github: "https://github.com/sirlencio/sneaker-dashboard", 
            link: "https://sneaker-dashboard-ten.vercel.app/",
            image: "/projects/sneakers.png",
            status: "completed"
        },
    ],
    others: [
        {
            title: "Fire-chat",
            description: "App de mensajeria en Firebase.",
            tech: [SiReact, SiTailwindcss, SiFirebase, SiZod],
            github: "https://github.com/sirlencio/react-firechat",
            link: "https://firechat-2025-d935e.web.app/",
            status: "completed"
        },
        {
            title: "Portfolio-Personal",
            description: "Landing Page de portfolio personal.",
            tech: [SiReact, SiTypescript, SiTailwindcss],
            github: "https://github.com/sirlencio/portfolio-personal",
            link: "https://cldev-chi.vercel.app/",
            status: "completed"
        },
        {
            title: "Guess-Pokemon",
            description: "Aplicación web de adivinar el pokemon.",
            tech: [SiReact, SiTypescript],
            github: "https://github.com/sirlencio/react-guess-pokemon",
            link: "https://guesspokemonreact.netlify.app/",
            status: "completed"
        },
        {
            title: "NextJS-Dashboard",
            description: "Dashboard para aprender lo básico de NextJS.",
            tech: [SiNextdotjs, SiTypescript, SiVercel],
            github: "https://github.com/sirlencio/nextjs-test-dashboard",
            link: "https://nextjs-test-dashboard-lake.vercel.app/",
            status: "completed"
        },
        {
            title: "Xanadu",
            description: "Aplicación web tracker de peliculas y series, con gestión de usuarios.",
            tech: [SiLaravel, SiTailwindcss, SiRailway],
            github: "https://github.com/sirlencio/xanadu-app",
            link: "https://xanadu-production.up.railway.app/",
            status: "completed"
        }
    ],
    wip: [
        {
            title: "Checkpoint",
            description: "Tracker de videojuegos.",
            tech: [SiNextdotjs, SiTypescript, SiSupabase, SiTailwindcss],
            github: "https://github.com/sirlencio/checkpoint",
            status: "wip"
        }
    ]
};
