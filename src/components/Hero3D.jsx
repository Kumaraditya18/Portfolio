import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function AstroHunterModel() {
  const modelRef = useRef();
  const { scene } = useGLTF("/Astro hunter 1_0.glb");

  // Rotate model only on Y-axis based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (modelRef.current) {
        modelRef.current.rotation.y = scrollY * 0.009; // adjust speed
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2}
      position={[0, -1.5, 0]}
    />
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-[400px] touch-auto">
      <Canvas
        style={{
          width: "100%",
          height: "100%",
          touchAction: "pan-y", // ✅ Allows scrolling on mobile
        }}
        camera={{ position: [0, 1.5, 5], fov: 50 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <AstroHunterModel />
        <Environment preset="city" />
        {/* Disable pan to avoid scroll conflict */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
