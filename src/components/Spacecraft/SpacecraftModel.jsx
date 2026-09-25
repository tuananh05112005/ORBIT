import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function SpacecraftModel({
  highlight = null,
  mousePos = { x: 0, y: 0 },
  autoRotate = true,
  interactive = false
}) {
  const groupRef = useRef();
  const solarLeftRef = useRef();
  const solarRightRef = useRef();
  const dishRef = useRef();
  const ionCoreRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Floating idle oscillation
    const t = state.clock.getElapsedTime();
    
    if (autoRotate) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.05;
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.08;
    }

    // Mouse parallax reaction
    if (mousePos && !interactive) {
      groupRef.current.rotation.y += (mousePos.x * 0.4 - groupRef.current.rotation.y) * 0.03;
      groupRef.current.rotation.x += (-mousePos.y * 0.3 - groupRef.current.rotation.x) * 0.03;
    }

    // Pulse ion engine
    if (ionCoreRef.current) {
      const pulse = 0.8 + Math.sin(t * 8) * 0.2;
      ionCoreRef.current.scale.set(1, pulse, 1);
    }
  });

  const isNavHighlight = highlight === '01';
  const isCommsHighlight = highlight === '02';
  const isObsHighlight = highlight === '03';

  return (
    <group ref={groupRef} dispose={null}>
      {/* Central Chassis - Octagonal Avionics Module */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.7, 0.78, 1.8, 8]} />
        <meshStandardMaterial
          color={isNavHighlight ? "#00E5FF" : "#1e2229"}
          metalness={0.88}
          roughness={0.22}
          emissive={isNavHighlight ? "#00E5FF" : "#080c10"}
          emissiveIntensity={isNavHighlight ? 0.6 : 0.1}
        />
      </mesh>

      {/* Titanium Outer Armor Plates */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.74, 0.82, 1.2, 8, 1, true]} />
        <meshStandardMaterial
          color="#0f1318"
          metalness={0.92}
          roughness={0.3}
          wireframe={false}
        />
      </mesh>

      {/* Navigation Sensor Ring (Hotspot 01 - Nav Core) */}
      <group position={[0, 0.6, 0]}>
        <mesh>
          <torusGeometry args={[0.82, 0.035, 16, 48]} />
          <meshStandardMaterial
            color={isNavHighlight ? "#00E5FF" : "#2a3b4c"}
            emissive="#00E5FF"
            emissiveIntensity={isNavHighlight ? 1.2 : 0.4}
            toneMapped={false}
          />
        </mesh>
        {/* Star Tracker Pods */}
        <mesh position={[0.75, 0, 0.2]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.15, 0.25, 0.15]} />
          <meshStandardMaterial color="#445566" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-0.75, 0, 0.2]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.15, 0.25, 0.15]} />
          <meshStandardMaterial color="#445566" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* Observation Module / Aperture Telescope (Hotspot 03 - Observation) */}
      <group position={[0, 1.1, 0]}>
        <mesh>
          <cylinderGeometry args={[0.42, 0.58, 0.6, 24]} />
          <meshStandardMaterial
            color={isObsHighlight ? "#00E5FF" : "#15181e"}
            metalness={0.85}
            roughness={0.25}
            emissive={isObsHighlight ? "#00E5FF" : "#000000"}
            emissiveIntensity={isObsHighlight ? 0.8 : 0}
          />
        </mesh>
        {/* Optical Aperture Lens */}
        <mesh position={[0, 0.31, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.38, 32]} />
          <meshStandardMaterial
            color="#001833"
            emissive="#00E5FF"
            emissiveIntensity={0.5}
            metalness={0.95}
            roughness={0.05}
          />
        </mesh>
        {/* Lens Rim Ring */}
        <mesh position={[0, 0.31, 0]}>
          <torusGeometry args={[0.4, 0.02, 16, 32]} />
          <meshStandardMaterial color="#8899aa" metalness={0.9} />
        </mesh>
      </group>

      {/* High-Gain Communication Dish (Hotspot 02 - Comms Array) */}
      <group ref={dishRef} position={[1.1, 0.2, -0.4]} rotation={[0.4, 0.6, -0.3]}>
        {/* Dish Mount Arm */}
        <mesh position={[-0.35, -0.1, 0.1]} rotation={[0, 0, Math.PI / 3]}>
          <cylinderGeometry args={[0.04, 0.04, 0.8, 12]} />
          <meshStandardMaterial color="#334455" metalness={0.9} roughness={0.3} />
        </mesh>
        {/* Parabolic Reflector */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry args={[0.65, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.35]} />
          <meshStandardMaterial
            color={isCommsHighlight ? "#00E5FF" : "#d0d8e0"}
            metalness={0.95}
            roughness={0.15}
            side={THREE.DoubleSide}
            emissive={isCommsHighlight ? "#00E5FF" : "#051525"}
            emissiveIntensity={isCommsHighlight ? 0.7 : 0.1}
          />
        </mesh>
        {/* Feed Horn */}
        <mesh position={[0, 0, 0.35]}>
          <coneGeometry args={[0.06, 0.2, 12]} />
          <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Left Solar Array Wing */}
      <group ref={solarLeftRef} position={[-1.75, 0, 0]}>
        {/* Truss Arm */}
        <mesh position={[0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 1.4, 12]} />
          <meshStandardMaterial color="#2c3440" metalness={0.9} />
        </mesh>
        {/* Main Solar Panel */}
        <mesh position={[-0.2, 0, 0]}>
          <boxGeometry args={[1.5, 0.03, 0.9]} />
          <meshStandardMaterial
            color="#08182b"
            metalness={0.8}
            roughness={0.2}
            emissive="#003366"
            emissiveIntensity={0.2}
          />
        </mesh>
        {/* Grid Cells on Solar Panel */}
        <mesh position={[-0.2, 0.02, 0]}>
          <planeGeometry args={[1.44, 0.84, 8, 4]} />
          <meshStandardMaterial
            color="#001830"
            metalness={0.9}
            roughness={0.1}
            wireframe={true}
          />
        </mesh>
      </group>

      {/* Right Solar Array Wing */}
      <group ref={solarRightRef} position={[1.75, 0, 0]}>
        {/* Truss Arm */}
        <mesh position={[-0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 1.4, 12]} />
          <meshStandardMaterial color="#2c3440" metalness={0.9} />
        </mesh>
        {/* Main Solar Panel */}
        <mesh position={[0.2, 0, 0]}>
          <boxGeometry args={[1.5, 0.03, 0.9]} />
          <meshStandardMaterial
            color="#08182b"
            metalness={0.8}
            roughness={0.2}
            emissive="#003366"
            emissiveIntensity={0.2}
          />
        </mesh>
        {/* Grid Cells on Solar Panel */}
        <mesh position={[0.2, 0.02, 0]}>
          <planeGeometry args={[1.44, 0.84, 8, 4]} />
          <meshStandardMaterial
            color="#001830"
            metalness={0.9}
            roughness={0.1}
            wireframe={true}
          />
        </mesh>
      </group>

      {/* Ion Propulsion Thruster at Aft Base */}
      <group position={[0, -1.05, 0]}>
        <mesh>
          <cylinderGeometry args={[0.4, 0.25, 0.35, 24]} />
          <meshStandardMaterial color="#1a1e24" metalness={0.95} roughness={0.2} />
        </mesh>
        {/* Ion Glow Core */}
        <mesh ref={ionCoreRef} position={[0, -0.22, 0]}>
          <coneGeometry args={[0.18, 0.45, 16]} />
          <meshBasicMaterial color="#00E5FF" transparent={true} opacity={0.7} />
        </mesh>
      </group>
    </group>
  );
}
