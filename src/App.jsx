import MainLayout from "./layouts/MainLayout";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MainLayout>
  );
}
