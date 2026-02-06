import type { Project } from "../types/project";
import { SiTailwindcss, SiTypescript, SiReact, SiNetlify, SiNodedotjs, SiExpress, SiFirebase, SiZod, SiNextdotjs, SiSupabase, SiVercel, SiLaravel, SiRailway, SiUpstash } from "react-icons/si";

export const PROJECTS_DATA: { featured: Project[], others: Project[], wip: Project[] } = {
    featured: [
        {
            title: "Is My Steam Linux Ready",
            description: "App para comprobar si tu biblioteca de Steam es compatible con Linux.",
            why: "Quería hacer una app para que los usuarios pudiesen comprobar de manera visual si sus juegos de Steam son compatibles con Linux.",
            tech: [SiReact, SiTailwindcss, SiUpstash, SiNetlify],
            github: "https://github.com/sirlencio/IsMySteamLinuxReady",
            link: "https://ismysteamlinuxready.netlify.app/",
            image: "/projects/steamLinux.png",
            status: "completed"
        },
        {
            title: "Clinica Dental",
            description: "App para gestión administrativa de pacientes en clínicas dentales.",
            why: "Quería practicar CRUD en fullstak con React y NodeJS.",
            tech: [SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiZod],
            github: "https://github.com/sirlencio/Clinica-Dental",
            link: "https://clinica-dental-blue.vercel.app/",
            image: "/projects/dental.png",
            status: "completed"
        },
        {
            title: "Fire-chat",
            description: "App de mensajeria en Firebase.",
            why: "Quería practicar React y aprender a usar Firebase.",
            tech: [SiReact, SiTailwindcss, SiFirebase, SiZod],
            github: "https://github.com/sirlencio/react-firechat",
            link: "https://firechat-2025-d935e.web.app/",
            image: "/projects/firebase.png",
            status: "completed"
        },
    ],
    others: [
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