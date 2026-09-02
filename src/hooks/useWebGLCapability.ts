import { useEffect, useState } from "react";

export function useWebGLCapability() {
  const [webgl, setWebgl] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const context =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      setWebgl(Boolean(context));
    } catch {
      setWebgl(false);
    }
  }, []);

  return webgl;
}
