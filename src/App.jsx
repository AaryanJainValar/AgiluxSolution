import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AgiluxHome from './Components/AgiluxHome/AgiluxHome';
import './App.css';
import AgiluxNavigation from './Components/AgiluxNavigation/AgiluxNavigation';
import AppDevelopment from './Components/MinimalComponent/AppDevelopmentProjects/AppDevelopment';
import WebDevelopment from './Components/MinimalComponent/WebDevelopmentProjects/WebDevelopment';
import AgiluxAboutUs from './Components/AgiluxAboutUs/AgiluxAboutUs';
import AgiluxFooter from './Components/AgiluxFooter/AgiluxFooter';
import AgiluxBlog from './Components/AgiluxBlog/AgiluxBlog';
import CommonServices from './Components/MinimalComponent/CommonServices/CommonServices';
import AgiluxVideoContent from './Components/MinimalComponent/VideoTab/AgiluxVideoContent';
import AnimatedLoadingScreen from './Components/AnimatedLoader/AnimatedLoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <AnimatedLoadingScreen />;
  }

  return (
    <Router>
      <AgiluxNavigation />
      <Routes>
        <Route exact path="/" element={<AgiluxHome />} />
        <Route exact path="/agiluxaboutus" element={<AgiluxAboutUs />} />
        <Route exact path="/agiluxblog" element={<AgiluxBlog />} />
        <Route exact path="/appdevelopment" element={<AppDevelopment />} />
        <Route exact path="/webdevelopment" element={<WebDevelopment />} />
        <Route exact path="/services/:service" element={<CommonServices />} />
        <Route exact path="/agiluxVideoContent" element={<AgiluxVideoContent />} />
      </Routes>
      <AgiluxFooter />
    </Router>
  );
}

export default App;
