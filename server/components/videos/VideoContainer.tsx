'use client';

import { useState, useRef, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { RotateCcwIcon } from 'lucide-react';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';

/**
 * Video container component.
 * @src The source of the video to be played.
 * @returns A video container component.
 */
const VideoContainer = ({ src }: { src: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event bubbling
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset the video to the beginning
      videoRef.current.muted = false; // Unmute the video when play is initiated
      videoRef.current.play();
      setIsPlaying(true);
      setIsMuted(false);
    }
  };

  const handleRewindVideo = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event bubbling
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset the video to the beginning
    }
  };

  const handleToggleMute = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event bubbling
    if (videoRef.current) {
      const muted = !videoRef.current.muted;
      videoRef.current.muted = muted;
      setIsMuted(muted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Mute the video for autoplay
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <div className="w-full">
      <div
        className="relative xl:rounded-md overflow-hidden group"
        onClick={handleToggleMute} // Handle mute/unmute on click
      >
        {/* //? Video */}
        <video
          ref={videoRef}
          width="320"
          height="240"
          loop
          playsInline
          controlsList="nodownload noremoteplayback noplaybackrate nofullscreen"
          className="z-[5] max-xl:h-[85vh] w-full object-cover object-center"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* //? Custom Play Button */}
        <div
          onClick={handlePlayVideo}
          className={cn(
            'absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center',
            {
              hidden: isPlaying,
            }
          )}
        >
          <Button
            className={cn(
              'size-[90px] z-[10] rounded-full bg-white bg-opacity-30 group-hover:bg-white sm:hover:size-[120px] backdrop-blur-sm text-nm-gray-900 text-sm transition-all duration-200',
              {
                hidden: isPlaying,
              }
            )}
          >
            Play
          </Button>
        </div>

        {/* //? Control Btn */}
        <div
          className={cn('absolute top-0 right-0 left-0 bottom-0', {
            hidden: !isPlaying,
          })}
        >
          <div className="absolute top-6 right-6 z-[20] space-x-2">
            {/* //? REWIND VIDEO */}
            <Button
              onClick={handleRewindVideo}
              className={cn(
                'size-[60px] z-[10] rounded-full bg-white bg-opacity-30 max-sm:hover:bg-opacity-30 hover:bg-white sm:hover:scale-110 backdrop-blur-sm text-nm-gray-900 text-sm transition-all duration-200',
                {}
              )}
            >
              <RotateCcwIcon size={20} strokeWidth={2.4} />
            </Button>

            {/* //? TOGGLE MUTE */}
            <Button
              onClick={handleToggleMute}
              className={cn(
                'size-[60px] z-[10] rounded-full bg-white bg-opacity-30 max-sm:hover:bg-opacity-30 hover:bg-white sm:hover:scale-110 backdrop-blur-sm text-nm-gray-900 text-sm transition-all duration-200',
                {}
              )}
            >
              <SpeakerXMarkIcon
                className={cn('size-5', {
                  hidden: !isMuted,
                })}
              />

              <SpeakerWaveIcon
                className={cn('size-5', {
                  hidden: isMuted,
                })}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
