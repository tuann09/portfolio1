import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";

const ParticlesCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      gl={{ alpha: true }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // không ảnh hưởng thao tác người dùng
        zIndex: 10,
      }}
    >
      <Particles count={100} />
    </Canvas>
  );
};

export default ParticlesCanvas;
