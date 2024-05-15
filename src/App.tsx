import './App.css'
import { AboutMe } from './components/AboutMe';
import { BackToTopBtn } from './components/BackToTopBtn';
import { ContactMe } from './components/ContactMe';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Studies } from './components/Studies';
import { Footer } from './components/shared/Footer';
import { Navbar } from './components/shared/Navbar';

function App() {

  return (
    <main>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Studies />
      <ContactMe />
      <Footer />
      <BackToTopBtn />
    </main>
  )
}

export default App
