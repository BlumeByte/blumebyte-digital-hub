import { Stars } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";

import { DigitalCore } from "./DigitalCore";

export function HeroScene({ progress = 0 }: { progress?: number }) {
  const { camera } = useThree();

  useFrame((state, delta) => {
    const targetX = MathUtils.clamp(state.pointer.x * 0.2, -0.2, 0.2);
    const targetY = MathUtils.clamp(state.pointer.y * 0.12, -0.12, 0.12);
    camera.position.x = MathUtils.damp(camera.position.x, targetX, 3, delta);
    camera.position.y = MathUtils.damp(camera.position.y, targetY - progress * 0.18, 3, delta);
    camera.position.z = MathUtils.damp(camera.position.z, 5 - progress * 0.5, 3, delta);
    camera.lookAt(0.45, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.38} />
      <directionalLight position={[-3, 4, 5]} intensity={1.35} color="#ffffff" />
      <pointLight position={[3, 1.2, 3]} intensity={36} distance={8} color="#7C5A1A" />
      <group position={[0.75, 0, 0]}>
        <DigitalCore />
      </group>
      <Stars radius={12} depth={18} count={110} factor={1.7} saturation={0} fade speed={0.18} />
    </>
  );
}
