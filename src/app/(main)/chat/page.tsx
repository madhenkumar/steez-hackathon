import React from 'react'
import Chat from '~/app/_components/Chat';
import { getHumeAccessToken } from '~/utils/getHumeAccessToken';
import { VideoCard } from './_components/VideoCard';
import { ChatCard } from './_components/ChatCard';

const page = async () => {
    const accessToken = await getHumeAccessToken();

    if (!accessToken) {
      throw new Error();
    }

  return (
    // <div className="grid h-[calc(100vh-2rem)] grid-cols-4 gap-4 p-4">
    //   <div className="col-span-3"> {/* Takes up 3/4 columns */}
    //     <VideoCard />
    //   </div>
    //   <div className="col-span-1"> {/* Takes up 1/4 column */}
    //     <ChatCard />
    //   </div>
    // </div>
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-rose-50 to-teal-50 text-white">
    <Chat accessToken={accessToken} />
</main>
  )
}

export default page