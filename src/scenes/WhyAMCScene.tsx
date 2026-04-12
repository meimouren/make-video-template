import React from "react";
import { AbsoluteFill } from "remotion";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { BenefitGrid } from "../components/BenefitGrid";

type Benefit = { icon: string; title: string; desc: string };

type WhyAMCSceneProps = {
  title: string;
  subtitle: string;
  benefits: Benefit[];
};

export const WhyAMCScene: React.FC<WhyAMCSceneProps> = ({
  title, subtitle, benefits,
}) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        padding: "40px 50px",
      }}
    >
      <AnimatedTitle title={title} subtitle={subtitle} />
      <BenefitGrid benefits={benefits} />
    </AbsoluteFill>
  );
};
