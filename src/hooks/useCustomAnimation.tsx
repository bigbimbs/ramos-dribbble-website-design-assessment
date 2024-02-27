import React, { useRef, useEffect } from "react";
import { AnimationControls, useAnimation, useInView } from "@/lib/framer";

export function useCustomAnimation(delayAnimation?: number): {
  control: AnimationControls;
  ref: React.MutableRefObject<HTMLDivElement | null>;
  isInView: boolean;
} {
  const control = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      if (delayAnimation) {
        setTimeout(() => {
          control.start("visible");
        }, delayAnimation * 1000);
      } else {
        control.start("visible");
      }
    } else {
      control.start("hidden");
    }
  }, [control, isInView, delayAnimation]);

  return { ref, control, isInView };
}
