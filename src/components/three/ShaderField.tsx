import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color, ShaderMaterial } from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uProgress;
  uniform vec3 uGold;
  uniform vec3 uDark;
  uniform vec3 uLight;

  void main() {
    vec2 p = vUv - 0.5;
    float waveA = sin((p.x * 5.0) + uTime * 0.18 + p.y * 2.5);
    float waveB = cos((p.y * 6.0) - uTime * 0.12 - p.x * 2.0);
    float organic = smoothstep(-1.0, 1.0, waveA * 0.55 + waveB * 0.45);
    float radial = smoothstep(0.78, 0.04, length(p - vec2(0.16, -0.06)));
    float goldMix = clamp(organic * 0.28 + radial * (0.35 + uProgress * 0.18), 0.0, 0.62);
    vec3 base = mix(uDark, uLight, clamp(uProgress * 0.12, 0.0, 0.12));
    vec3 color = mix(base, uGold, goldMix);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export function ShaderField({
  variant = "dark-gold",
  progress = 0,
}: {
  variant?: "dark-gold" | "light-gold";
  progress?: number;
}) {
  const material = useRef<ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uProgress: { value: progress },
      uGold: { value: new Color("#7C5A1A") },
      uDark: { value: new Color(variant === "dark-gold" ? "#000000" : "#d9d9d9") },
      uLight: { value: new Color(variant === "dark-gold" ? "#171717" : "#f1f1f1") },
    }),
    [progress, variant],
  );

  useFrame((_, delta) => {
    if (!material.current) return;
    material.current.uniforms.uTime.value += delta;
    material.current.uniforms.uProgress.value = progress;
  });

  return (
    <mesh scale={[8, 4.5, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial ref={material} vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} />
    </mesh>
  );
}
