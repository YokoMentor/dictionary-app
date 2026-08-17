import React, { useRef, useEffect } from 'react';
import styles from '@/app/page.module.css'

interface AudioPlayerProps {
  audioSource: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSource }) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(audioSource));

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSource);
  }, [audioSource]);

  function playAudio() {
     audioRef.current.play();
  };

  return <button className={`${styles.icon_play} w-[48px] h-[48px] md:w-[75px] md:h-[75px] bg-no-repeat bg-center bg-contain cursor-pointer`} onClick={playAudio}></button>
}

export default AudioPlayer;