import { Stars } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";

import { DigitalCore } from "./DigitalCore";

export function HeroScene({ progress = 0 }: { progress?: number }) {
  const { camera, size } = useThree();
  const compact = size.width < 640;

  useFrame((state, delta) => {
    const targetX = MathUtils.clamp(state.pointer.x * (compact ? 0.08 : 0.2), -0.2, 0.2);
    const targetY = MathUtils.clamp(state.pointer.y * (compact ? 0.05 : 0.12), -0.12, 0.12);
    camera.position.x = MathUtils.damp(camera.position.x, targetX, 3, delta);
    camera.position.y = MathUtils.damp(camera.position.y, targetY - progress * (compact ? 0.08 : 0.18), 3, delta);
    camera.position.z = MathUtils.damp(camera.position.z, (compact ? 5.7 : 5) - progress * (compact ? 0.2 : 0.5), 3, delta);
    camera.lookAt(compact ? 0.1 : 0.45, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.38} />
      <directionalLight position={[-3, 4, 5]} intensity={1.35} color="#ffffff" />
      <pointLight position={[3, 1.2, 3]} intensity={compact ? 24 : 36} distance={8} color="#7C5A1A" />
      <group position={[compact ? 0.35 : 0.75, compact ? 0.25 : 0, 0]} scale={compact ? 0.78 : 1}>
        <DigitalCore />
      </group>
      <Stars radius={12} depth={18} count={compact ? 42 : 110} factor={compact ? 1.25 : 1.7} saturation={0} fade speed={0.18} />
    </>
  );
}
