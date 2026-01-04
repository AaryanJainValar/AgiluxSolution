import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HeroRoutes from './Components/HomeComponents/HeroRoutes/HeroRoutes'
import FollowInstagramGrid from './Components/OtherRoutesComponents/FollowInstagramGrid/FollowInstagramGrid'
import NavigationBar from './Components/OtherRoutesComponents/NavigationBar/NavigationBar'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './Components/OtherRoutesComponents/AboutUs/AboutUs'
import Services from './Components/OtherRoutesComponents/Services/Services'
import AllClients from './Components/OtherRoutesComponents/AllClients/AllClients'
import PerticularService from './Components/OtherRoutesComponents/Services/PerticularService'
import WhatsAppButton from './Components/OtherRoutesComponents/WhatsAppButton/WhatsAppButton'
import Career from './Components/OtherRoutesComponents/Career/Career'
import PageTitleUpdater from './Components/OtherRoutesComponents/PageTitleUpdater/PageTitleUpdater'

function App() {
  const [count, setCount] = useState(0)

  // Initialize AOS when component mounts
  useEffect(() => {
    // Check if AOS is available
    if (typeof window !== 'undefined' && window.AOS) {
      console.log('AOS is available, initializing...');
      window.AOS.init({
        duration: 1000,
        once: false,
        offset: 0,
        easing: 'ease-out-cubic',
        delay: 0,
        disable: false
      });
      console.log('AOS initialized successfully');

      // Refresh AOS after a short delay to ensure proper initialization
      setTimeout(() => {
        window.AOS.refresh();
        console.log('AOS refreshed');
      }, 100);
    } else {
      console.log('AOS is not available');
    }
  }, []);

  return (
    <>

      <NavigationBar />
      <PageTitleUpdater />
      <Routes>
        <Route path="/" element={<HeroRoutes />} />
        <Route path="/about-agilux" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceName" element={<PerticularService />} />
        <Route path="/all-clients" element={<AllClients />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <FollowInstagramGrid />
      <WhatsAppButton />
    </>
  )
}

export default App
