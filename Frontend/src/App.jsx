import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from './components/Layout';
import Homepage from './components/pages/Homepage';
import AboutUsReadMore from './components/pages/about/AboutUsReadMore';
import Preloader from './components/Preloader';

import '../public/fonts.css';
import 'react-toastify/dist/ReactToastify.css';

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

const AppRoutes = () => (
  <>
    <ScrollToHashElement />
    <Routes>
      <Route path="/" element={<Layout><Homepage /></Layout>} />
      <Route path="/about-us" element={<Layout><AboutUsReadMore /></Layout>} />
      {/* Add more routes here */}
    </Routes>
  </>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (loading) {
    return <Preloader hide={!loading} />;
  }

  return (
    <Router>
      <ToastContainer />
      <AppRoutes />
    </Router>
  );
};

export default App;
