import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Header from './components/Header';
import QuoteSection from './components/Quote';
import AboutMe from './components/AboutMe';
import MySkills from './components/Skills';
import MyProjects from './components/MyProjects';
import Certifications from './components/Certifications';
import ConnectWithMe from './components/ConnectWithMe';
import { Link } from "react-scroll";
import { ThemeProvider } from './theme-provider';
import ThemeToggle from './components/ui/ThemeToggle';

function App() {
  const [showScrollButton, setShowScrollButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[hsl(var(--background))] text-foreground">
        <Header />
        {/* Add IDs outside the component to ensure scroll works */}
        <div id="home">
          <Intro />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="projects">
          <MyProjects />
        </div>
        <div id="skills">
          <MySkills />
        </div>
        <div id="Certifications">
          <Certifications />
        </div>
        {/* <div id="quote">
          <QuoteSection />
        </div> */}
        <div id="connect">
          <ConnectWithMe />
        </div>

        {/* Add the floating ThemeToggle button */}
        <ThemeToggle />
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 bg-[hsl(var(--accent-foreground))] text-[hsl(var(--accent))] p-3 rounded-full shadow-lg hover:pl-4 hover:rounded-full group overflow-hidden transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <div className="flex items-center">
            <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:mr-2 whitespace-nowrap transition-all duration-300 overflow-hidden">Back to Top</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </button>
      )}
    </ThemeProvider>
  );
}

export default App;
