import React from "react";
import { Composition, Still } from "remotion";
import { AMCVideo, AMCVideoProps } from "./AMCVideo";
import { CoverStill } from "./scenes/CoverStill";
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
      <Still
        id="AMCCover"
        component={CoverStill}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
