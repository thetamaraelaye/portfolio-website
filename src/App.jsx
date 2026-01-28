import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnicalWriting from "./components/TechnicalWriting";
import Websites from "./components/Websites";
import Skills from "./components/Skills";
import OtherSkills from "./components/OtherSkills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import InternalTools from "./components/InternalTools";
import Footer from "./components/Footer";
import projects from "./data/projects.json";

function App() {
  const skills = [
    "React",
    "Redux",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "WordPress",
    "Elementor",
    "Elementor Pro",
    "Content Management Systems",
    "Flutterflow",
    "Python",
    "FastAPI",
    "Node.js",
    "Express.js",
    "Axios",
    "Puppeteer",
    "Swagger/OpenAPI",
    "Postman",
    "Tailwind CSS",
    "Git",
    "HTML",
    "CSS",
  ];

  const otherSkills = [
    "Technical Writing",
    "Gitbook",
    "Google Suites",
  ];

  // projects are imported from src/data/projects.json

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Navbar />
      <Websites />
      <Projects projects={projects} />
      <InternalTools />
      <TechnicalWriting />
      <Skills skills={skills} />
      <OtherSkills skills={otherSkills} />
      <Experience />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
