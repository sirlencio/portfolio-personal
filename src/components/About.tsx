const skills = ["Scrum", "Jira", "Lógica", "Autogestión", "Adaptabilidad"];

const About = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-slate-900 dark:text-white">
          Sobre <span className="text-blue-500">mí</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              ¡Hola! Soy{" "}
              <span className="text-slate-900 dark:text-white font-semibold">
                Carlos Lozano
              </span>
              . Me defino como un desarrollador enfocado en la{" "}
              <span className="text-blue-500 font-medium">
                resolución de problemas
              </span>{" "}
              a través de la lógica. Mi perfil se mueve cómodamente entre el
              Frontend y el Backend, disfrutando especialmente de esos retos
              técnicos donde ambas capas deben integrarse de forma eficiente.
            </p>

            <p>
              Aunque soy capaz de conceptualizar y plasmar layouts funcionales,
              mi prioridad es siempre la{" "}
              <span className="text-slate-900 dark:text-white font-medium">
                robustez técnica
              </span>
              . No busco solo que una interfaz sea visualmente atractiva, sino
              que la arquitectura que hay detrás sea escalable y coherente.
            </p>

            <p>
              Mi base técnica nació con{" "}
              <span className="font-medium text-slate-800 dark:text-slate-200">
                Java
              </span>
              , lo que me dio una estructura mental sólida. Esa curiosidad me
              llevó a explorar el desarrollo de videojuegos en{" "}
              <span className="italic"> Unity y Unreal Engine</span>, dándome
              una perspectiva única sobre el rendimiento. Hoy, aplico esa misma
              rigurosidad al ecosistema de{" "}
              <span className="font-bold text-slate-800 dark:text-slate-200">
                React, Next.js y TypeScript
              </span>
              , mientras sigo expandiendo mis horizontes hacia el backend con{" "}
              <span className="font-bold text-slate-800 dark:text-slate-200">
                NestJS
              </span>
              .
            </p>

            <p>
              Además, entiendo que el desarrollo profesional va más allá del
              código. Domino herramientas como{" "}
              <span className="text-blue-500 font-medium">
                Jira y Confluence
              </span>
              , y estoy habituado a trabajar bajo metodologías{" "}
              <span className="font-bold text-slate-800 dark:text-slate-200">
                Scrum
              </span>
              , valorando la comunicación clara y el compromiso con los
              objetivos del equipo.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="relative p-8 bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500 mb-6">
                Datos clave
              </h3>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 group">
                  <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                  <span className="text-sm dark:text-slate-200">
                    <span className="font-bold dark:text-slate-200">
                      Ubicación:
                    </span>{" "}
                    España (Remoto/Híbrido)
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                  <span className="text-sm dark:text-slate-200">
                    <span className="font-bold dark:text-slate-200">
                      Foco actual:
                    </span>{" "}
                    Fullstack (NestJS & Next.js)
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                  <span className="text-sm dark:text-slate-200">
                    <span className="font-bold dark:text-slate-200">
                      Mentalidad:
                    </span>{" "}
                    Resolutiva y Ágil
                  </span>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 text-xs rounded-full font-medium hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
