import type { StackTechnology, StackVariant } from "../../types/stack";

const StackItem = ({ name, level, variant, icon: Icon }: StackTechnology) => {
  const variants: Record<StackVariant, string> = {
    principal:
      "bg-white dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20 shadow-sm",
    secondary:
      "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-transparent shadow-sm",
    ghost:
      "bg-transparent border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-500 text-xs",
  };
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 border inset-shadow-2xs rounded-lg font-medium transition-all hover:scale-105 ${variants[variant]}`}
    >
      <Icon className={variant === "ghost" ? "text-lg" : "text-2xl"} />
      <div>
        <span className="block">{name}</span>
        {level && (
          <span className="block text-[10px] opacity-60 uppercase tracking-tighter">
            {level}
          </span>
        )}
      </div>
    </div>
  );
};

export default StackItem;
