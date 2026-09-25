import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function GlobeModel() {
  const earthRef = useRef();
  const atmosphereRef = useRef();
  const orbitGroupRef = useRef();
  const satelliteRef = useRef();

  // Create procedural Earth dot matrix or continent texture on canvas
  const [earthTexture, nightTexture] = useMemo(() => {
    // Generate Earth canvas with dark oceans and subtle glowing continent continents
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Deep space ocean
    ctx.fillStyle = '#050a14';
    ctx.fillRect(0, 0, 1024, 512);

    // Procedural continents noise
    ctx.fillStyle = '#102035';
    for (let x = 0; x < 1024; x += 6) {
      for (let y = 0; y < 512; y += 6) {
        // Continent silhouettes
        const nx = x / 1024;
        const ny = y / 512;
        const distCenter = Math.sin(nx * Math.PI * 2) * Math.cos(ny * Math.PI);
        const noise = Math.sin(nx * 14) * Math.cos(ny * 12) + Math.sin(nx * 28 + ny * 20) * 0.5;
        if (distCenter + noise * 0.4 > 0.15) {
          ctx.beginPath();
          ctx.arc(x, y, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;

    // Night city lights texture
    const nightCanvas = document.createElement('canvas');
    nightCanvas.width = 512;
    nightCanvas.height = 256;
    const nCtx = nightCanvas.getContext('2d');
    nCtx.fillStyle = '#000000';
    nCtx.fillRect(0, 0, 512, 256);
    nCtx.fillStyle = '#00E5FF';
    for (let i = 0; i < 400; i++) {
      const rx = Math.random() * 512;
      const ry = Math.random() * 256;
      nCtx.fillRect(rx, ry, 1.5, 1.5);
    }
    const nightTex = new THREE.CanvasTexture(nightCanvas);

    return [tex, nightTex];
  }, []);

  useFrame((state, delta) => {
    // Earth rotation
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.08;
    }
    // Satellite orbit revolution
    if (orbitGroupRef.current) {
      orbitGroupRef.current.rotation.z += delta * 0.4;
    }
    // Satellite spin
    if (satelliteRef.current) {
      satelliteRef.current.rotation.y += delta * 1.5;
    }
  });

  return (
    <group>
      {/* Central Earth Globe */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.7}
          metalness={0.15}
          emissiveMap={nightTexture}
          emissive="#00E5FF"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Atmospheric Rayleigh Glow Shell */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1.58, 48, 48]} />
        <meshStandardMaterial
          color="#00E5FF"
          transparent={true}
          opacity={0.18}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbital Path Ring */}
      <mesh rotation={[Math.PI / 3, 0.4, 0]}>
        <ringGeometry args={[2.18, 2.2, 96]} />
        <meshBasicMaterial
          color="#00E5FF"
          side={THREE.DoubleSide}
          transparent={true}
          opacity={0.35}
        />
      </mesh>

      {/* Orbiting Satellite Container */}
      <group ref={orbitGroupRef} rotation={[Math.PI / 3, 0.4, 0]}>
        <group position={[2.19, 0, 0]}>
          <mesh ref={satelliteRef}>
            <boxGeometry args={[0.08, 0.08, 0.12]} />
            <meshStandardMaterial color="#ffffff" metalness={0.9} emissive="#00E5FF" emissiveIntensity={0.5} />
          </mesh>
          {/* Satellite mini solar panels */}
          <mesh position={[0.12, 0, 0]}>
            <boxGeometry args={[0.14, 0.01, 0.07]} />
            <meshStandardMaterial color="#003366" />
          </mesh>
          <mesh position={[-0.12, 0, 0]}>
            <boxGeometry args={[0.14, 0.01, 0.07]} />
            <meshStandardMaterial color="#003366" />
          </mesh>
          {/* Sensor beam projection towards Earth center */}
          <mesh position={[-0.35, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.01, 0.18, 0.7, 16, 1, true]} />
            <meshBasicMaterial color="#00E5FF" transparent={true} opacity={0.15} side={THREE.DoubleSide} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

export default function EarthGlobe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.4], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.4} color="#001830" />
      <directionalLight position={[6, 3, 4]} intensity={2.8} color="#ffffff" />
      <directionalLight position={[-6, -2, -3]} intensity={1.5} color="#00E5FF" />

      <GlobeModel />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.6}
        autoRotate={false}
      />
    </Canvas>
  );
}
