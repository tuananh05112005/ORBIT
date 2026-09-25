import React, { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import SpacecraftModel from './SpacecraftModel';

export default function SpacecraftCanvas({
  activeHotspot,
  controlsRef
}) {
  const orbitRef = useRef();

  // Expose reset
  if (controlsRef) {
    controlsRef.current = {
      reset: () => {
        if (orbitRef.current) {
          orbitRef.current.reset();
        }
      },
      zoomIn: () => {
        if (orbitRef.current) {
          orbitRef.current.dollyIn(1.2);
          orbitRef.current.update();
        }
      },
      zoomOut: () => {
        if (orbitRef.current) {
          orbitRef.current.dollyOut(1.2);
          orbitRef.current.update();
        }
      }
    };
  }

  return (
    <Canvas
      camera={{ position: [2.5, 1.2, 3.8], fov: 40 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.4} color="#051525" />
      
      {/* Key Sun Light */}
      <directionalLight position={[5, 8, 4]} intensity={2.5} color="#ffffff" />
      
      {/* Accent Rim Light */}
      <directionalLight position={[-6, -2, -4]} intensity={3.2} color="#00E5FF" />
      
      {/* Deep Space Fill */}
      <pointLight position={[0, 4, -2]} intensity={0.8} color="#0070F3" />

      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
          <SpacecraftModel
            highlight={activeHotspot}
            autoRotate={false}
            interactive={true}
          />
        </Float>
      </Suspense>

      <OrbitControls
        ref={orbitRef}
        enablePan={false}
        enableZoom={true}
        minDistance={2.4}
        maxDistance={6.5}
        enableDamping={true}
        dampingFactor={0.06}
        autoRotate={false}
        rotateSpeed={0.8}
      />
    </Canvas>
  );
}
