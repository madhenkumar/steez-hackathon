'use client';
import AvatarPlayer from './components/AvatarPlayer';
import { useState, useEffect, useRef } from 'react';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Slider } from '~/components/ui/slider';
import { Loader } from 'react-feather';  // Using a simple loader icon from react-feather
import { Leaf, Volume2, VolumeX, Maximize2, Minimize2, RefreshCw, Bot } from 'lucide-react';
import { AnamEvent } from '@anam-ai/js-sdk/dist/module/types';
import { AnamClient } from '@anam-ai/js-sdk';
import { useAnam } from '../../../../contexts/AnamContext';

export default function Page() {
  const { anamClient } = useAnam();
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Connecting you to maya...');
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(50);
  const isStreaming = useRef(false);

  const toggleMute = () => setIsMuted(!isMuted);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

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
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-teal-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Bot className="w-8 h-8 text-teal-600" />
          <h1 className="text-2xl font-semibold text-teal-900">Maya</h1>
        </div>

        {/* Main Content */}
        <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-green-100">
        <div className="aspect-video relative">
  <div style={{ display: loading ? 'none' : 'block' }}>
    <AvatarPlayer />
  </div>
  <div
    style={{
      display: loading ? 'flex' : 'none',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', // Positioning it absolutely within the container
      top: '50%',           // Centers vertically
      left: '50%',          // Centers horizontally
      transform: 'translate(-50%, -50%)', // Ensures it is truly centered
      width: '100%',         // Ensures the container takes up the full width
      height: '100%'         // Ensures the container takes up the full height
    }}
  >
    <Loader className="animate-spin h-12 w-12 text-green-600" />
    <label className="text-xl my-4 text-green-900">{loadingText}</label>
  </div>

            {/* Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity hover:opacity-100 focus-within:opacity-100 opacity-80">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={toggleMute} className="text-black hover:bg-white/20">
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>

                {/* <div className="w-32">
                  <Slider
                    value={[volume]}
                    max={100}
                    step={1}
                    className="[&>span]:bg-white"
                    onValueChange={(vals: (number | undefined)[]) => {
                      if (vals[0] !== undefined) {
                        setVolume(vals[0]);
                      }
                    }}
                  />
                </div> */}

                {/* <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.location.reload()}
                  className="text-black hover:bg-white/20"
                >
                  <RefreshCw className="h-5 w-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleFullscreen}
                  className="ml-auto text-black hover:bg-white/20"
                >
                  {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                </Button> */}
              </div>
            </div>
          </div>
        </Card>

        {/* Info Panel */}
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-green-100">
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-green-900">Meet Maya, Your AI Therapist</h2>
            <p className="text-green-800">
              Have a meaningful conversation with Maya, your compassionate AI therapy companion. She creates a safe, 
              judgment-free space where you can openly discuss your thoughts and feelings while receiving 
              professional therapeutic guidance and support.
            </p>
            <div className="flex gap-2 text-sm text-green-700">
              <span className="px-3 py-1 rounded-full bg-green-100">Empathetic AI</span>
              <span className="px-3 py-1 rounded-full bg-green-100">24/7 Support</span>
              <span className="px-3 py-1 rounded-full bg-green-100">Private & Secure</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
