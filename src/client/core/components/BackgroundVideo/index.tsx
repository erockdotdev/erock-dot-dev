import React from 'react';
import { componentVideo } from '@custom-types/index';
import ReactPlayer from 'react-player';
import './background-video.scss';

type Props = {
  videoData: componentVideo;
};

const BackgroundVideo: React.FC<Props> = ({ videoData }) => {
  // use videoData.videoProvider to toggle youtube or vimeo enhancement
  const {
    fields: { videoId, loopContinuously }
  } = videoData;

  return (
    <div className="background-video__container">
      <div className="background-video__container__inner">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          playing
          volume={0}
          muted
          controls={false}
          width="100%"
          height="auto"
          playsinline
          playerVars
          loop={loopContinuously}
        />
      </div>
    </div>
  );
};

export default BackgroundVideo;
