import type { IconType } from "react-icons";

export type ProjectStatus = "completed" | "wip";

export interface Project {
  title: string;
  description: string;
  tech: IconType[];
  github: string;
  link?: string;
  image?: string;
  status: ProjectStatus;
  why?: string;
}

export interface ProjectsData {
  featured: Project[];
  others: Project[];
  wip: Project[];
}