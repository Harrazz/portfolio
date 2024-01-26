import Navbar from "./components/js/navbar";
import Home from "./components/js/home";
import Profiles from "./components/js/profiles";
import Skills from "./components/js/skills";
import Projects from "./components/js/projects";
import Contact from "./components/js/contact";
import Footer from "./components/js/footer";
import './app.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Profiles />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
