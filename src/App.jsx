import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, Linkedin } from 'lucide-react';

import { CONTENT } from './data/content';
import { SpectrumBackground } from './components/SpectrumBackground';

// Pages
import HomePage from './pages/HomePage';
import CVPage from './pages/CVPage';
import VisionPage from './pages/VisionPage';
import FocusPage from './pages/FocusPage';
import GalleryPage from './pages/GalleryPage';
import AdminGalleryPage from './pages/AdminGalleryPage';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Admin Shortcut (Command+Shift+L) - kept for existing functionality
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.code === 'KeyL') {
        const code = prompt("Enter Admin Access Code:");
        const adminCode = import.meta.env.VITE_ADMIN_CODE;
        if (code === adminCode || code === "admin") {
          navigate('/admin/gallery');
        } else {
          if (code) alert("Access Denied");
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);


  // Determine if nav should be solid (scrolled)
  const isNavSolid = scrolled;

  // Navigation Links
  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'cv', label: 'Career', path: '/cv' },
    { id: 'vision', label: 'Vision', path: '/vision' },
    { id: 'focus', label: 'Focus Areas', path: '/focus' },
    { id: 'gallery', label: 'Media', path: '/gallery' }
  ];

  return (
    <div className="min-h-screen bg-[#F4F7F6] font-sans selection:bg-[#C5A059] selection:text-white">
      <SpectrumBackground />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isNavSolid || location.pathname !== '/' ? 'bg-[#F4F7F6] shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex flex-col leading-none">
            <span className={`text-2xl font-black tracking-tight ${isNavSolid || location.pathname !== '/' ? 'text-[#013220]' : 'text-white'}`}>Kesias Mwale</span>
            <span className={`text-xs font-bold tracking-widest ${isNavSolid || location.pathname !== '/' ? 'text-[#C5A059]' : 'text-[#C5A059]'}`}>SG ATU 2026</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest hover:text-[#C5A059] transition ${isNavSolid || location.pathname !== '/' ? 'text-[#013220]' : 'text-white/80'}`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`px-5 py-2 rounded-sm font-bold text-xs uppercase tracking-widest transition ${isNavSolid ? 'bg-[#013220] text-white hover:bg-[#C5A059]' : 'bg-white text-[#013220] hover:bg-[#C5A059] hover:text-white'}`}
            >
              Contact
            </button>
            <a
              href="https://www.linkedin.com/in/eng-kezias-kazuba-mwale/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${isNavSolid || location.pathname !== '/' ? 'text-[#013220] hover:text-[#C5A059]' : 'text-white hover:text-[#C5A059]'}`}
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className={`md:hidden z-50 relative ${isNavSolid || mobileMenuOpen ? 'text-[#013220]' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="text-xl font-medium text-gray-800 hover:text-[#C5A059] transition"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
              } else {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="mt-8 px-8 py-3 bg-[#013220] text-white rounded-full font-bold uppercase tracking-widest"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage onNavigate={(path) => navigate('/' + path)} />} />
          <Route path="/cv" element={<CVPage onNavigate={(path) => navigate('/' + path)} />} />
          <Route path="/vision" element={<VisionPage onNavigate={(path) => navigate('/' + path)} />} />
          <Route path="/focus" element={<FocusPage onNavigate={(path) => navigate('/' + path)} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/admin/gallery" element={<AdminGalleryPage />} />
        </Routes>
      </main>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-gray-500 py-16 border-t border-gray-800 relative z-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Brand */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Mwale for ATU SG</h4>
            <p className="text-sm leading-relaxed mb-4">
              Advancing ATU Transformation.<br />
              Deepening contribution to Digital Transformation Agendas.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/cv" className="hover:text-[#C5A059] transition">Curriculum Vitae</Link></li>
              <li><Link to="/vision" className="hover:text-[#C5A059] transition">Strategic Vision</Link></li>
              <li><Link to="/focus" className="hover:text-[#C5A059] transition">Stakeholder Focus</Link></li>
              <li><Link to="/gallery" className="hover:text-[#C5A059] transition">Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Hashtag & Copyright */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Official Hashtag</h4>
            <div className="text-2xl font-bold text-[#C5A059] mb-8">#kezias4atusg</div>

            <p className="text-xs text-gray-600 leading-relaxed">
              © 2026 Eng. Kezias Kazuba MWALE.<br />
              All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default App;