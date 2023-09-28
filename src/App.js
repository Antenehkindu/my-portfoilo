import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio />
      <Skills/>
      <Contacts/>
      <SocialLinks/>
    </div>
  );
}

export default App;
