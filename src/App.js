import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import Profiles from "./components/Profile/profile";
import Footer from "./components/Footer/footer";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Profiles/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
