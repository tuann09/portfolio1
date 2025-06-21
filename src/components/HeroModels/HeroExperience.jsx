import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import { useInView } from "react-intersection-observer";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import ParticlesCanvas from "./ParticlesCanvas"; // mới thêm

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="relative w-full h-[80vh]">
      {/* Hiệu ứng mưa tuyết luôn chạy, trên cùng */}
      <ParticlesCanvas />

      {/* Canvas chính chỉ render khi xuất hiện trên màn hình */}
      {inView && (
        <Canvas
          frameloop="demand"
          camera={{ position: [0, 0, 14], fov: 45 }}
        >
          <ambientLight intensity={0.2} color="#1a1a40" />
          <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
          />

          <Suspense fallback={null}>
            <HeroLights />
            <group
              scale={isMobile ? 0.7 : 1}
              position={[0, -3.5, 0]}
              rotation={[0, -Math.PI / 4, 0]}
            >
              <Room />
            </group>
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default HeroExperience;
