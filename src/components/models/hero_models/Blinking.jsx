import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

const MoonLight = ({
  position = [0, 3, 0],
  speed = 0.5,
  color = "#f5f3e7",
  rotationSpeed = 0.1,
}) => {
  const lightRef = useRef();
  const meshRef = useRef();

  const moonTexture = useLoader(TextureLoader, "images/moon.jpg");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const intensity = 1.2 + Math.sin(t * speed) * 0.3;
    const scale = 1 + Math.sin(t * speed) * 0.02;

    if (lightRef.current) lightRef.current.intensity = intensity;
    if (meshRef.current) {
      meshRef.current.scale.set(scale, scale, scale);
      meshRef.current.rotation.y += rotationSpeed * 0.01;
    }
  });

  return (
    <group position={position}>
      {/* A small local glow (not the sunlight) */}
      <pointLight
        ref={lightRef}
        color={color}
        intensity={0.5}
        distance={5}
        position={[0.5, 0.2, 1]}
      />

      {/* Moon sphere that reacts to directional light */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[0.35, 64, 64]} />
        <meshStandardMaterial map={moonTexture} roughness={1} metalness={0} />
      </mesh>
    </group>
  );
};

export default MoonLight;
