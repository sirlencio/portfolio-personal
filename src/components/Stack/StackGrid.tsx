import { STACK_DATA } from "../../constants/stacks";
import StackItem from "./StackItem";

const StackGrid = () => {
  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">Tech Stack</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-blue-600 uppercase mb-4 tracking-widest">Core</h3>
          {STACK_DATA.core.map((tech) => (
            <StackItem key={tech.name} {...tech} />
          ))}
        </div>

        <div className="space-y-12">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-slate-500 uppercase mb-4 tracking-widest">Tools</h3>
            {STACK_DATA.tools.map((tech) => (
              <StackItem key={tech.name} {...tech} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-slate-500 uppercase mb-4 tracking-widest">Databases</h3>
            {STACK_DATA.databases.map((tech) => (
              <StackItem key={tech.name} {...tech} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-slate-500 uppercase mb-4 tracking-widest">Background</h3>
          <div className="grid grid-cols-2 gap-2">
            {STACK_DATA.background.map((tech) => (
              <StackItem key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackGrid;