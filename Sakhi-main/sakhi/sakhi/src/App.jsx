import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetail from './components/BlogDetail';
import SubmitBlog from './components/SubmitBlog';
import GetStarted from './components/GetStarted'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import About from './components/About'
import Blogs from './components/Blogs' 
import VisitorStats from './components/VisitorStats';
 import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import SakhiBot from './components/SakhiBot';
import LearnMorePage from './components/LearnMore';

import MultilingualPage from './components/MultilingualPage';


function App() {
   useEffect(() => {
      // Increment total visits
    let totalVisits = parseInt(localStorage.getItem('totalVisits') || '0', 10);
    totalVisits += 1;
    localStorage.setItem('totalVisits', totalVisits.toString());

    // Increment today's visits
    const todayDate = new Date().toISOString().split('T')[0];
    const dailyVisits = JSON.parse(localStorage.getItem('dailyVisits') || '{}');

    if (dailyVisits[todayDate]) {
      dailyVisits[todayDate] += 1;
    } else {
      dailyVisits[todayDate] = 1;
    }

    localStorage.setItem('dailyVisits', JSON.stringify(dailyVisits));
  }, []);
  return (
    <>
  
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          
           <Home />
            
          </>
        } />
        <Route path="/blogs" element={<Blogs />} />
         <Route path="/blogs/:id" element={<BlogDetail />} />
         <Route path="/submit-blog" element={<SubmitBlog />} />
         <Route path="/about" element={<About /> } />
         <Route path="/features" element={<FeaturesSection /> } />
         <Route path="/multilingual" element={<MultilingualPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/botpress-show" element={<SakhiBot />} />

      </Routes>
            <div>
     
      <VisitorStats />
      <SakhiBot />
        
    </div>
    </>
  )
}
export default App

