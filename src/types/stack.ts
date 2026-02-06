import type { IconType } from "react-icons";

export type StackVariant = "principal" | "secondary" | "ghost";

export interface StackTechnology {
  name: string;
  icon: IconType;
  level?: string;
  variant: StackVariant;
}

export interface StackDataStructure {
  core: StackTechnology[];
  tools: StackTechnology[];
  databases: StackTechnology[];
  background: StackTechnology[];
}