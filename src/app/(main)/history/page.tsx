    import { VoiceProvider } from '@humeai/voice-react';
import React from 'react'
import CreateReport from '~/app/_components/CreateReport';
import { chats } from '~/utils/getChatHistory';
    
    const page = () => {
        console.log(chats);
      return (
        <div>
            {/* <VoiceProvider>
            </VoiceProvider> */}
        </div>
      )
    }
    
    export default page