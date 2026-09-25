import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import StarField from './StarField';
import SpacecraftModel from '../Spacecraft/SpacecraftModel';

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.warn("Canvas WebGL error caught:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="webgl-fallback-view">
          <div className="webgl-fallback-glow"></div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function HeroCanvas({ mousePos }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <CanvasErrorBoundary>
      <Canvas
        camera={{ position: [0, 0.4, 4.8], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} color="#001833" />
        
        {/* Main Sun Key Light */}
        <directionalLight
          position={[6, 8, 5]}
          intensity={2.2}
          color="#ffffff"
        />

        {/* Cold Cyan Rim Light from behind */}
        <directionalLight
          position={[-6, 2, -4]}
          intensity={3.5}
          color="#00E5FF"
        />

        {/* Subtle Warm Earth/Deep Space Bounce Light */}
        <directionalLight
          position={[0, -5, 3]}
          intensity={0.6}
          color="#1e3a5f"
        />

        <Suspense fallback={null}>
          <StarField count={isMobile ? 800 : 1800} mousePos={mousePos} />
          
          <group position={isMobile ? [0, -0.4, 0] : [1.7, -0.1, 0]} scale={isMobile ? 0.8 : 1.15}>
            <SpacecraftModel mousePos={mousePos} autoRotate={true} interactive={false} />
          </group>
        </Suspense>
      </Canvas>
    </CanvasErrorBoundary>
  );
}
