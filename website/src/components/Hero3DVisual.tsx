import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Cpu, Check, Activity } from 'lucide-react';
import * as THREE from 'three';

function Laptop3D() {
  const laptopRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(t * 0.5) * 0.15;
      laptopRef.current.rotation.x = Math.cos(t * 0.3) * 0.05;
    }
  });

  return (
    <group ref={laptopRef} position={[0, -0.6, 0]}>
      {/* Base Laptop */}
      <RoundedBox args={[3.2, 0.15, 2.2]} radius={0.05} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0b2347" metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Keyboard area glow */}
      <mesh position={[0, 0.08, 0.2]}>
        <planeGeometry args={[2.8, 1.4]} />
        <meshBasicMaterial color="#1687FF" opacity={0.3} transparent />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.08, 0.8]}>
        <planeGeometry args={[0.8, 0.5]} />
        <meshBasicMaterial color="#36D9FF" opacity={0.4} transparent />
      </mesh>

      {/* Screen Hinge & Display */}
      <group position={[0, 0.1, -1]} rotation={[-0.2, 0, 0]}>
        <RoundedBox args={[3.2, 2.1, 0.1]} radius={0.05} smoothness={4} position={[0, 1.05, 0]}>
          <meshStandardMaterial color="#061329" metalness={0.9} roughness={0.1} />
        </RoundedBox>

        {/* Screen Display Face */}
        <mesh position={[0, 1.05, 0.06]}>
          <planeGeometry args={[3.0, 1.9]} />
          <meshBasicMaterial color="#041226" />
        </mesh>

        {/* Screen Code Glowing Matrix Lines */}
        <mesh position={[0, 1.05, 0.07]}>
          <planeGeometry args={[2.8, 1.7]} />
          <meshStandardMaterial color="#36D9FF" emissive="#1687FF" emissiveIntensity={0.6} wireframe />
        </mesh>
      </group>

      {/* Database Cylinder Visual */}
      <group position={[2.2, 0.6, -0.5]}>
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.3, 16]} />
          <meshStandardMaterial color="#36D9FF" metalness={0.7} roughness={0.3} emissive="#1687FF" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.3, 16]} />
          <meshStandardMaterial color="#1687FF" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.3, 16]} />
          <meshStandardMaterial color="#36D9FF" metalness={0.7} roughness={0.3} emissive="#1687FF" emissiveIntensity={0.3} />
        </mesh>
      </group>
    </group>
  );
}

export const Hero3DVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[540px] lg:h-[620px] flex items-center justify-center my-4 lg:my-0">
      {/* Ambient background glow ring */}
      <div className="absolute w-60 h-60 sm:w-96 sm:h-96 rounded-full bg-cyan-500/15 blur-[80px] sm:blur-[90px] animate-pulse-glow" />

      {/* 3D Canvas Workstation */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 1, 6], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 8, 5]} intensity={1.5} color="#36D9FF" />
          <pointLight position={[-5, -2, -2]} intensity={1} color="#1687FF" />
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <Laptop3D />
          </Float>
        </Canvas>
      </div>

      {/* Floating Glassmorphic HUD Overlays & QA Cards */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-2 sm:p-4">
        <div className="flex flex-row justify-between items-start w-full gap-2">
          {/* Top Left: Tech Logos Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pointer-events-auto glass-card p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-cyan-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.4)] animate-float max-w-[50%]"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-cyan-400 block font-bold">
                  TESTING STACK
                </span>
                <div className="flex flex-wrap items-center gap-1 mt-1">
                  <span className="px-1.5 py-0.5 rounded bg-blue-900/60 border border-blue-400/30 text-[10px] sm:text-[11px] font-mono text-cyan-200">
                    Playwright
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-blue-900/60 border border-blue-400/30 text-[10px] sm:text-[11px] font-mono text-cyan-200 hidden xs:inline-block">
                    Selenium
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top Right: Tests Passed Indicator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pointer-events-auto glass-card p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-cyan-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-xl font-extrabold font-mono text-white">95%</span>
                  <span className="text-[9px] sm:text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-1 py-0.5 rounded font-bold">
                    PASSED
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block">Automation</span>
              </div>
            </div>

            {/* Mini animated pass rate chart bars */}
            <div className="hidden sm:flex items-end gap-1 mt-3 h-6 pt-1 border-t border-cyan-500/20">
              {[40, 75, 60, 90, 85, 95, 100].map((height, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-gradient-to-t from-cyan-500 to-emerald-400 rounded-t-sm"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Center Right: QA Checklist Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pointer-events-auto self-end hidden sm:block sm:mr-4 glass-card p-3.5 rounded-xl border border-cyan-400/30 text-xs font-mono space-y-1.5 shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center gap-2 text-cyan-300 font-bold border-b border-cyan-500/20 pb-1">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>QA GUARANTEE</span>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-slate-200">
            <div className="flex items-center gap-1.5 text-emerald-300">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Automation</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Validation</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Quality</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Delivery</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Floating Card: QA Pipeline Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pointer-events-auto self-center w-full max-w-md glass-card p-2 sm:p-3 rounded-xl border border-cyan-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-cyan-300 font-bold mb-1.5">
            <span className="flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-cyan-400" /> QA Pipeline Workflow
            </span>
            <span className="text-emerald-400 font-normal text-[9px] sm:text-[10px]">Active Engine</span>
          </div>

          <div className="flex items-center justify-between text-[8.5px] sm:text-[10px] font-mono text-slate-300 gap-0.5">
            <span className="px-1 sm:px-2 py-0.5 sm:py-1 rounded bg-blue-950/80 border border-blue-500/30 text-cyan-200">
              Req
            </span>
            <span className="text-cyan-400 font-bold">→</span>
            <span className="px-1 sm:px-2 py-0.5 sm:py-1 rounded bg-blue-950/80 border border-blue-500/30 text-cyan-200">
              Test
            </span>
            <span className="text-cyan-400 font-bold">→</span>
            <span className="px-1 sm:px-2 py-0.5 sm:py-1 rounded bg-blue-950/80 border border-blue-500/30 text-cyan-200">
              Auto
            </span>
            <span className="text-cyan-400 font-bold">→</span>
            <span className="px-1 sm:px-2 py-0.5 sm:py-1 rounded bg-blue-950/80 border border-blue-500/30 text-cyan-200">
              Valid
            </span>
            <span className="text-cyan-400 font-bold">→</span>
            <span className="px-1 sm:px-2 py-0.5 sm:py-1 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold">
              Release
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
