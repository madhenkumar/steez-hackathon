'use client';
import AvatarPlayer from './components/AvatarPlayer';
import { useState, useEffect, useRef } from 'react';
import { Spinner } from 'flowbite-react';
import { AnamEvent } from '@anam-ai/js-sdk/dist/module/types';
import { AnamClient } from '@anam-ai/js-sdk';
import { useAnam } from '../../../../contexts/AnamContext';

export default function Page() {
  const { anamClient } = useAnam();
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Connecting you to an Anam.ai persona...');
  const isStreaming = useRef(false);

  useEffect(() => {
    const startStream = async () => {
      anamClient.addListener(AnamEvent.CONNECTION_ESTABLISHED, () => {
        setLoadingText('Connected to a Persona. Starting video stream...');
      });
      anamClient.addListener(AnamEvent.VIDEO_PLAY_STARTED, () => {
        setLoading(false);
      });
      try {
        await anamClient.streamToVideoAndAudioElements('video', 'audio');
      } catch (error: any) {
        console.error(error);
      }
    };

    if (!isStreaming.current && !anamClient.isStreaming()) {
      isStreaming.current = true;
      startStream();
    }

    return () => {
      anamClient.stopStreaming();
    };
  }, [anamClient]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div style={{ display: loading ? 'none' : 'block' }}>
        <AvatarPlayer />
      </div>
      <div style={{ display: loading ? 'flex' : 'none', flexFlow: 'column' }}>
        <Spinner aria-label="Extra large spinner example" size="xl" style={{ zoom: 2.0, margin: 'auto' }} />
        <label className="text-xl my-12">{loadingText}</label>
      </div>
    </div>
  );
}
