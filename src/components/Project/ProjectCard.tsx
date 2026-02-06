import type { Project } from "../../types/project";

interface Props {
  project: Project;
  isFeatured?: boolean;
}

const ProjectCard = ({ project, isFeatured }: Props) => {
  return (
    <div className={`group relative bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all hover:border-blue-500/50 ${isFeatured ? 'flex flex-col lg:flex-row gap-8 p-0' : 'p-6'}`}>
      
      {project.status === "wip" && (
        <span className="absolute top-3 right-3 px-2 py-1 text-[10px] font-bold bg-amber-500/10 text-amber-600 rounded uppercase">
          WIP
        </span>
      )}

      {isFeatured && (
        <div className="lg:w-1/2 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
        </div>
      )}

      <div className={isFeatured ? 'p-8 lg:w-1/2 flex flex-col justify-center' : ''}>
        <div className="flex gap-2 mb-3">
          {project.tech.map((Icon, i) => <Icon key={i} className="text-xl text-slate-400 dark:text-slate-500" />)}
        </div>
        
        <h3 className="text-xl font-bold dark:text-white mb-2">{project.title}</h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
          {project.description}
        </p>

        {isFeatured && project.why && (
          <p className="text-xs text-blue-600 dark:text-blue-400 italic mb-6">
            <span className="font-bold uppercase not-italic mr-2">Propósito:</span>
            {project.why}
          </p>
        )}

        <div className="flex gap-4 mt-auto">
          <a href={project.github} target="_blank" className="text-sm font-bold flex items-center gap-1 hover:text-blue-500 transition-colors dark:text-white">
            GITHUB ↗
          </a>
          {project.link && project.status === "completed" && (
            <a href={project.link} target="_blank" className="text-sm font-bold text-blue-500 flex items-center gap-1 hover:underline">
              LIVE APP ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;