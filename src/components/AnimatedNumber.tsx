import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useInView } from 'motion/react';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  format?: boolean;
}

export function AnimatedNumber({ value, suffix = "", prefix = "", format = true }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = format ? Intl.NumberFormat('pt-BR').format(Math.floor(latest)) : Math.floor(latest);
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix, format]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
