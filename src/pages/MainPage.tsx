import About from "../components/About";
import Reveal from "../components/animations/Reveal";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProjectsGrid from "../components/Project/ProjectsGrid";
import StackGrid from "../components/Stack/StackGrid";

const MainPage = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <Background />

      <NavBar />

      <main className="relative max-w-5xl mx-auto px-4 pt-24 z-10">
        <Reveal>
          <div id="inicio">
            <Hero />
          </div>
        </Reveal>
        <Reveal>
          <div id="stacks">
            <StackGrid />
          </div>
        </Reveal>
        <Reveal>
          <div id="proyectos">
            <ProjectsGrid />
          </div>
        </Reveal>
        <Reveal>
          <div id="sobre-mi">
            <About />
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
};

export default MainPage;
