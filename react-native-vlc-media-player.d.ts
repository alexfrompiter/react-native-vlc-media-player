declare module 'react-native-vlc-media-player' {
  import {StyleProp, ViewStyle} from  'react-native';
  
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
    paused?: boolean;
    repeat?: boolean;
    rate?: number;
    seek?: number;
    volume?: number;
    muted?: boolean;
    audioTrack?: number;
    textTrack?: number;
    playInBackground?: boolean;
    videoAspectRatio?: string;
    autoAspectRatio?: boolean;
    resizeMode?: string;
    resume?: boolean;
    snapshotPath?: string;
    disableFocus?: boolean;
    src?: string;
    playWhenInactive?: boolean;
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
