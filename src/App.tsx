import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import CaseStudyAlbum from './pages/CaseStudyAlbum';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans selection:bg-white selection:text-black relative">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/blinkplanet" element={<CaseStudy />} />
        <Route path="/case-study/album" element={<CaseStudyAlbum />} />
      </Routes>

      <Footer />
    </div>
  );
}
