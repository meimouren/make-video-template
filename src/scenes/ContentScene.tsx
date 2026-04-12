import React from "react";
import { AbsoluteFill } from "remotion";
import { Background } from "../components/Background";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { BodyText } from "../components/BodyText";
import { SceneNumber } from "../components/SceneNumber";
import { ProgressBar } from "../components/ProgressBar";

type ContentSceneProps = {
  title: string;
  subtitle: string;
  text: string;
  sceneIndex: number;
  totalScenes: number;
};

export const ContentScene: React.FC<ContentSceneProps> = ({
  title,
  subtitle,
  text,
  sceneIndex,
  totalScenes,
}) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
      }}
    >
      <AnimatedTitle title={title} subtitle={subtitle} />
      <BodyText text={text} />
      <SceneNumber number={sceneIndex + 1} total={totalScenes} />
      <ProgressBar sceneIndex={sceneIndex} totalScenes={totalScenes} />
    </AbsoluteFill>
  );
};
