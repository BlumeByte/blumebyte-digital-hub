export type VisualCapability = {
  webgl: boolean;
  reducedMotion: boolean;
};

export function shouldRenderLive3D({ webgl, reducedMotion }: VisualCapability) {
  return webgl && !reducedMotion;
}
