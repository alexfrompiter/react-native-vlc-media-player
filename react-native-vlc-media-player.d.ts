declare module 'react-native-vlc-media-player' {
  export type TrackInfo = {
    id: number;
    name: string;
  };

  export type VideoInfo = {
    duration: number;
    videoSize: {
      width: number;
      height: number;
    };
    audioTracks?: TrackInfo[];
    textTracks?: TrackInfo[];
  };

  export type ProgressInfo = {
    currentTime: number;
  };

  //onLayout?: ((event: LayoutChangeEvent) => void;

  export type VLCPlayerProps = {
    source: {uri: string};
    subtitleUri?: string;
    paused?: bool;
    repeat?: bool;
    rate?: number;
    seek?: number;
    volume?: number;
    muted?: bool;
    audioTrack?: number;
    textTrack?: number;
    playInBackground?: bool;
    videoAspectRatio?: string;
    autoAspectRatio?: bool;
    resizeMode?: string;
    resume?: bool;
    snapshotPath?: string;
    disableFocus?: bool;
    src?: string;
    playWhenInactive?: bool;
    poster?: string;
    style?: StyleProp<ViewStyle>;

    onPlaying?: (event: any) => void;
    onProgress?: (event: ProgressInfo) => void;
    onPaused?: (event: any) => void;
    onStopped?: (event: any) => void;
    onBuffering?: (event: any) => void;
    onEnded?: (event: any) => void;
    onError?: (event: any) => void;
    onLoad?: (event: VideoInfo) => void;
  };

  export class VLCPlayer extends React.Component<VLCPlayerProps> {}
}
