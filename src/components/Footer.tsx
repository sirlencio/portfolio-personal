import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800" id="contacto">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            © {new Date().getFullYear()} Carlos Lozano
          </p>
          <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">
            Fullstack Developer
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noreferrer"
            className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 text-slate-900 dark:text-white"
            aria-label="GitHub"
          >
            <SiGithub className="h-8 w-8 md:h-10 md:w-10" />
          </a>

          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noreferrer"
            className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 text-[#0077B5]"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="h-8 w-8 md:h-10 md:w-10" />
          </a>
          <a
            href="mailto:carlos.l.p.251001@gmail.com"
            className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            CONTACTO
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
