import { useState } from "react";

const Hero = () => {
  const [isSnowing, setIsSnowing] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-12 py-20 overflow-hidden">
      <div className="relative flex flex-col items-center gap-6 lg:w-1/3">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 bg-white border-blue-500 shadow-2xl overflow-hidden group">
          <img
            src="/foto.jpg"
            alt="Carlos Lozano"
            className={`w-full h-full object-contain object-top transition-all duration-700 
    ${isSnowing ? "brightness-110 contrast-125" : ""}`}
            style={{ transform: "scale(1.0) translateY(5%)" }}
          />

          {isSnowing && (
            <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fresh-snow.png')] animate-snow opacity-70" />
          )}
        </div>

        <button
          onClick={() => setIsSnowing(!isSnowing)}
          className="px-4 py-2 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-blue-500 transition-colors border border-slate-200 dark:border-slate-800 rounded-full"
        >
          {isSnowing ? "☀️ Parar nieve" : "❄️ ¿Hace frío?"}
        </button>
      </div>

      <div className="lg:w-2/3 flex flex-col items-start">
        <span className="text-blue-600 dark:text-blue-500 font-mono mb-4 block text-lg font-medium">
          Hola, mi nombre es
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
          Carlos Lozano.
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-slate-600 dark:text-slate-400 mb-6 leading-tight">
          Construyo soluciones basadas en lógica.
        </h2>

        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mb-10 leading-relaxed">
          Soy un{" "}
          <span className="text-slate-900 dark:text-slate-100 font-semibold italic underline decoration-blue-500">
            Fullstack Developer
          </span>{" "}
          con mentalidad resolutiva. Me especializo en conectar el potencial de
          <span className="font-bold"> React</span> con arquitecturas sólidas,
          optimizando procesos y resolviendo problemas complejos.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#contacto"
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-500/20"
          >
            Contactar
          </a>

          <a
            href="#proyectos"
            className="px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95"
          >
            Ver Proyectos
          </a>
          
          <a
            href="/CV Carlos Lozano.pdf"
            download
            className="px-4 py-2 text-slate-500 dark:text-slate-400 font-bold hover:text-blue-500 dark:hover:text-white transition-colors flex items-center gap-2 group"
          >
            <span>Descargar CV</span>
            <span className="group-hover:translate-y-1 transition-transform">
              ↓
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes snow {
          0% { background-position: 0px 0px; }
          100% { background-position: 500px 1000px; }
        }
        .animate-snow {
          animation: snow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
