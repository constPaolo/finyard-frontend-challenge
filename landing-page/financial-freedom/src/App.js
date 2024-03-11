import React from 'react';
import HeroSection from './components/HeroSection';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import GetStarted from './components/GetStarted';
import ClientReviews from './components/ClientReviews';
import './App.scss';

function App() {

  return (
    <div >
      <HeroSection/>
      <TrustedBy/>
      <Features/>
      <GetStarted />
      <ClientReviews />
    </div>
  );
}

export default App;
