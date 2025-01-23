'use client'
import { useState, useEffect } from 'react';
import { Button, Spinner } from 'flowbite-react';
import { useAnam } from '@../../contexts/AnamContext';
import useSendMessage from '../../../hooks/useSendMessage';
import { AnamEvent } from '@anam-ai/js-sdk/dist/module/types';

export default function TalkToAnamPage() {
  const { anamClient } = useAnam();
  const { onSendMessage, onReceiveMessageStreamEvent, state } = useSendMessage();
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Connecting to Anam AI...');
  const [error, setError] = useState<string | null>(null);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    console.log('Component mounted. Hydrating...');
    setHydrated(true); // Ensures rendering happens only after hydration
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    console.log('Hydrated. Adding event listener for MESSAGE_STREAM_EVENT_RECEIVED.');
    anamClient.addListener(AnamEvent.MESSAGE_STREAM_EVENT_RECEIVED, handleStreamEvent);

    return () => {
      console.log('Component unmounted. Removing event listener.');
      anamClient.removeListener(AnamEvent.MESSAGE_STREAM_EVENT_RECEIVED, handleStreamEvent);
    };
  }, [hydrated]);

  const handleStreamEvent = (event: any) => {
    console.log('MESSAGE_STREAM_EVENT_RECEIVED:', event);
    onReceiveMessageStreamEvent(event); // Existing logic to handle the event
  };

  const startConversation = async () => {
    if (!hydrated) return; // Ensures logic is only executed once hydrated
  
    try {
      console.log('Attempting to start conversation...');
      setLoading(true);
      setLoadingText('Connecting to Anam AI...');
  
      // Proceed only if the session token is available
      const sessionToken = anamClient.getActiveSessionId();
      if (!sessionToken) {
        throw new Error('No session token available. Unable to connect to Anam AI.');
      }
      console.log('Session token fetched:', sessionToken);
  
      // Start the video/audio stream
      await anamClient.streamToVideoAndAudioElements('video', 'audio');
      console.log('Streaming started successfully.');
  
      // Set the state and send an initial message
      setConversationStarted(true);
      onSendMessage('Hello Anam!');
      console.log('Message sent: Hello Anam!');
    } catch (err) {
      console.error('Failed to start conversation:', err);
      setError('Failed to connect to Anam AI. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  const stopConversation = () => {
    console.log('Stopping conversation...');
    anamClient.stopStreaming();
    console.log('Streaming stopped.');
    setConversationStarted(false);
  };

  if (!hydrated) {
    console.log('Component not hydrated yet. Rendering null.');
    return null;
  }

  return (
    <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
      <div className="aspect-w-16 aspect-h-9 bg-black rounded-md mb-4">
        <video id="video" className="w-full h-full" muted autoPlay loop />
        <audio id="audio" hidden />
      </div>
      {loading && (
        <div className="flex flex-col items-center justify-center my-4">
          <Spinner size="xl" />
          <p className="text-gray-600 mt-2">{loadingText}</p>
        </div>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="flex justify-center mt-4">
        {!conversationStarted ? (
          <Button onClick={startConversation} color="blue" size="lg">
            Start Conversation
          </Button>
        ) : (
          <Button onClick={stopConversation} color="red" size="lg">
            End Conversation
          </Button>
        )}
      </div>
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Conversation</h2>
        <div className="space-y-2">
          {state.sentMessages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                message.author === 'user' ? 'bg-blue-200 text-blue-900' : 'bg-gray-200 text-gray-800'
              }`}
            >
              <strong>{message.author === 'user' ? 'You' : 'Anam'}:</strong> {message.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
