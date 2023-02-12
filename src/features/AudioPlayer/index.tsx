/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayIcon, PauseIcon } from '../../ui';
import style from './AudioPlayer.module.scss';

type TProps = {
  audioSource: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
};

export const AudioPlayer = ({ audioSource, setData }: TProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const [prevVolume, setPrevVolume] = useState(volume);

  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        setPrevVolume(volume);
        audioRef.current.pause();
      } else {
        setVolume(prevVolume);
        audioRef.current.volume = prevVolume;
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const getTime = (time: number) => {
    const minute = Math.floor(time / 60);
    const second = time % 60;

    return `${String(Math.floor(minute)).padStart(2, '0')}:${String(Math.floor(second)).padStart(
      2,
      '0',
    )}`;
  };

  const handleVolumeChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (audioRef.current) {
      const rect = event.currentTarget.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const width = event.currentTarget.offsetWidth;
      const newVolume = x / width;

      setVolume(newVolume);
      audioRef.current.volume = newVolume;
    }
  };
  const handleAudioLoad = () => {
    setIsAudioLoaded(true);
  };
  const handleBack = () => {
    setData('');
  };

  const processWidth = duration === Infinity ? '100%' : `${(currentTime / duration) * 100}%`;

  return (
    <div className={style.container}>
      <span>{audioSource}</span>
      <div className={style.player_wrapper}>
        {!isAudioLoaded && (
          <div className={style.loading_border}>
            <div />
          </div>
        )}
        <button className={style.player_button} type="button" onClick={togglePlay}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        <div className={style.playback_bar}>
          <div
            className={style.playback_progress}
            style={{ width: processWidth }}
          />
          <div className={style.playback_slider} />
        </div>
        <div className={style.player_footer}>
          <div className={style.player_timer}>{getTime(currentTime)}</div>
          <button
            className={style.volume_bar}
            onClick={handleVolumeChange}
            type="button"
            tabIndex={0}
          >
            <div className={style.volume_progress} style={{ width: `${volume * 100}%` }} />
            <div className={style.volume_slider} />
          </button>
        </div>

        <audio
          ref={audioRef}
          src={audioSource}
          onTimeUpdate={handleTimeUpdate}
          preload="auto"
          onLoadedData={handleAudioLoad}
        />
      </div>
      <button type="button" onClick={handleBack} className={style.link_back}>
        ← Back
      </button>
    </div>
  );
};
