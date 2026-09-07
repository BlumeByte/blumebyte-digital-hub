export function getHeaderPositionClass(isHome: boolean) {
  return isHome ? "fixed" : "sticky";
}

export function getHomeHeaderSurfaceClass(scrolled: boolean, inverse: boolean) {
  if (!scrolled) return "border-b border-transparent bg-transparent";
  return inverse
    ? "border-b border-white/10 bg-black/64 shadow-[0_12px_36px_-24px_rgba(0,0,0,.8)] backdrop-blur-xl"
    : "border-b border-black/10 bg-white/68 backdrop-blur-xl";
}
