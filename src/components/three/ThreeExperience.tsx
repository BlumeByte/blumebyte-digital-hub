import { Canvas, type CanvasProps } from "@react-three/fiber";
import { Component, type ErrorInfo, type ReactNode } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useWebGLCapability } from "@/hooks/useWebGLCapability";
import { shouldRenderLive3D } from "@/lib/visual-capability";

type SceneErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

type SceneErrorBoundaryState = { failed: boolean };

class SceneErrorBoundary extends Component<SceneErrorBoundaryProps, SceneErrorBoundaryState> {
  state: SceneErrorBoundaryState = { failed: false };

  static getDerivedStateFromError(): SceneErrorBoundaryState {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Blumebyte 3D scene failed", error, info.componentStack);
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export type ThreeExperienceProps = {
  children: ReactNode;
  fallback: ReactNode;
  className?: string;
  camera?: CanvasProps["camera"];
};

export function ThreeExperience({ children, fallback, className, camera }: ThreeExperienceProps) {
  const reducedMotion = useReducedMotion();
  const webgl = useWebGLCapability();
  const live = shouldRenderLive3D({ webgl, reducedMotion });

  if (!live) return <>{fallback}</>;

  return (
    <SceneErrorBoundary fallback={fallback}>
      <div className={className} aria-hidden="true">
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          camera={camera ?? { position: [0, 0, 5], fov: 42 }}
        >
          {children}
        </Canvas>
      </div>
    </SceneErrorBoundary>
  );
}
