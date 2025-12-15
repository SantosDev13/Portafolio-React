import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-main font-sans selection:bg-accent selection:text-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero /> 
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;