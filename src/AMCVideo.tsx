import React from "react";
import {
  AbsoluteFill,
  Sequence,
  Audio,
  staticFile,
  useVideoConfig,
} from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { Background } from "./components/Background";
import { BrandOverlay } from "./components/BrandOverlay";
import { SubtitleOverlay } from "./components/SubtitleOverlay";
import { CoverScene } from "./scenes/CoverScene";
import { ChartScene } from "./scenes/ChartScene";
import { StatsScene } from "./scenes/StatsScene";
import { TitleCardScene } from "./scenes/TitleCardScene";
import { WhatIsAMCScene } from "./scenes/WhatIsAMCScene";
import { KeyPointsScene } from "./scenes/KeyPointsScene";
import { ComparisonScene } from "./scenes/ComparisonScene";
import { ScoringScene } from "./scenes/ScoringScene";
import { ScoringExamplesScene } from "./scenes/ScoringExamplesScene";
import { TopicsScene } from "./scenes/TopicsScene";
import { CalendarScene } from "./scenes/CalendarScene";
import { WhyAMCScene } from "./scenes/WhyAMCScene";
import { ProgressionScene } from "./scenes/ProgressionScene";
import { PrepScene } from "./scenes/PrepScene";
import { ClosingScene } from "./scenes/ClosingScene";
import { SCENES } from "./config";

export type AMCVideoProps = {
  sceneDurations: number[];
};

export const AMCVideo: React.FC<AMCVideoProps> = ({ sceneDurations }) => {
  const { fps } = useVideoConfig();
  const transitionDuration = Math.round(0.3 * fps);

  const sceneStartFrames: number[] = [];
  let currentStart = 0;
  for (let i = 0; i < sceneDurations.length; i++) {
    sceneStartFrames.push(currentStart);
    currentStart += sceneDurations[i] - (i < sceneDurations.length - 1 ? transitionDuration : 0);
  }

  const renderScene = (index: number) => {
    const scene = SCENES[index] as any;
    switch (scene.type) {
      case "cover":
        return <CoverScene seriesName={scene.seriesName} competitionName={scene.competitionName} competitionNameEn={scene.competitionNameEn} episodeTag={scene.episodeTag} />;
      case "opening-chart":
        return <ChartScene />;
      case "opening-stats":
        return <StatsScene stats={scene.stats} />;
      case "title-card":
        return <TitleCardScene title={scene.title} subtitle={scene.subtitle} highlights={scene.highlights} />;
      case "levels-compare":
        return <WhatIsAMCScene title={scene.title || "竞赛级别对比"} subtitle={scene.subtitle || ""} levels={scene.levels} />;
      case "key-points":
        return <KeyPointsScene title={scene.title} subtitle={scene.subtitle} keyPoints={scene.keyPoints} />;
      case "comparison":
        return <ComparisonScene title={scene.title} subtitle={scene.subtitle} comparison={scene.comparison} />;
      case "scoring-formula":
        return <ScoringScene title={scene.title} subtitle={scene.subtitle} formula={scene.formula} scoringExamples={[]} />;
      case "scoring-examples":
        return <ScoringExamplesScene title={scene.title} subtitle={scene.subtitle} scoringExamples={scene.scoringExamples} />;
      case "topics-chart":
        return <TopicsScene title={scene.title} subtitle={scene.subtitle} domains={scene.domains} />;
      case "calendar":
        return <CalendarScene title={scene.title} subtitle={scene.subtitle} events={scene.events} />;
      case "progression":
        return <ProgressionScene title={scene.title} subtitle={scene.subtitle} pathway={scene.pathway} />;
      case "benefits":
        return <WhyAMCScene title={scene.title} subtitle={scene.subtitle} benefits={scene.benefits} />;
      case "prep-steps":
        return <PrepScene title={scene.title} subtitle={scene.subtitle} steps={scene.steps} />;
      case "closing":
        return <ClosingScene title={scene.title || "结语"} text={scene.text} />;
      default:
        return null;
    }
  };

  return (
    <AbsoluteFill>
      <Background />
      <TransitionSeries>
        {SCENES.map((scene, index) => {
          const duration = sceneDurations[index] || 5 * fps;
          return (
            <React.Fragment key={scene.id}>
              <TransitionSeries.Sequence durationInFrames={duration}>
                {renderScene(index)}
              </TransitionSeries.Sequence>
              {index < SCENES.length - 1 && (
                <TransitionSeries.Transition
                  presentation={fade()}
                  timing={linearTiming({ durationInFrames: transitionDuration })}
                />
              )}
            </React.Fragment>
          );
        })}
      </TransitionSeries>

      {/* 品牌标识层 — 常驻 */}
      <BrandOverlay />

      {/* 底部字幕层 — 读取 subtitles.json */}
      <SubtitleOverlay />

      {/* 背景音乐 — 循环 */}
      <Audio src={staticFile("bgm.mp3")} volume={0.22} loop />

      {/* 配音音频层 */}
      {SCENES.map((scene, index) => (
        <Sequence key={`audio-${scene.id}`} from={sceneStartFrames[index]} layout="none">
          <Audio src={staticFile(`voiceover/${scene.id}.mp3`)} volume={0.9} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
