import { useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import OnlineWebsites from './components/OnlineWebsites';
import Projects from './components/Projects';
import ResumeAccess from './components/ResumeAccess';
import ResumePage from './components/ResumePage';
import Socials from './components/Socials';
import Stats from './components/Stats';

function getInitialTheme() {
  const storedTheme = localStorage.getItem('portfolio-theme');

  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderLeaving, setIsLoaderLeaving] = useState(false);
  const location = useLocation();
  const isResumePage = location.pathname === '/resume';
  const isFirstLoad = useRef(true);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    setIsLoading(true);
    setIsLoaderLeaving(false);

    const totalDuration = isFirstLoad.current ? 2600 : 1700;
    const leaveStart = totalDuration - 550;

    const leaveTimer = window.setTimeout(() => {
      setIsLoaderLeaving(true);
    }, leaveStart);

    const removeTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, totalDuration);

    isFirstLoad.current = false;

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 },
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => element.classList.remove('visible'));
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="app-shell">
      {isLoading ? <LoadingScreen isLeaving={isLoaderLeaving} /> : null}
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />
      <div className="ambient ambient-four" aria-hidden="true" />
      <div className="bg-geo bg-geo-one" aria-hidden="true" />
      <div className="bg-geo bg-geo-two" aria-hidden="true" />
      <div className="bg-geo bg-geo-three" aria-hidden="true" />
      <Navbar
        theme={theme}
        isResumePage={isResumePage}
        onToggleTheme={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Hero />
                <Stats />
                <Experience />
                <Projects />
                <OnlineWebsites />
                <ResumeAccess />
                <Socials />
              </>
            )}
          />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}