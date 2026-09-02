import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, MathUtils } from "three";

import { ProductDevice, type ProductDeviceKind } from "./ProductDevice";

const devices: Array<{ kind: ProductDeviceKind; accent: string }> = [
  { kind: "desktop", accent: "#7C5A1A" },
  { kind: "mobile", accent: "#9f7a32" },
  { kind: "game-dark", accent: "#7C5A1A" },
  { kind: "space", accent: "#c2a15d" },
];

export function ProductUniverse({ activeIndex = 0, progress = 0 }: { activeIndex?: number; progress?: number }) {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    const targetX = -activeIndex * 4.25;
    group.current.position.x = MathUtils.damp(group.current.position.x, targetX, 4, delta);
    group.current.position.y = MathUtils.damp(group.current.position.y, progress * 0.2, 3, delta);
    group.current.rotation.y = MathUtils.damp(group.current.rotation.y, -progress * 0.08, 3, delta);
  });

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[-4, 5, 4]} intensity={1.4} color="#ffffff" />
      <pointLight position={[2, 2, 3]} intensity={28} distance={10} color="#7C5A1A" />
      <group ref={group} position={[0, 0, 0]}>
        {devices.map((device, index) => (
          <group key={device.kind} position={[index * 4.25, 0, 0]} scale={index === activeIndex ? 1 : 0.84}>
            <ProductDevice kind={device.kind} accent={device.accent} active={index === activeIndex} />
          </group>
        ))}
      </group>
    </>
  );
}
