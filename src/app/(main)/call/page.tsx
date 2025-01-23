import React from 'react';
import Chat from '~/app/_components/Chat';
import { getHumeAccessToken } from '~/utils/getHumeAccessToken';
import { VideoCard } from './_components/VideoCard';
import { ChatCard } from './_components/ChatCard';
import { Navbar } from '../home/_components/Navbar';

const page = async () => {
    const accessToken = await getHumeAccessToken();

    if (!accessToken) {
      throw new Error();
    }

    return (
        <main className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top_left,_#FBFFFF,_#80E9FE)] bg-cover text-white">
            <Navbar />
            <div className="flex flex-grow items-center justify-center">
                <div className="w-1/2 h-full bg-white shadow-lg rounded-lg flex items-center justify-center">
                    <Chat accessToken={accessToken} />
                </div>
            </div>
        </main>
    );
};

export default page;
