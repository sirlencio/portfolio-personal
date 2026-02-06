import ThemeToggle from "./ThemeToggle";

const nav = [
  { name: "Tech Stack", href: "#stacks" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Sobre mí", href: "#sobre-mi" },
];
const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 md:px-32 bg-white/70 dark:bg-gray-900/80 dark:text-white border-b border-slate-200 dark:border-gray-800 backdrop-blur-md z-50 transition-all">
      <div className="font-black text-xl tracking-tighter group">
        <a href="#inicio">
          CL
          <span className="text-blue-500 group-hover:text-blue-400 transition-colors">
            .
          </span>
          dev
        </a>
      </div>

      <div className="flex gap-8 items-center font-mono text-sm tracking-tight">
        {nav.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative py-1 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-white transition-colors group"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}

        <div className="pl-4 border-l border-slate-200 dark:border-gray-700">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
