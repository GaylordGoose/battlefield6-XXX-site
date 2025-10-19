import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewsSection } from './components/NewsSection';
import { GuidesSection } from './components/GuidesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { NewsPage } from './components/NewsPage';
import { NewsDetailPage } from './components/NewsDetailPage';
import { LoadoutsPage } from './components/LoadoutsPage';
import { LoadoutDetailPage } from './components/LoadoutDetailPage';
import { WeaponsPage } from './components/WeaponsPage';
import { WeaponDetailPage } from './components/WeaponDetailPage';
import { GuidesPage } from './components/GuidesPage';
import { GuideDetailPage } from './components/GuideDetailPage';
import { AboutPage } from './components/AboutPage';
import { ContactsPage } from './components/ContactsPage';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';
import { SubmitLoadoutModal } from './components/SubmitLoadoutModal';

type PageType = 
  | 'home' 
  | 'news' 
  | 'newsDetail' 
  | 'loadouts' 
  | 'loadoutDetail'
  | 'weapons'
  | 'weaponDetail'
  | 'guides'
  | 'guideDetail'
  | 'about'
  | 'contacts'
  | 'privacy'
  | 'terms';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Simple routing based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.hash.slice(1);
      
      if (path.startsWith('/news/')) {
        setCurrentPage('newsDetail');
      } else if (path === '/news') {
        setCurrentPage('news');
      } else if (path.startsWith('/loadouts/')) {
        setCurrentPage('loadoutDetail');
      } else if (path === '/loadouts') {
        setCurrentPage('loadouts');
      } else if (path.startsWith('/weapons/')) {
        setCurrentPage('weaponDetail');
      } else if (path === '/weapons') {
        setCurrentPage('weapons');
      } else if (path.startsWith('/guides/')) {
        setCurrentPage('guideDetail');
      } else if (path === '/guides') {
        setCurrentPage('guides');
      } else if (path === '/about') {
        setCurrentPage('about');
      } else if (path === '/contacts') {
        setCurrentPage('contacts');
      } else if (path === '/privacy') {
        setCurrentPage('privacy');
      } else if (path === '/terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'news':
        return <NewsPage />;
      case 'newsDetail':
        return <NewsDetailPage />;
      case 'loadouts':
        return <LoadoutsPage />;
      case 'loadoutDetail':
        return <LoadoutDetailPage />;
      case 'weapons':
        return <WeaponsPage />;
      case 'weaponDetail':
        return <WeaponDetailPage />;
      case 'guides':
        return <GuidesPage />;
      case 'guideDetail':
        return <GuideDetailPage />;
      case 'about':
        return <AboutPage />;
      case 'contacts':
        return <ContactsPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return (
          <main>
            <Hero />
            <NewsSection />
            <GuidesSection />
            <FeaturesSection onOpenSubmitModal={() => setIsSubmitModalOpen(true)} />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1d23] text-white relative overflow-hidden">
      {/* Subtle tactical background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1d23] via-[#242831] to-[#1a1d23]" />
        
        {/* Very subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, #ea580c 0px, #ea580c 1px, transparent 1px, transparent 100px),
              repeating-linear-gradient(90deg, #ea580c 0px, #ea580c 1px, transparent 1px, transparent 100px)
            `
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        {renderPage()}
        <Footer />
      </div>

      {/* Modal for submitting loadouts */}
      <SubmitLoadoutModal 
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </div>
  );
}