import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";

import { Japanese } from "./Japanese_house";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import BlinkingLight from "./Blinking"; // your blinking light
import MoonLight from "./Blinking"; // rotating moon with glow

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas shadows camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* Lighting */}
      <ambientLight color={"white"} intensity={0.5} />
      <ambientLight intensity={1} color="#a40" />
      <directionalLight
        color="white"
        intensity={2}
        position={[5, 5, 7]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Camera Controls with auto-rotate */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        autoRotate
        autoRotateSpeed={0.3}
        minDistance={5}
        maxDistance={20}
        minPolarAngle={Math.PI / 6} // prevents looking too high
        maxPolarAngle={Math.PI / 2.2} // prevents looking under the floor
      />

      <Suspense fallback={null}>
        {/* Scene lights */}
        {/* <HeroLights /> */}
        <Particles count={200} />
        {/* <BlinkingLight color="#00ffff" position={[2, 3, 4]} speed={5} /> */}
        <MoonLight position={[-3, 3, -1]} rotationSpeed={0.5} />

        {/* Room / Main model */}
        <group
          scale={isMobile ? 0.6 : 0.65}
          position={isMobile ? [0, -3.5, 0] : [0, -2.5, 0]}
          rotation={[0, 0.6, 0]}
        >
          <Japanese castShadow receiveShadow />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
