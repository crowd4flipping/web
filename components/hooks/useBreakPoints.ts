import { useEffect, useState } from "react";

const breakPoints = {
  xs: "320px",
  sm: "640px",
  md: "1024px",
  lg: "1280px",
  xl: "1536px",
} as const;

export type BreakPoint = typeof breakPoints;

type UseBreakPointsReturn = {
  breakingPoint: keyof BreakPoint;
  isXSmall: boolean;
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isXLarge: boolean;
  isSmallerSize: boolean;
  isLargerSize: boolean;
};

const getBreakPoint = (): keyof BreakPoint => {
  let bpoint: keyof BreakPoint;

  for (const bp in breakPoints) {
    const media = window.matchMedia(`(min-width: ${breakPoints[bp]})`);

    if (media.matches) {
      Object.entries(breakPoints).forEach((value) => {
        if (value[0] == bp) {
          bpoint = value[0] as keyof BreakPoint;
        }
      });
    }
  }

  return bpoint;
};

const mediaQueryListener = ({
  px,
  onChange,
  remove = false,
}: {
  px: string;
  onChange: () => void;
  remove?: boolean;
}) => {
  if (remove) {
    window
      .matchMedia(`(min-width: ${px})`)
      .removeEventListener("change", onChange);
  } else {
    window
      .matchMedia(`(min-width: ${px})`)
      .addEventListener("change", onChange);
  }
};

export const useBreakPoints = (): UseBreakPointsReturn => {
  const [breakingPoint, setBreakingPoint] =
    useState<ReturnType<typeof getBreakPoint>>(null);

  useEffect(() => {
    if (!breakingPoint) {
      setBreakingPoint(getBreakPoint());
      return;
    }
  }, [breakingPoint]);

  useEffect(() => {
    const update = () => {
      setBreakingPoint(getBreakPoint());
    };

    const bpValues = Object.values(breakPoints);

    bpValues.forEach((value) => {
      mediaQueryListener({ px: value, onChange: update });
    });

    return () => {
      bpValues.forEach((value) => {
        mediaQueryListener({ px: value, onChange: update, remove: true });
      });
    };
  }, []);

  return {
    breakingPoint,
    isXSmall: breakingPoint == "xs",
    isSmall: breakingPoint == "sm",
    isMedium: breakingPoint == "md",
    isLarge: breakingPoint == "lg",
    isXLarge: breakingPoint == "xl",
    isSmallerSize: breakingPoint == "sm" || breakingPoint == "xs",
    isLargerSize: breakingPoint == "lg" || breakingPoint == "xl",
  };
};
