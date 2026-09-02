import { Float } from "@react-three/drei";

export type ProductDeviceKind = "desktop" | "mobile" | "game-dark" | "space";

export function ProductDevice({
  kind,
  accent = "#7C5A1A",
  active = true,
}: {
  kind: ProductDeviceKind;
  accent?: string;
  active?: boolean;
}) {
  const opacity = active ? 1 : 0.32;

  if (kind === "mobile") {
    return (
      <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.12}>
        <group rotation={[0.04, -0.24, 0.04]}>
          <mesh>
            <boxGeometry args={[1.45, 2.8, 0.13]} />
            <meshStandardMaterial color="#090909" metalness={0.7} roughness={0.28} transparent opacity={opacity} />
          </mesh>
          <mesh position={[0, 0, 0.075]}>
            <planeGeometry args={[1.22, 2.48]} />
            <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.18} transparent opacity={opacity * 0.85} />
          </mesh>
        </group>
      </Float>
    );
  }

  if (kind === "game-dark") {
    return (
      <Float speed={0.8} rotationIntensity={0.14} floatIntensity={0.2}>
        <group>
          <mesh rotation={[0.4, 0.55, 0.1]}>
            <dodecahedronGeometry args={[1.25, 1]} />
            <meshStandardMaterial color="#050505" metalness={0.88} roughness={0.32} transparent opacity={opacity} />
          </mesh>
          <mesh rotation={[-0.35, 0.1, 0.5]}>
            <torusGeometry args={[1.65, 0.02, 8, 120]} />
            <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.28} transparent opacity={opacity} />
          </mesh>
        </group>
      </Float>
    );
  }

  if (kind === "space") {
    return (
      <Float speed={0.9} rotationIntensity={0.12} floatIntensity={0.18}>
        <group>
          <mesh>
            <sphereGeometry args={[0.78, 48, 48]} />
            <meshStandardMaterial color="#111111" metalness={0.85} roughness={0.24} transparent opacity={opacity} />
          </mesh>
          <mesh rotation={[1.1, 0.1, 0.4]}>
            <torusGeometry args={[1.55, 0.035, 12, 150]} />
            <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.22} transparent opacity={opacity} />
          </mesh>
          <mesh position={[1.7, 0.2, 0.15]}>
            <sphereGeometry args={[0.13, 20, 20]} />
            <meshStandardMaterial color="#d8d8d8" transparent opacity={opacity} />
          </mesh>
        </group>
      </Float>
    );
  }

  return (
    <Float speed={0.75} rotationIntensity={0.07} floatIntensity={0.12}>
      <group rotation={[-0.08, -0.18, 0.02]}>
        <mesh>
          <boxGeometry args={[3.15, 1.95, 0.12]} />
          <meshStandardMaterial color="#080808" metalness={0.72} roughness={0.3} transparent opacity={opacity} />
        </mesh>
        <mesh position={[0, 0, 0.07]}>
          <planeGeometry args={[2.88, 1.68]} />
          <meshStandardMaterial color="#f1f1f1" emissive={accent} emissiveIntensity={0.05} transparent opacity={opacity * 0.92} />
        </mesh>
        <mesh position={[0, -1.22, -0.05]}>
          <boxGeometry args={[0.18, 0.62, 0.14]} />
          <meshStandardMaterial color="#161616" metalness={0.75} roughness={0.3} transparent opacity={opacity} />
        </mesh>
        <mesh position={[0, -1.55, 0]}>
          <boxGeometry args={[1.35, 0.08, 0.6]} />
          <meshStandardMaterial color="#121212" metalness={0.75} roughness={0.3} transparent opacity={opacity} />
        </mesh>
      </group>
    </Float>
  );
}
