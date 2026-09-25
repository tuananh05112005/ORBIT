import React, { useState } from 'react';
import Navbar from '../components/Navigation/Navbar';
import Hero from '../components/Hero/Hero';
import Intro from '../components/Intro/Intro';
import Technology from '../components/Technology/Technology';
import SpacecraftInteractive from '../components/Spacecraft/SpacecraftInteractive';
import Mission from '../components/Mission/Mission';
import EarthSection from '../components/Earth/EarthSection';
import SpaceData from '../components/SpaceData/SpaceData';
import Cinematic from '../components/Cinematic/Cinematic';
import About from '../components/About/About';
import FinalCTA from '../components/CTA/FinalCTA';
import Footer from '../components/Footer/Footer';
import ContactModal from '../components/Navigation/ContactModal';

export default function Home({ isLoaded }) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="orbit-main-wrapper">
      <Navbar onOpenContact={() => setContactOpen(true)} />
      
      <Hero isLoaded={isLoaded} />
      <Intro />
      <Technology />
      <SpacecraftInteractive />
      <Mission />
      <EarthSection />
      <SpaceData />
      <Cinematic />
      <About />
      <FinalCTA onOpenContact={() => setContactOpen(true)} />
      <Footer onOpenContact={() => setContactOpen(true)} />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}
