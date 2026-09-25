'use client';

import { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface Hero3DSceneProps {
  onLoaded?: () => void;
}

// ----- Inverter Box -----
function InverterMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  return (
    <group position={[0.3, -0.3, 0]} rotation={[0, -0.3, 0]}>
      {/* Main body */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.55, 1.0]} />
        <meshPhysicalMaterial
          color="#1a2535"
          metalness={0.85}
          roughness={0.18}
          reflectivity={0.9}
          clearcoat={0.3}
        />
      </mesh>
      {/* Front face panel */}
      <mesh position={[0, 0, 0.505]}>
        <boxGeometry args={[1.58, 0.53, 0.01]} />
        <meshPhysicalMaterial color="#0d1928" metalness={0.7} roughness={0.25} />
      </mesh>
      {/* Blue LED strip */}
      <mesh position={[0, 0.14, 0.512]}>
        <boxGeometry args={[1.1, 0.025, 0.005]} />
        <meshStandardMaterial color="#3480ef" emissive="#1d6bdb" emissiveIntensity={3} />
      </mesh>
      {/* Power button */}
      <mesh position={[0.6, 0, 0.512]}>
        <cylinderGeometry args={[0.048, 0.048, 0.01, 16]} />
        <meshStandardMaterial color="#3480ef" emissive="#3480ef" emissiveIntensity={1.5} />
      </mesh>
      {/* Vent grilles */}
      {[-0.3, -0.15, 0, 0.15, 0.3].map((x, i) => (
        <mesh key={i} position={[x, -0.05, 0.512]}>
          <boxGeometry args={[0.08, 0.3, 0.005]} />
          <meshPhysicalMaterial color="#0a1220" metalness={0.6} roughness={0.4} />
        </mesh>
      ))}
      {/* Side vent panel */}
      <mesh position={[0.81, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.98, 0.53, 0.01]} />
        <meshPhysicalMaterial color="#131e2d" metalness={0.7} roughness={0.35} />
      </mesh>
    </group>
  );
}

// ----- Battery -----
function BatteryMesh() {
  return (
    <group position={[-0.6, 0.1, -0.3]} rotation={[0, 0.4, 0]}>
      {/* Main casing */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.1, 0.85, 0.65]} />
        <meshPhysicalMaterial
          color="#e8ecf0"
          metalness={0.1}
          roughness={0.5}
          clearcoat={0.2}
        />
      </mesh>
      {/* Dark top section */}
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[1.08, 0.08, 0.63]} />
        <meshPhysicalMaterial color="#1d3060" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* Terminals */}
      {[-0.3, 0.3].map((x, i) => (
        <group key={i} position={[x, 0.52, 0]}>
          <mesh>
            <cylinderGeometry args={[0.055, 0.055, 0.12, 12]} />
            <meshPhysicalMaterial color="#c0c8d8" metalness={0.9} roughness={0.15} />
          </mesh>
          {/* Terminal cap */}
          <mesh position={[0, 0.07, 0]}>
            <cylinderGeometry args={[0.065, 0.065, 0.04, 12]} />
            <meshStandardMaterial color={i === 0 ? '#cc2222' : '#222222'} />
          </mesh>
        </group>
      ))}
      {/* Rib details on side */}
      {[-0.35, 0, 0.35].map((x, i) => (
        <mesh key={i} position={[x, 0, 0.328]}>
          <boxGeometry args={[0.08, 0.82, 0.01]} />
          <meshPhysicalMaterial color="#d0d8e0" roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

// ----- Ground reflection plane -----
function GroundPlane() {
  return (
    <mesh position={[0, -0.85, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[14, 14]} />
      <meshPhysicalMaterial
        color="#060e1c"
        metalness={0.4}
        roughness={0.8}
        opacity={0.8}
        transparent
      />
    </mesh>
  );
}

// ----- Energy particle field -----
function EnergyParticles() {
  const points = useRef<THREE.Points>(null);
  const count = 120;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 8;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
  }

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.getElapsedTime() * 0.015;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#3480ef"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}

// ----- Camera animation -----
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Slow cinematic drift
    camera.position.x += (mouse.current.x * 0.4 - camera.position.x) * 0.03;
    camera.position.y += (mouse.current.y * 0.2 + Math.sin(t * 0.15) * 0.08 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ----- Scene loader callback -----
function SceneReadyTracker({ onLoaded }: { onLoaded?: () => void }) {
  useEffect(() => {
    // Signal parent after a brief render settle
    const t = setTimeout(() => onLoaded?.(), 600);
    return () => clearTimeout(t);
  }, [onLoaded]);
  return null;
}

export default function Hero3DScene({ onLoaded }: Hero3DSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 4.5], fov: 45 }}
      dpr={[1, 1.5]}          // Cap pixel ratio for performance
      shadows
      gl={{
        antialias: true,
        powerPreference: 'high-performance',
        alpha: true,
      }}
      style={{ background: 'transparent' }}
    >
      <SceneReadyTracker onLoaded={onLoaded} />
      <CameraRig />

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[-4, 6, 4]}
        intensity={2.5}
        color="#b8d4ff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[3, 2, 3]} intensity={1.5} color="#1d6bdb" />
      <pointLight position={[-3, -1, 2]} intensity={0.6} color="#3480ef" />
      <pointLight position={[0, -0.5, 2.5]} intensity={0.8} color="#ffffff" />

      <Suspense fallback={null}>
        <Float
          speed={0.8}
          rotationIntensity={0.08}
          floatIntensity={0.2}
          floatingRange={[-0.06, 0.06]}
        >
          <InverterMesh />
          <BatteryMesh />
        </Float>

        <EnergyParticles />
        <GroundPlane />

        {/* HDR environment for reflections */}
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
