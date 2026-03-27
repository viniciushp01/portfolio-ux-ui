import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudyDetail from './pages/CaseStudyDetail';
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
        <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}
