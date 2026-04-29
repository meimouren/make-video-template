import React from "react";
import { AbsoluteFill } from "remotion";
import { Background } from "../../components/_legacy/Background";
import { AnimatedTitle } from "../../components/_legacy/AnimatedTitle";
import { BodyText } from "../../components/_legacy/BodyText";
import { SceneNumber } from "../../components/_legacy/SceneNumber";
import { ProgressBar } from "../../components/_legacy/ProgressBar";

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
