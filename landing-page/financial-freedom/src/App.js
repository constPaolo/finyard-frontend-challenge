import React from 'react';
import HeroSection from './components/HeroSection';
import TrustedBy from './components/TrustedBy';
import GetStarted from './components/GetStarted';
import ClientReviews from './components/ClientReviews';
import './App.scss';

function App() {


  const trustedByData = {
    count: '1,000,000+ people',
    description: 'Over a million people have already started their journey towards financial freedom with us, and each has their own reason for choosing PrimeXBT.'
    // Altri dettagli o dati possono essere aggiunti qui
  };

  // Potresti avere array di dati per sezioni come recensioni dei clienti

  return (
    <div className="App">
      <HeroSection/>
      <TrustedBy {...trustedByData} />
      <GetStarted />
      <ClientReviews />
      {/* Aggiungi altri componenti della landing page come necessario */}
    </div>
  );
}

export default App;
