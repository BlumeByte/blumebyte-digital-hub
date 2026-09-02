import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

export function DigitalCore({ compact = false }: { compact?: boolean }) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * (compact ? 0.08 : 0.12);
    group.current.rotation.x += delta * 0.025;
    const pointerX = state.pointer.x * 0.16;
    const pointerY = state.pointer.y * 0.1;
    group.current.rotation.y += (pointerX - group.current.rotation.y * 0.05) * delta;
    group.current.rotation.x += (-pointerY - group.current.rotation.x * 0.03) * delta;
  });

  const scale = compact ? 0.72 : 1;

  return (
    <group ref={group} scale={scale}>
      <mesh rotation={[0.35, 0.45, 0.15]}>
        <icosahedronGeometry args={[1.25, 4]} />
        <meshStandardMaterial color="#070707" metalness={0.9} roughness={0.26} />
      </mesh>
      <mesh rotation={[0.75, -0.18, 0.42]}>
        <torusGeometry args={[1.72, 0.025, 12, 160]} />
        <meshStandardMaterial color="#7C5A1A" metalness={0.92} roughness={0.22} emissive="#3a280d" emissiveIntensity={0.35} />
      </mesh>
      <mesh rotation={[-0.2, 0.4, -0.65]}>
        <torusGeometry args={[1.46, 0.012, 10, 140]} />
        <meshStandardMaterial color="#d2b06a" metalness={0.85} roughness={0.28} />
      </mesh>
    </group>
  );
}
