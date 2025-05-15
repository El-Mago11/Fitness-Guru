import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Classes from './components/Classes';
import Schedule from './components/Schedule';
import Trainers from './components/Trainers';
import Events from './components/Events';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

import '../public/fonts.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1500); // Ensures preloader is visible for a bit
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
    <div className="app-wrapper fade-in">
      <ToastContainer />
      <Navbar />
      <Home />
      <About />
      <Classes />
      <Schedule />
      <Trainers />
      <Events />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
