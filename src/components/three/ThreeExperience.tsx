import { Canvas, type CanvasProps } from "@react-three/fiber";
import { Component, type ErrorInfo, type ReactNode, useEffect, useRef, useState } from "react";

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
  const hostRef = useRef<HTMLDivElement>(null);
  const [nearViewport, setNearViewport] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearViewport(Boolean(entry?.isIntersecting)),
      { rootMargin: "260px 0px", threshold: 0 },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  const renderCanvas = live && nearViewport;

  return (
    <div ref={hostRef} className={className} aria-hidden="true">
      {renderCanvas ? (
        <SceneErrorBoundary fallback={fallback}>
          <Canvas
            dpr={[1, 1.35]}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            camera={camera ?? { position: [0, 0, 5], fov: 42 }}
          >
            {children}
          </Canvas>
        </SceneErrorBoundary>
      ) : (
        fallback
      )}
    </div>
  );
}
