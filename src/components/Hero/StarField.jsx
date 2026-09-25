import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function StarField({ count = 1800, mousePos = { x: 0, y: 0 } }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorWhite = new THREE.Color('#ffffff');
    const colorCyan = new THREE.Color('#00E5FF');
    const colorSoftBlue = new THREE.Color('#94a3b8');

    for (let i = 0; i < count; i++) {
      // Spherical distribution
      const r = 25 + Math.random() * 65;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Star color variation (mostly white/soft blue, rare subtle cyan)
      const rand = Math.random();
      const chosenColor = rand > 0.85 ? colorCyan : (rand > 0.4 ? colorSoftBlue : colorWhite);
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    // Slow, stately rotation
    pointsRef.current.rotation.y += delta * 0.015;
    pointsRef.current.rotation.x += delta * 0.005;

    if (mousePos) {
      pointsRef.current.position.x += (mousePos.x * 1.5 - pointsRef.current.position.x) * 0.02;
      pointsRef.current.position.y += (-mousePos.y * 1.5 - pointsRef.current.position.y) * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.16}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
