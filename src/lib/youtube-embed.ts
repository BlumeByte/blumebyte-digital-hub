export function getYoutubeCommandOrigin(src: string) {
  try {
    return new URL(src).origin;
  } catch {
    return "*";
  }
}
