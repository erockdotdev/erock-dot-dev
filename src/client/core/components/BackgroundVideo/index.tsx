import React from 'react';
import { VIDEO_PROVIDER } from '@config/app-config';
import { componentVideo } from '@custom-types/index';
import ReactPlayer from 'react-player';
import './background-video.scss';

type Props = {
  videoData: componentVideo;
};

type VideoProviderType = {
  [name: string]: {
    BASE_URL: string;
  };
};

function getVideoURL(videoProvider: string[], videoId: string): string {
  // get video Provider from contentful array response for videoProvider
  const [formatVideoProvider]: string[] = videoProvider;
  // set config to a new var as TS insist on typechecking imported config before use
  const VideoProvider: VideoProviderType = VIDEO_PROVIDER;
  // get base url by passing formatVideoProvider as key on Typed Checked VideoProvider
  const { BASE_URL } = VideoProvider[formatVideoProvider];
  // combine BASE_URL and videoId for full video path
  const videoURL = `${BASE_URL}${videoId}`;
  return videoURL;
}

const BackgroundVideo: React.FC<Props> = ({ videoData }) => {
  const {
    fields: { videoId, loopContinuously, videoProvider }
  } = videoData;

  const videoURL = getVideoURL(videoProvider, videoId);

  return (
    <div className="background-video__container">
      <div className="background-video__container__inner">
        <ReactPlayer
          url={videoURL}
          playing
          volume={0}
          muted
          controls={false}
          width="100%"
          height="auto"
          playsinline
          loop={loopContinuously}
        />
      </div>
    </div>
  );
};

export default BackgroundVideo;
