import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import TarifsPage from './pages/TarifsPage';
import NotreHistoirePage from './pages/NotreHistoirePage';
import GaleriePage from './pages/GaleriePage';
import ContactPage from './pages/ContactPage';
import MentionsLegalesPage from './pages/MentionsLegalesPage';
import PolitiqueConfidentialitePage from './pages/PolitiqueConfidentialitePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/tarifs" element={<TarifsPage />} />
          <Route path="/notre-histoire" element={<NotreHistoirePage />} />
          <Route path="/galerie" element={<GaleriePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
        </Routes>
      </Layout>
      <CookieBanner />
    </Router>
  );
}

export default App;
