import { useEffect, useRef } from 'react';

interface YTPlayer {
  setPlaybackRate: (rate: number) => void;
  destroy: () => void;
}

interface YTPlayerState {
  PLAYING: number;
}

interface YTEvent {
  target: YTPlayer;
  data: number;
}

interface YTPlayerOptions {
  videoId: string;
  width: string;
  height: string;
  playerVars?: Record<string, number>;
  events?: {
    onReady?: (event: YTEvent) => void;
    onStateChange?: (event: YTEvent) => void;
  };
}

declare global {
  interface Window {
    YT: {
      Player: new (el: HTMLElement, options: YTPlayerOptions) => YTPlayer;
      PlayerState: YTPlayerState;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  playbackRate?: number;
}

let apiLoaded = false;
const readyCallbacks: (() => void)[] = [];

function loadYouTubeAPI() {
  if (apiLoaded) return;
  apiLoaded = true;

  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);

  window.onYouTubeIframeAPIReady = () => {
    readyCallbacks.forEach(cb => cb());
    readyCallbacks.length = 0;
  };
}

function onAPIReady(cb: () => void) {
  if (window.YT && window.YT.Player) {
    cb();
  } else {
    readyCallbacks.push(cb);
    loadYouTubeAPI();
  }
}

export function YouTubePlayer({ videoId, title, playbackRate = 1.5 }: YouTubePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);

  useEffect(() => {
    let destroyed = false;

    onAPIReady(() => {
      if (destroyed || !containerRef.current) return;

      const div = document.createElement('div');
      containerRef.current.appendChild(div);

      playerRef.current = new window.YT.Player(div, {
        videoId,
        width: '100%',
        height: '100%',

        playerVars: {
          autoplay: 0,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            event.target.setPlaybackRate(playbackRate);
          },
          onStateChange: (event) => {
            // Re-apply speed on play in case it was reset
            if (event.data === window.YT.PlayerState.PLAYING) {
              event.target.setPlaybackRate(playbackRate);
            }
          },
        },
      });
    });

    return () => {
      destroyed = true;
      if (playerRef.current) {
        try { playerRef.current.destroy(); } catch (_) {}
        playerRef.current = null;
      }
    };
  }, [videoId, playbackRate]);

  return (
    <div className="relative w-full h-full bg-black">
      <div ref={containerRef} className="w-full h-full [&>div]:w-full [&>div]:h-full [&_iframe]:w-full [&_iframe]:h-full" />
    </div>
  );
}

/** Extract YouTube video ID from a short or full URL */
export function getYouTubeId(url: string): string {
  return url.split('/').pop()?.split('?')[0] ?? '';
}

/** Get YouTube thumbnail URL from a video URL */
export function getYouTubeThumbnail(url: string): string {
  const id = getYouTubeId(url);
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
