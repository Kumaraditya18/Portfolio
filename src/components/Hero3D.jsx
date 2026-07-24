import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function ParticleField({ color, size, count, speed, radiusRange, rotateDir = 1 }) {
  const pointsRef = useRef();
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const [minRadius, maxRadius] = radiusRange;
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * Math.random() - 1.0);
      const r = minRadius + Math.random() * (maxRadius - minRadius);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [count, radiusRange]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      // Rotation based on time + mouse coordinates
      const mouseX = state.pointer.x * 0.15;
      const mouseY = state.pointer.y * 0.15;
      pointsRef.current.rotation.y = time * speed * 0.1 * rotateDir + mouseX;
      pointsRef.current.rotation.x = time * speed * 0.05 * rotateDir + mouseY;
      
      // Breathing scale effect
      const scale = 1 + Math.sin(time * 0.4) * 0.03;
      pointsRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        sizeAttenuation={true}
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={2} // Additive blending
      />
    </points>
  );
}

function TechCore() {
  const coreRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (coreRef.current) {
      const mouseX = state.pointer.x * 0.4;
      const mouseY = state.pointer.y * 0.4;
      coreRef.current.rotation.y = -time * 0.12 + mouseX;
      coreRef.current.rotation.x = time * 0.06 + mouseY;
      
      const pulse = 1 + Math.sin(time * 1.5) * 0.03;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group>
      {/* Outer Wireframe Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.95, 1]} />
        <meshBasicMaterial
          color="#a771ee"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
      
      {/* Inner Dodecahedron Core */}
      <mesh>
        <dodecahedronGeometry args={[0.35, 0]} />
        <meshBasicMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-[320px] md:h-[420px] relative flex items-center justify-center select-none">
      {/* Glow background blur behind canvas */}
      <div className="absolute w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-full bg-purple-500/5 blur-[70px] pointer-events-none"></div>
      
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[1, 1, 1]} intensity={0.6} />
        
        <TechCore />
        
        {/* Violet particle sphere */}
        <ParticleField 
          color="#a771ee" 
          size={0.022} 
          count={1000} 
          speed={0.25} 
          radiusRange={[0.9, 1.7]} 
          rotateDir={1}
        />
        
        {/* Cyan particle sphere */}
        <ParticleField 
          color="#06b6d4" 
          size={0.018} 
          count={700} 
          speed={0.18} 
          radiusRange={[1.7, 2.5]} 
          rotateDir={-1}
        />
      </Canvas>
    </div>
  );
}

