import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LayoutEN from './components/LayoutEN';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import TarifsPage from './pages/TarifsPage';
import NotreHistoirePage from './pages/NotreHistoirePage';
import GaleriePage from './pages/GaleriePage';
import ContactPage from './pages/ContactPage';
import MentionsLegalesPage from './pages/MentionsLegalesPage';
import PolitiqueConfidentialitePage from './pages/PolitiqueConfidentialitePage';
// English pages
import HomePageEN from './pages/en/HomePageEN';
import ExperiencePageEN from './pages/en/ExperiencePageEN';
import PricesPageEN from './pages/en/PricesPageEN';
import OurStoryPageEN from './pages/en/OurStoryPageEN';
import GalleryPageEN from './pages/en/GalleryPageEN';
import ContactPageEN from './pages/en/ContactPageEN';

function App() {
  return (
    <Router>
      <Routes>
        {/* French routes */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/experience" element={<Layout><ExperiencePage /></Layout>} />
        <Route path="/tarifs" element={<Layout><TarifsPage /></Layout>} />
        <Route path="/notre-histoire" element={<Layout><NotreHistoirePage /></Layout>} />
        <Route path="/galerie" element={<Layout><GaleriePage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/mentions-legales" element={<Layout><MentionsLegalesPage /></Layout>} />
        <Route path="/politique-confidentialite" element={<Layout><PolitiqueConfidentialitePage /></Layout>} />

        {/* English routes */}
        <Route path="/en" element={<LayoutEN><HomePageEN /></LayoutEN>} />
        <Route path="/en/experience" element={<LayoutEN><ExperiencePageEN /></LayoutEN>} />
        <Route path="/en/prices" element={<LayoutEN><PricesPageEN /></LayoutEN>} />
        <Route path="/en/our-story" element={<LayoutEN><OurStoryPageEN /></LayoutEN>} />
        <Route path="/en/gallery" element={<LayoutEN><GalleryPageEN /></LayoutEN>} />
        <Route path="/en/contact" element={<LayoutEN><ContactPageEN /></LayoutEN>} />
      </Routes>
      <CookieBanner />
    </Router>
  );
}

export default App;
