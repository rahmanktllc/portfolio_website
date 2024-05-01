import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
