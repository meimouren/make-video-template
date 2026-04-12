import React from "react";
import { AbsoluteFill } from "remotion";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { ProgressPathway } from "../components/ProgressPathway";

type PathwayStep = { stage: string; participants: string; desc: string };

type ProgressionSceneProps = {
  title: string;
  subtitle: string;
  pathway: PathwayStep[];
};

export const ProgressionScene: React.FC<ProgressionSceneProps> = ({
  title, subtitle, pathway,
}) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        padding: "40px 50px",
      }}
    >
      <AnimatedTitle title={title} subtitle={subtitle} />
      <ProgressPathway steps={pathway} />
    </AbsoluteFill>
  );
};
