import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './pages/Dashboard';
import AnimeManagement from './pages/AnimeManagement';
import ThemeSettings from './pages/ThemeSettings';
import SiteSettings from './pages/SiteSettings';
import SEOSettings from './pages/SEOSettings';
import AdsSettings from './pages/AdsSettings';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/anime" element={<AnimeManagement />} />
              <Route path="/theme" element={<ThemeSettings />} />
              <Route path="/settings" element={<SiteSettings />} />
              <Route path="/seo" element={<SEOSettings />} />
              <Route path="/ads" element={<AdsSettings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;