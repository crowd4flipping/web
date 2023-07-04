import { ReactElement, useEffect, useRef, useState } from "react";
import styles from "../cards/styles/Card.module.scss";
import { ProjectStatus } from "@/routes/C4FCloudRoutes";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";

type AnimationSteps = ProjectStatus | "empty";

type ProjectCardAnimationProps = {
  projects: ReactElement[];
  onChangeStatus: (status: ProjectStatus) => void;
};

export const ProjectCardAnimation = (props: ProjectCardAnimationProps) => {
  const { isSmallerSize } = useBreakPoints();
  const [animationStep, setAnimationStep] = useState<AnimationSteps>("empty");
  const [currentAmount, setCurrentAmount] = useState(0);
  const animationWrapperRef = useRef<HTMLDivElement>();

  const transition = (type: "in" | "out" | "none") => {
    switch (type) {
      case "in":
        return styles.showProjectShowcase;
      case "out":
        return styles.hiddeProjectShowcase;
      default:
        return styles.hiddenProjectShowcase;
    }
  };

  const setAnimationForSteps = (
    step: AnimationSteps,
    props: {
      in: AnimationSteps;
      out: AnimationSteps;
    }
  ) => {
    if (props.in === step) return transition("in");
    if (props.out === step) return transition("out");
    return transition("out");
  };

  const animation = (stepToAnimate: AnimationSteps, step: AnimationSteps) => {
    switch (stepToAnimate) {
      case "in_study":
        return setAnimationForSteps(step, {
          in: "in_study",
          out: "funding",
        });
      case "funding":
        return setAnimationForSteps(step, {
          in: "funding",
          out: "active",
        });
      case "active":
        return setAnimationForSteps(step, {
          in: "active",
          out: "finished",
        });
      case "finished":
        return setAnimationForSteps(step, {
          in: "finished",
          out: "in_study",
        });
      default:
        return setAnimationForSteps(step, {
          in: "in_study",
          out: "funding",
        });
    }
  };

  useEffect(() => {
    const projectCardWrapper = animationWrapperRef.current;
    let inStudyTimeout: NodeJS.Timeout;
    let fundingTimeout: NodeJS.Timeout;
    let fundingInterval: NodeJS.Timer;
    let activeTimeout: NodeJS.Timeout;
    let finishedTimeout: NodeJS.Timeout;

    const animationTimer = () => {
      if (animationStep === "empty") setAnimationStep("in_study");

      if (animationStep == "in_study") {
        props.onChangeStatus("in_study");
        inStudyTimeout = setTimeout(() => {
          setAnimationStep("funding");
        }, 3000);
      }

      if (animationStep == "funding") {
        props.onChangeStatus("funding");
        fundingTimeout = setTimeout(() => {
          setAnimationStep("active");
        }, 2000);
      }

      if (animationStep == "active") {
        props.onChangeStatus("active");
        activeTimeout = setTimeout(() => {
          setAnimationStep("finished");
        }, 3000);
      }

      if (animationStep == "finished") {
        props.onChangeStatus("finished");
        finishedTimeout = setTimeout(() => {
          setAnimationStep("in_study");
        }, 3000);
      }
    };

    const clean = () => {
      clearTimeout(inStudyTimeout);
      clearInterval(fundingInterval);
      clearTimeout(fundingTimeout);
      clearTimeout(activeTimeout);
      clearTimeout(finishedTimeout);
      setCurrentAmount(0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0) {
            animationTimer();
            return;
          }
          setAnimationStep("empty");
          clean();
          return;
        });
      },
      { threshold: isSmallerSize ? 0.3 : 0.7 }
    );

    if (projectCardWrapper) observer.observe(projectCardWrapper);

    return () => {
      observer.disconnect();
      clean();
    };
  }, [animationStep, isSmallerSize, props]);

  return (
    <div className={styles.projectCardAnimation} ref={animationWrapperRef}>
      <div
        className={`${animation("in_study", animationStep)} ${
          styles.projectCardAnimation_cardWrapper
        }`}
      >
        {props.projects[0]}
      </div>
      <div
        className={`${animation("funding", animationStep)} ${
          styles.projectCardAnimation_cardWrapper
        }`}
      >
        {props.projects[1]}
      </div>
      <div
        className={`${animation("active", animationStep)} ${
          styles.projectCardAnimation_cardWrapper
        }`}
      >
        {props.projects[2]}
      </div>
      <div
        className={`${animation("finished", animationStep)} ${
          styles.projectCardAnimation_cardWrapper
        }`}
      >
        {props.projects[3]}
      </div>
    </div>
  );
};
