import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import '@fontsource/poppins';
import '@fontsource/montserrat';

function App() {
  return (
    <div className="" >
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
    </div>
  );
}

export default App;
