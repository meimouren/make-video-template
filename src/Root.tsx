import React from "react";
import { Composition, Still } from "remotion";
import { AMCVideo, AMCVideoProps } from "./AMCVideo";
import { CoverStill } from "./scenes/CoverStill";
import { BigStatScene } from "./scenes/BigStatScene";
import { QuoteScene } from "./scenes/QuoteScene";
import { BenefitsGridScene } from "./scenes/BenefitsGridScene";
import { InfoListScene } from "./scenes/InfoListScene";
import { CompareTableScene } from "./scenes/CompareTableScene";
import { SCENES, FPS, WIDTH, HEIGHT } from "./config";
import sceneDurationsData from "./scene-durations.json";

const { sceneDurations } = sceneDurationsData;
const TRANSITION_DURATION = Math.round(0.3 * FPS);

const totalDuration =
  sceneDurations.reduce((sum: number, d: number) => sum + d, 0) -
  (SCENES.length - 1) * TRANSITION_DURATION;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AMCVideo"
        component={AMCVideo}
        durationInFrames={totalDuration}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          sceneDurations,
        } satisfies AMCVideoProps}
      />
      <Still id="AMCCover" component={CoverStill} width={WIDTH} height={HEIGHT} />

      {/* Redesign proof stills — preview the Bold Editorial system */}
      <Still id="ProofBigStat" component={BigStatScene} width={WIDTH} height={HEIGHT} />
      <Still id="ProofQuote" component={QuoteScene} width={WIDTH} height={HEIGHT} />
      <Still id="ProofBenefits" component={BenefitsGridScene} width={WIDTH} height={HEIGHT} />
      <Still id="ProofList" component={InfoListScene} width={WIDTH} height={HEIGHT} />
      <Still id="ProofCompare" component={CompareTableScene} width={WIDTH} height={HEIGHT} />
    </>
  );
};
