import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { WorkPage } from './components/pages/WorkPage';
import { ContactPage } from './components/pages/ContactPage';
import { WritingPage } from './components/pages/WritingPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'work':
        return <WorkPage />;
      case 'contact':
        return <ContactPage />;
      case 'writing':
        return <WritingPage onNavigate={setCurrentPage} />;
      case 'writing-machu-picchu':
        return <WritingPage onNavigate={setCurrentPage} article="machu-picchu" />;
      case 'writing-camino-santiago':
        return <WritingPage onNavigate={setCurrentPage} article="camino-santiago" />;
      case 'writing-canadian-rockies':
        return <WritingPage onNavigate={setCurrentPage} article="canadian-rockies" />;
      case 'writing-rowing':
        return <WritingPage onNavigate={setCurrentPage} article="rowing" />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}