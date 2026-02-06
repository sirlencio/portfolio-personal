import type { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiNodedotjs, SiExpress, SiNestjs,
  SiPostgresql, SiMysql, SiMongodb, SiJira,
  SiConfluence, SiPhp, SiLaravel, SiUnity,
  SiUnrealengine, SiSharp,
  SiAngular
} from "react-icons/si";
import { FaJava, FaGitAlt, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import type { StackDataStructure } from "../types/stack";
import { TbBrandReactNative } from "react-icons/tb";

export interface StackItem {
  name: string;
  level?: string;
  variant: "principal" | "secondary" | "ghost";
  icon: IconType;
}

export const STACK_DATA: StackDataStructure = {
  core: [
    { name: "Next.js", icon: SiNextdotjs, level: "Mi favorito", variant: "principal" as const },
    { name: "React", icon: SiReact, level: "Avanzado", variant: "principal" as const },
    { name: "TypeScript", icon: SiTypescript, level: "Avanzado", variant: "principal" as const },
    { name: "JavaScript", icon: SiJavascript, level: "Avanzado", variant: "principal" as const },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: "Intermedio", variant: "principal" as const },
    { name: "Node.js", icon: SiNodedotjs, level: "Backend", variant: "principal" as const },
    { name: "Express.js", icon: SiExpress, level: "Backend", variant: "principal" as const },
    { name: "NestJS", icon: SiNestjs, level: "In Progress", variant: "principal" as const },
    { name: "React Native", icon: TbBrandReactNative, level: "In Progress", variant: "principal" as const },
  ],
  tools: [
    { name: "Jira", icon: SiJira, level: "Experto", variant: "secondary" as const },
    { name: "Confluence", icon: SiConfluence, level: "Experto", variant: "secondary" as const },
    { name: "Git", icon: FaGitAlt, level: "Intermedio", variant: "secondary" as const },
  ],
  databases: [
    { name: "PostgreSQL", icon: SiPostgresql, variant: "secondary" as const },
    { name: "MySQL", icon: SiMysql, variant: "secondary" as const },
    { name: "MongoDB", icon: SiMongodb, variant: "secondary" as const },
    { name: "SQL", icon: FaDatabase, variant: "secondary" as const },
  ],
  background: [
    { name: "Java", icon: FaJava, variant: "ghost" as const },
    { name: "Unity", icon: SiUnity, variant: "ghost" as const },
    { name: "Unreal Engine", icon: SiUnrealengine, variant: "ghost" as const },
    { name: "PHP", icon: SiPhp, variant: "ghost" as const },
    { name: "Laravel", icon: SiLaravel, variant: "ghost" as const },
    { name: "C#", icon: SiSharp, variant: "ghost" as const },
    { name: "Angular", icon: SiAngular, variant: "ghost" as const },
    { name: "HTML", icon: FaHtml5, variant: "ghost" as const },
    { name: "CSS", icon: FaCss3Alt, variant: "ghost" as const },
  ]
};