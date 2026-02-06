import { PROJECTS_DATA } from "../../constants/projects";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  return (
    <section className="py-24 space-y-32">
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          Proyectos <span className="text-blue-500">Destacados</span>
        </h2>
        <div className="grid grid-cols-1 gap-16">
          {PROJECTS_DATA.featured.map((p) => (
            <ProjectCard key={p.title} project={p} isFeatured />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">
              Otros proyectos
            </h3>
            <div className="h-px grow bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="grid gap-6">
            {PROJECTS_DATA.others.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h3 className="text-sm font-bold text-amber-600 dark:text-amber-500 uppercase tracking-[0.2em]">
              En desarrollo (WIP)
            </h3>
            <div className="h-px grow bg-amber-500/20" />
          </div>
          <div className="grid gap-6">
            {PROJECTS_DATA.wip.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;