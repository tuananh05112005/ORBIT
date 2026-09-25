import React, { useState } from 'react';
import './styles/globals.css';
import './styles/sections.css';
import './styles/responsive.css';
import Loading from './components/Loading/Loading';
import Cursor from './components/Cursor/Cursor';
import Home from './pages/Home';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LanguageProvider>
      <div className="orbit-app">
        {/* Dynamic Background Noise Texture */}
        <div className="bg-noise" />
        
        {/* Interactive Custom Cursor */}
        <Cursor />

        {/* Loading Sequence */}
        <Loading onLoaded={() => setIsLoaded(true)} />

        {/* Main Experience */}
        <Home isLoaded={isLoaded} />
      </div>
    </LanguageProvider>
  );
}
