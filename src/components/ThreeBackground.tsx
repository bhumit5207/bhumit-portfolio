import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function ParticleGrid() {
  const count = 300;
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const light = useRef<THREE.PointLight>(null!);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 35;
      const y = (Math.random() - 0.5) * 35;
      const z = (Math.random() - 0.5) * 20 - 5;
      const speed = Math.random() * 0.4 + 0.1;
      const scale = Math.random() * 0.08 + 0.02;
      temp.push({ x, y, z, speed, scale, curY: y });
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    particles.forEach((particle, i) => {
      particle.curY += delta * particle.speed;
      if (particle.curY > 15) particle.curY = -15;

      dummy.position.set(particle.x, particle.curY, particle.z);
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();

      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;

    // Follow mouse gently
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 1.5, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 1.5, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <pointLight ref={light} distance={25} intensity={2} color="#36D9FF" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#1687FF" transparent opacity={0.6} />
      </instancedMesh>
    </>
  );
}

function FloatingTechObjects() {
  return (
    <group>
      {/* 3D Cyan Wireframe Cube */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-8, 4, -4]}>
          <boxGeometry args={[1.8, 1.8, 1.8]} />
          <meshStandardMaterial color="#36D9FF" wireframe opacity={0.4} transparent />
        </mesh>
      </Float>

      {/* 3D Electric Blue Octahedron */}
      <Float speed={1.8} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[9, -5, -6]}>
          <octahedronGeometry args={[1.5]} />
          <meshStandardMaterial color="#1687FF" wireframe opacity={0.35} transparent />
        </mesh>
      </Float>

      {/* 3D Cylinder Database Node */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.8}>
        <mesh position={[10, 6, -5]}>
          <cylinderGeometry args={[1, 1, 2, 16]} />
          <meshStandardMaterial color="#36D9FF" wireframe opacity={0.25} transparent />
        </mesh>
      </Float>

      {/* 3D Floating Torus Rings */}
      <Float speed={2.5} rotationIntensity={3} floatIntensity={2}>
        <mesh position={[-10, -6, -3]}>
          <torusGeometry args={[1.2, 0.2, 12, 24]} />
          <meshStandardMaterial color="#7000FF" wireframe opacity={0.3} transparent />
        </mesh>
      </Float>
    </group>
  );
}

export const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient Ambient Overlays */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]" />

      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#1687FF" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#36D9FF" intensity={0.8} />

        <ParticleGrid />
        <FloatingTechObjects />
      </Canvas>
    </div>
  );
};
